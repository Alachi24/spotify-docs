---
sidebar_position: 8
tags:
  - test
---

# Spotify URIs and IDs

When interacting with the Spotify Web API, you’ll frequently encounter various identifier parameters in requests and responses. Below are the key types of identifiers and how to use them.

### Identifier Types

- **Spotify URI**:

  - A resource identifier for entities like artists, albums, or tracks.
  - Can be entered in the search box of the Spotify Desktop Client to navigate to the resource.
  - To find a Spotify URI, right-click (Windows) or Ctrl-click (Mac) on the artist, album, or track name.
  - **Example**: `spotify:track:6rqhFgbbKwnb9MLmUQDhG6`

- **Spotify ID**:

  - A base-62 identifier extracted from the end of a Spotify URI (e.g., the part after the resource type).
  - Does not specify the resource type; this is determined by context in the API call.
  - **Example**: `6rqhFgbbKwnb9MLmUQDhG6`

- **Spotify Category ID**:

  - A unique string identifying a Spotify category.
  - **Example**: `party`

- **Spotify User ID**:

  - A unique string identifying a Spotify user, found at the end of the user’s Spotify URI.
  - The current user’s ID can be retrieved using the **Get Current User's Profile** endpoint.
  - **Example**: `wizzler`

- **Spotify URL**:
  - A URL that, when visited, launches the Spotify Client (if installed) and navigates to the requested resource.
  - The client launched depends on the user’s device and account settings at `play.spotify.com`.
  - **Example**: `http://open.spotify.com/track/6rqhFgbbKwnb9MLmUQDhG6`

:::tip

Use the appropriate identifier type based on your API call requirements. Refer to the [API Calls](#) guide for more details.

:::
