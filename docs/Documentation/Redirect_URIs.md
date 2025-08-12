---
sidebar_position: 6
tags:
  - test
---

# Redirect URIs

:::danger

Beginning on the 9th of April 2025 we will enforce the subsequent validations to all newly created apps.

We expect all clients to migrate to the new redirect URI validation by November 2025.

To know more please refer to the Spotify Developer Blog.

:::

When creating a Spotify app, you must specify a **redirect URI**. This is the URI to which Spotify redirects the user after they grant or deny permission to your app. The redirect URI is essential for the **Authorization Code Flow** and **Implicit Grant Flow**. The redirect URI you provide when creating your app must match exactly the URI used during authorization, with the only exception being loopback IP literals, which can dynamically include port numbers.

### Requirements

At Spotify, we prioritize security, so you must adhere to the following guidelines when defining your redirect URI:

- **Use HTTPS**: Always use HTTPS for your redirect URI, unless you are using a loopback address, where HTTP is allowed.
- **Loopback Addresses**: If using a loopback address, specify the explicit IPv4 or IPv6 format, such as:
  - `http://127.0.0.1:PORT`
  - `http://[::1]:PORT`
- **No localhost**: The `localhost` address is not permitted as a redirect URI.

### Loopback Addresses and Port Numbers

When using a loopback IP literal, the port number might not be known in advance if it’s dynamically assigned. In such cases:

- Register your redirect URI with a loopback IP literal (e.g., `http://127.0.0.1` or `http://[::1]`) without specifying a port number.
- Add the dynamically assigned port number to the redirect URI in the authorization request (e.g., `http://127.0.0.1:8080`).
- **Note**: This flexibility applies only to loopback IP literals and aligns with [IETF recommendations](https://www.rfc-editor.org/rfc/rfc8252.html#section-7.3). Other redirect URIs must include a fixed port number.

### Examples

Here are some examples of redirect URIs:

```
    https://example.com/callback
    http://127.0.0.1:8000/callback
    http://[::1]:8000/callback
```
