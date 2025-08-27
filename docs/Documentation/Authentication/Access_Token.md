---
sidebar_position: 2
title: "Authentication"
tags:
  - test
---

# Access Token

An access token is a string that holds your credentials and permissions, allowing you to access Spotify resources (e.g., artists, albums, tracks) or user data (e.g., your profile or playlists).

### Using the Access Token

To make API calls, you must include the following header in your requests:

| Header Parameter | Value                                                     |
| ---------------- | --------------------------------------------------------- |
| Authorization    | Valid access token in the format: `Bearer <Access Token>` |

**Note**: The access token is valid for 1 hour (3600 seconds). Once it expires, you’ll need to request a new one.

### Examples

The following example uses cURL to retrieve information about a track using the [Get a track](/docs/spotify/get-track) endpoint:

```bash
curl --request GET \
    'https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V' \
    --header "Authorization: Bearer NgCXRK...MzYjw"

```

The following code implements the getProfile() function which performs the API call to the [Get Current User's Profile](/docs/spotify/get-current-user-s-profile) endpoint to retrieve the user profile related information:

```javascript
async function getProfile(accessToken) {
  let accessToken = localStorage.getItem("access_token");

  const response = await fetch("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  });

  const data = await response.json();
}
```
