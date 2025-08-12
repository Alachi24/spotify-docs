---
sidebar_position: 9
title: "Authorization Code"
tags:
  - test
---

# Authorization Code Flow

The **Authorization Code Flow** is ideal for long-running applications, such as web and mobile apps, where users grant permission once and it persists.

- **Mobile App Consideration**: If using this flow in a mobile app or any application where the client secret cannot be securely stored, use the **PKCE (Proof Key for Code Exchange)** extension. Continue reading to learn how to implement it correctly.

### Pre-requisites

Before proceeding, ensure the following:

- You have read the [Authorization Guide](#).
- You have created an app following the [Apps Guide](\docs\Documentation\Apps.md).

### Example

Check out an example app implementing the Authorization Code Flow on GitHub in the [web-api-examples repository](https://github.com/spotify/web-api-examples).

### Requesting User Authorization

The first step to enable your app to access Spotify resources on behalf of a user is to request their authorization. This involves building and sending a GET request to the `/authorize` endpoint with the following parameters.

| Query Parameter | Relevance                      | Value                                                                                                                                                                                                                                   |
| --------------- | ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `client_id`     | Required                       | The Client ID generated after registering your application (see [App Guide](\docs\Documentation\Apps.md) for details).                                                                                                                  |
| `response_type` | Required                       | Set to `code` for the Authorization Code Flow.                                                                                                                                                                                          |
| `redirect_uri`  | Required                       | The URI to redirect to after the user grants or denies permission. This must match exactly (including case, slashes, etc.) one of the Redirect URIs allowlisted during app registration (see [App Guide](\docs\Documentation\Apps.md)). |
| `state`         | Optional, strongly recommended | A random string to protect against cross-site request forgery (CSRF) attacks. Refer to RFC-6749 for details.                                                                                                                            |
| `scope`         | Optional                       | A space-separated list of scopes. If omitted, only public data (visible in Spotify players) is accessible.                                                                                                                              |
| `show_dialog`   | Optional                       | Determines if the user must re-approve the app. Defaults to `false` (auto-redirects if approved); set to `true` to force re-approval.                                                                                                   |

:::note

Ensure the `redirect_uri` is correctly configured to avoid authorization errors. Check the [Redirect URI Guide](\docs\Documentation\Redirect_URIs.md) for best practices.

:::

The following JavaScript code example implements the /login method using Express framework to initiates the authorization request:

```Js
var client_id = 'CLIENT_ID';
var redirect_uri = 'http://127.0.0.1:8888/callback';

var app = express();

app.get('/login', function(req, res) {

  var state = generateRandomString(16);
  var scope = 'user-read-private user-read-email';

  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});

```

Once the authorization request is processed, the user will encounter an authorization dialog requesting access to the `user-read-private` and `user-read-email` scopes.

#### Authorization Process

- **Scope Details**: The Spotify OAuth 2.0 service displays the scopes for which access is requested.
- **Login Prompt**: If the user is not logged in, they are prompted to log in with their Spotify credentials.
- **Authorization Request**: If logged in, the user is asked to approve access to the data or features defined by the scopes.
- **Redirect**: After the user accepts or denies the request, the Spotify OAuth 2.0 service redirects them to your specified `redirect_uri`. In this example, the redirect address is `https://127.0.0.1:8888/callback`.

#### Response

If the user accepts your request, they are redirected back to the application via the `redirect_uri` provided in the initial authorization request.

The callback URL includes the following query parameters:

| Query Parameter | Value                                                                |
| --------------- | -------------------------------------------------------------------- |
| `code`          | An authorization code that can be exchanged for an access token.     |
| `state`         | The value of the `state` parameter supplied in the original request. |

For Example:

```
https://my-domain.com/callback?code=NApCCg..BkWtQ&state = 34fFs29kd09

```

If the user denies your authorization request or an error occurs, the response query string will include the following parameters.

| Query Parameter | Value                                                                |
| --------------- | -------------------------------------------------------------------- |
| `error`         | The reason authorization failed, e.g., `access_denied`.              |
| `state`         | The value of the `state` parameter supplied in the original request. |

For Example:

```
https://my-domain.com/callback?error=access_denied&state=34fFs29kd09

```

In both cases, your app should compare the state parameter that it received in the redirection URI with the state parameter it originally provided to Spotify in the authorization URI. If there is a mismatch then your app should reject the request and stop the authentication flow.

### Requesting an Access Token

If the user accepts your authorization request, your app can exchange the received authorization code for an access token. This is done by sending a POST request to the `/api/token` endpoint.

#### Request Details

- **Method**: POST
- **Endpoint**: `/api/token`

The body of the POST request must be encoded in `application/x-www-form-urlencoded` and include the following parameters:

| Body Parameter | Relevance | Value                                                                                                                                    |
| -------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `grant_type`   | Required  | Must be set to `authorization_code`.                                                                                                     |
| `code`         | Required  | The authorization code returned from the previous authorization request.                                                                 |
| `redirect_uri` | Required  | Used for validation only (no redirection occurs). Must exactly match the `redirect_uri` provided when requesting the authorization code. |

The request must include the following HTTP headers:

| Header Parameter | Relevance | Value                                                                                                                               |
| ---------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `Authorization`  | Required  | A Base64-encoded string of `client_id:client_secret`, formatted as `Authorization: Basic <base64 encoded client_id:client_secret>`. |
| `Content-Type`   | Required  | Must be set to `application/x-www-form-urlencoded`.                                                                                 |

This step is usually implemented within the callback described on the request of the previous steps:

```Js
app.get('/callback', function(req, res) {

  var code = req.query.code || null;
  var state = req.query.state || null;

  if (state === null) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
      },
      json: true
    };
  }
});

```

#### Response

On success, the response will have a 200 OK status and the following JSON data in the response body:

| Key             | Type   | Description                                                                                    |
| --------------- | ------ | ---------------------------------------------------------------------------------------------- |
| `access_token`  | string | An access token to include in subsequent API calls, such as those to Spotify Web API services. |
| `token_type`    | string | Specifies how the access token is used; always set to `Bearer`.                                |
| `scope`         | string | A space-separated list of scopes granted for this `access_token`.                              |
| `expires_in`    | int    | The duration (in seconds) for which the access token remains valid.                            |
| `refresh_token` | string | A token for refreshing the access token; see the [Refreshing Tokens](#) guide.                 |

### What's next?

- Congratulations! Your fresh access token is ready to be used! How can we make API calls with it? take a look at to the [access token](\docs\Documentation\Access_Token.md) guide to learn how to make an API call using your new fresh access token.

- If your access token has expired, you can learn how to issue a new one without requiring users to reauthorize your application by reading the [refresh token](#) guide.
- For users who are more comfortable with Postman, we’ve prepared a guide on the [Access Token Authentication Flow](\docs\spotify\access-token-auth-flow.tag.mdx) to help you navigate the process smoothly..
