---
sidebar_position: 10
title: "Refresh Token"
tags:
  - test
---

# Refresh Tokens

A **refresh token** is a security credential that allows client applications to obtain new access tokens without requiring users to reauthorize the application.

- **Token Lifespan**: [Access tokens](/docs/Documentation/Access_Token) are designed with a limited lifespan of 1 hour. Once expired, new access tokens can be obtained by providing the original refresh token, which is issued during the authorization token request response.

```Json
{
   "access_token": "NgCXRK...MzYjw",
   "token_type": "Bearer",
   "scope": "user-read-private user-read-email",
   "expires_in": 3600,
   "refresh_token": "NgAagA...Um_SHo"
}

```

### Request

To refresh an access token, you need to send a POST request with the specified parameters and headers.

#### Request Details

- **Method**: POST
- **Endpoint**: `/api/token` (implicit from context, typically used for token requests)

The body of the POST request must be encoded in `application/x-www-form-urlencoded` and include the following parameters:

| Body Parameter  | Relevance                        | Value                                                                                                           |
| --------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `grant_type`    | Required                         | Must be set to `refresh_token`.                                                                                 |
| `refresh_token` | Required                         | The refresh token obtained from the initial authorization token request.                                        |
| `client_id`     | Only required for PKCE extension | The Client ID for your app, available from the [Developer Dashboard](https://developer.spotify.com/dashboard/). |

The request must include the following headers:

| Header Parameter | Relevance                            | Value                                                                                                                               |
| ---------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| `Content-Type`   | Required                             | Must be set to `application/x-www-form-urlencoded`.                                                                                 |
| `Authorization`  | Only required for Authorization Code | A Base64-encoded string of `client_id:client_secret`, formatted as `Authorization: Basic <base64 encoded client_id:client_secret>`. |

#### Example

The following code snippets represent two examples:

- A client side (browser) JavaScript function to refresh tokens issued following the Authorization Code with PKCE extension flow.
- A server side (nodeJS with express) Javascript method to refresh tokens issued under the Authorization Code flow.

```javascript
const getRefreshToken = async () => {
  // Refresh token that has been previously stored
  const refreshToken = localStorage.getItem("refresh_token");
  const url = "https://accounts.spotify.com/api/token";

  const payload = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
      client_id: clientId, // Ensure clientId is defined in your environment
    }),
  };
  const body = await fetch(url, payload);
  const response = await body.json();

  localStorage.setItem("access_token", response.access_token);
  if (response.refresh_token) {
    localStorage.setItem("refresh_token", response.refresh_token);
  }
};
```

```Js
// Server Version (Node.js with request)
app.get('/refresh_token', function(req, res) {
  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
    },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token,
          refresh_token = body.refresh_token || refresh_token;
      res.send({
        'access_token': access_token,
        'refresh_token': refresh_token
      });
    }
  });
});
```

#### Response

If everything goes well, you'll receive a 200 OK response which is very similar to the response when issuing an access token:

```Js
{
  access_token: 'BQBLuPRYBQ...BP8stIv5xr-Iwaf4l8eg',
  token_type: 'Bearer',
  expires_in: 3600,
  refresh_token: 'AQAQfyEFmJJuCvAFh...cG_m-2KTgNDaDMQqjrOa3',
  scope: 'user-read-email user-read-private'
}

```

The refresh token contained in the response, can be used to request new tokens. Depending on the grant used to get the initial refresh token, a refresh token might not be included in each response. When a refresh token is not returned, continue using the existing token.
