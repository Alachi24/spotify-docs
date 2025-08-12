---
sidebar_position: 7
tags:
  - test
---

# Rate Limits

If your app makes a high volume of Web API requests in a short period, it may receive a **429 Too Many Requests** error response from Spotify. This indicates that your app has exceeded the Web API _rate limit_, which is designed to ensure API reliability and encourage responsible usage by third-party developers.

### Spotify's Rate Limit

- **Calculation**: The rate limit is based on the number of API calls your app makes within a rolling 30-second window.
- **Error Response**: Exceeding the limit triggers a **429** error, which may cause unexpected behavior for users.
- **Mode-Dependent Limits**:
  - The rate limit varies depending on your app’s mode:
    - **Development Mode**: Stricter limits apply.
    - **Extended Quota Mode**: Higher limits are available (request an extension via the [Developer Dashboard](https://developer.spotify.com/dashboard/)).

#### Exceptions

Spotify occasionally imposes limits beyond the standard API-wide rate limit. Certain endpoints, such as the playlist image upload endpoint, may have custom rate limits that differ from your app's overall rate limit.

##### Key Information

- **Custom Limits**: Some API endpoints have unique rate restrictions tailored to their specific use cases.
- **Error Details**: Check the body of your API response from Spotify for more information about the error you’ve received.

### Building Apps with Rate Limits in Mind

Every app is unique, so it’s important to plan your app’s architecture and user experience with Spotify’s Web API rate limits in mind. Below are several techniques to help you design an app that performs well within these limits.

#### Techniques to Manage Rate Limits

- **Apply for Extended Quota Mode**:

  - If your app serves many Spotify users simultaneously, apply for **Extended Quota Mode**.
  - This mode offers a higher rate limit compared to the default **Development Mode**.
  - To apply, open your app’s detail page in the [Developer Dashboard](https://developer.spotify.com/dashboard/) and click the **Request Extension** link.
  - **Note**: This is ideal for apps expecting high traffic.

- **Develop a Backoff-Retry Strategy**:

  - When your app hits a rate limit, it receives a **429 Too Many Requests** error.
  - Use this as a signal to reduce API request frequency.
  - The 429 response header includes a `Retry-After` value (in seconds). Wait this duration before retrying.
  - **Example**: If `Retry-After: 10`, wait 10 seconds before the next request.

- **Use Batch APIs to Your Advantage**:

  - Some APIs, like the **Get Multiple Albums** endpoint, allow fetching multiple data items in one request.
  - Reduce your API call count by using batch APIs when needing data for multiple objects.

- **Use the snapshot_id**:

  - Playlist APIs provide a `snapshot_id` that reflects the playlist version you’re working with.
  - Storing and checking the `snapshot_id` can prevent redundant downloads of unchanged playlists.
  - Learn more in the [Working with Playlists Guide](#) (update with actual link).

- **Study Your App's Request Patterns**:

  - The [Developer Dashboard](https://developer.spotify.com/dashboard/) shows a graph of your API request volume over time.
  - Analyze anomalies (e.g., traffic surges after a newsletter) to optimize request timing.
  - Example: Stagger email delivery over a day to avoid spikes.
  - **Advanced Tip**: Use your own logging tools to track API calls for deeper insights.

- **Consider 'Lazy Loading' Features**:
  - Users often don’t use all features immediately on a webpage or mobile app view.
  - Make API calls conditional on user actions, like clicking a **Learn More** link or scrolling to a specific area.
  - **Example**: Load data only when a user interacts with a feature.
