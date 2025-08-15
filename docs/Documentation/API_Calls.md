---
sidebar_position: 4
title: "API Calls"
tags:
  - test
---

# Understanding API Calls

The Spotify Web API is a RESTful API that provides JSON metadata about music artists, albums, and tracks directly from the Spotify Data Catalogue.

### Base URL

The base address for all Web API requests is: `https://api.spotify.com`

### Authorization

All requests to the Spotify Web API require authorization. Be sure to read the _Authorization Guide_ to grasp the fundamentals.

To access private data (e.g., user profiles or playlists), your application must obtain the user’s permission.

### Requests

Data resources are accessed using standard HTTP requests in UTF-8 format to an API endpoint. The Web API supports the following HTTP verbs:

| Method | Action                                       |
| ------ | -------------------------------------------- |
| GET    | Retrieves resources                          |
| POST   | Creates resources                            |
| PUT    | Changes or replaces resources or collections |
| DELETE | Deletes resources                            |

**Note**: Choose the appropriate HTTP method based on the action you want to perform on a resource.

### Understanding API Responses

The Spotify Web API typically returns JSON data in the response body. However, some endpoints (e.g., Change Playlist Details) return only an HTTP status code instead of JSON.

#### Response Status Codes

The Web API uses the following status codes, as defined in RFC 2616 and RFC 6585:

| Status Code | Description                                                                                                                                     |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| 200         | **OK** - The request succeeded. The response body and headers contain the result.                                                               |
| 201         | **Created** - The request was fulfilled, creating a new resource.                                                                               |
| 202         | **Accepted** - The request is being processed, but not yet complete.                                                                            |
| 204         | **No Content** - The request succeeded, but no message body is returned.                                                                        |
| 304         | **Not Modified** - See [Conditional Requests](docs/Documentation/API_Calls).                                                                    |
| 400         | **Bad Request** - The server couldn’t understand the request due to invalid syntax. Check the response body for details; see _Response Schema_. |
| 401         | **Unauthorized** - Authentication is required, or the provided credentials were rejected.                                                       |
| 403         | **Forbidden** - The server understood the request but refuses to fulfill it.                                                                    |
| 404         | **Not Found** - The requested resource couldn’t be found (temporary or permanent).                                                              |
| 429         | **Too Many Requests** - [Rate limiting](/docs/Documentation/Rate_Limits) has been applied. applied.                                             |
| 500         | **Internal Server Error** - Our clever coders aim to catch all errors, but if you encounter this, please report it via a comment below.         |
| 502         | **Bad Gateway** - The server, acting as a gateway or proxy, received an invalid response from an upstream server.                               |
| 503         | **Service Unavailable** - The server is temporarily unable to handle the request. Try again after a delay.                                      |

#### Handling Response Errors

The Spotify Web API uses two distinct formats to describe errors: the **Authentication Error Object** and the **Regular Error Object**. Below, we detail the Authentication Error Object, which applies to authentication and authorization requests.

##### Authentication Error Object

When your application makes requests related to authentication or authorization (e.g., retrieving or refreshing an access token), the error response follows the `RFC 6749` standard for the OAuth 2.0 Authorization Framework.

The Authentication Error Object includes the following key-value pairs:

| Key                 | Value Type | Value Description                                                    |
| ------------------- | ---------- | -------------------------------------------------------------------- |
| `error`             | string     | A high-level error description as defined in RFC 6749 Section 5.2.   |
| `error_description` | string     | A detailed error explanation as defined in RFC 6749 Section 4.1.2.1. |

**Note**: Refer to the **OAuth 2.0 Authorization Framework RFC 6749** for a complete list of error codes and descriptions.

Here is an example of a failing request to refresh an access token.

```bash
curl -H "Authorization: Basic Yjc...cK" -d grant_type=refresh_token -d refresh_token=AQD...f0 "https://accounts.spotify.com/api/token"
{
    "error": "invalid_client",
    "error_description": "Invalid client secret"
}
```

##### Regular Error Object

When a Spotify Web API request fails, apart from the HTTP status code, an unsuccessful response includes a JSON object with the following details.

The Regular Error Object contains these key-value pairs:

| Key       | Value Type | Value Description                                                                                               |
| --------- | ---------- | --------------------------------------------------------------------------------------------------------------- |
| `status`  | integer    | The HTTP status code, also returned in the response header. See **Response Status Codes** for more information. |
| `message` | string     | A concise explanation of the error's cause.                                                                     |

**Note**: Use the `status` and `message` fields to debug and handle errors effectively in your application.

Here, for example is the error that occurs when trying to fetch information for a non-existent track:

```bash
curl -i "https://api.spotify.com/v1/tracks/2KrxsD86ARO5beq7Q0Drfqa"
HTTP/1.1 400 Bad Request
  {
      "error": {
          "status": 400,
          "message": "invalid id"}
  }
```

### Conditional Requests

Most API responses contain appropriate cache-control headers set to assist in client-side caching:

- If you have cached a response, do not request it again until the response has expired.
- If the response contains an ETag, set the If-None-Match request header to the ETag value.
- If the response has not changed, the Spotify service responds quickly with **304 Not Modified** status, meaning that your cached version is still good and your application should use it.

### Timestamps

Timestamps are returned in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format as [Coordinated Universal Time (UTC)](https://en.wikipedia.org/wiki/Offset_to_Coordinated_Universal_Time) with a zero offset: `YYYY-MM-DDTHH:MM:SSZ`. If the time is imprecise (for example, the date/time of an album release), an additional field indicates the precision; see for example, release_date in an [Album Object](/docs/spotify/get-album-tracks.api).

### Pagination

Some endpoints support a way of paging the dataset, taking an offset and limit as query parameters:

```bash
$ curl
https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?album_type=SINGLE&offset=20&limit=10
```

In this example, in a list of 50 (total) singles by the specified artist : From the twentieth (offset) single, retrieve the next 10 (limit) singles.
