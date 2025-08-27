---
sidebar_position: 2
title: "Quick Start"
tags:
  - test
---

# Getting Started with the Web API

This guide will help you make your first Spotify Web API call to get a [200 OK] response, retrieving an artist’s metadata. Let’s get started!

### What You'll Learn

- How to set up your Spotify developer account.
- How to request an access token.
- How to make your first API call and get a [200 OK] response.

### Prerequisites

- A Spotify account (free or premium).
- cURL installed ([download here](https://curl.se/download.html)) or your preferred HTTP client.

#### Step 1: Set Up Your Account

Log in to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/) and review the [Developer Terms of Service](https://developer.spotify.com/terms/) if needed.

#### Step 2: Create an App

1. Go to your Dashboard and click **Create an App**.
2. Enter:
   - **App Name**: My First Spotify App
   - **App Description**: A simple app to explore the Spotify API
   - **Redirect URI**: `http://127.0.0.1:3000` (optional for this example).
3. Agree to the terms and click **Create**.

You’ll get a **Client ID** and **Client Secret**.

#### Step 3: Request an Access Token

Use the Client Credentials flow to get an access token:

1. Find your credentials in the Dashboard under your app’s **Settings**.
2. Run this cURL command (replace `your-client-id` and `your-client-secret`):
   ```bash
   curl -X POST "https://accounts.spotify.com/api/token" \
        -H "Content-Type: application/x-www-form-urlencoded" \
        -d "grant_type=client_credentials&client_id=your-client-id&client_secret=your-client-secret"
   ```

Expect a [200 OK] response with a token (valid for 1 hour):

```Json
{
"access_token": "BQDBKJ5eo5jxbtpWjVOj7ryS84khybFpP_lTqzV7uV-T_m0cTfwvdn5BnBSKPxKgEb11",
"token_type": "Bearer",
"expires_in": 3600
}
```

#### Step 4: Make Your First API Call

Use the Get Artist endpoint to get a [200 OK] response:

- Find an artist’s Spotify ID (e.g., Radiohead’s ID is `4Z8W4fKeB5YxbusRsdQVPb`):

  - Search in the Spotify Desktop App, right-click the artist, and copy the ID from the share link.

- Run this cURL command (replace the token):

  ```bash
  curl "https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb" \
       -H "Authorization: Bearer BQDBKJ5eo5jxbtpWjVOj7ryS84khybFpP_lTqzV7uV-T_m0cTfwvdn5BnBSKPxKgEb11"

  ```

A [200 OK] response confirms success, returning data like:

```Json
    {
  "name": "Radiohead",
  "id": "4Z8W4fKeB5YxbusRsdQVPb",
  "type": "artist"
    }
```
