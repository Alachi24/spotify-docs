import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "spotify/spotify-api",
    },
    {
      type: "category",
      label: "Albums",
      link: {
        type: "doc",
        id: "spotify/albums",
      },
      items: [
        {
          type: "doc",
          id: "spotify/get-album",
          label: "Get Album",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/get-several-albums",
          label: "Get Several Albums",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/get-album-tracks",
          label: "Get Album Tracks",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/get-user-s-saved-album",
          label: "Get User's Saved Album",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/save-albums-for-current-user",
          label: "Save Albums for current user",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spotify/remove-users-saved-albums",
          label: "Remove Users' Saved Albums",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "spotify/check-user-s-saved-albums",
          label: "Check User's Saved Albums",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/get-new-releases",
          label: "Get New Releases",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Artists",
      link: {
        type: "doc",
        id: "spotify/artists",
      },
      items: [
        {
          type: "doc",
          id: "spotify/get-artist",
          label: "Get Artist",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/get-several-artists",
          label: "Get Several Artists",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/get-artist-s-albums",
          label: "Get Artist's Albums",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/get-artist-s-top-tracks",
          label: "Get Artist's Top Tracks",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/get-artist-s-related-artists-deprecated",
          label: "Get Artist's Related Artists[DEPRECATED]",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Audiobooks",
      link: {
        type: "doc",
        id: "spotify/audiobooks",
      },
      items: [
        {
          type: "doc",
          id: "spotify/get-an-audiobook",
          label: "Get an Audiobook",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/get-several-audiobooks",
          label: "Get Several Audiobooks",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/get-audiobook-chapters",
          label: "Get Audiobook Chapters",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/get-user-s-saved-audiobooks",
          label: "Get User's Saved Audiobooks",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/save-audiobooks-for-current-user",
          label: "Save Audiobooks for Current User",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spotify/remove-user-s-saved-audiobooks",
          label: "Remove User's Saved Audiobooks",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "spotify/check-user-s-saved-audiobooks",
          label: "Check User's Saved Audiobooks",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Categories",
      link: {
        type: "doc",
        id: "spotify/categories",
      },
      items: [
        {
          type: "doc",
          id: "spotify/get-several-browse-categories",
          label: "Get Several Browse Categories",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/get-single-browse-category",
          label: "Get Single Browse Category",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Chapters",
      link: {
        type: "doc",
        id: "spotify/chapters",
      },
      items: [
        {
          type: "doc",
          id: "spotify/get-a-chapter",
          label: "Get a Chapter",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/get-several-chapters",
          label: "Get Several Chapters",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Episode",
      link: {
        type: "doc",
        id: "spotify/episode",
      },
      items: [
        {
          type: "doc",
          id: "spotify/get-episode",
          label: "Get Episode",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/get-several-episodes",
          label: "Get Several Episodes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/get-user-s-saved-episodes",
          label: "Get User's Saved Episodes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/save-episodes-for-current-user",
          label: "Save Episodes for Current User",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spotify/remove-user-s-saved-episodes",
          label: "Remove User's Saved Episodes",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "spotify/check-user-s-saved-episodes",
          label: "Check User's Saved Episodes",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Genres",
      link: {
        type: "doc",
        id: "spotify/genres",
      },
      items: [
        {
          type: "doc",
          id: "spotify/get-available-genre-seeds-deprecated",
          label: "Get Available Genre Seeds[DEPRECATED]",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Markets",
      link: {
        type: "doc",
        id: "spotify/markets",
      },
      items: [
        {
          type: "doc",
          id: "spotify/get-available-markets",
          label: "Get Available Markets",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Player",
      link: {
        type: "doc",
        id: "spotify/player",
      },
      items: [
        {
          type: "doc",
          id: "spotify/get-playback-state",
          label: "Get Playback State",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/transfer-playback",
          label: "Transfer Playback",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spotify/get-available-devices",
          label: "Get Available Devices",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/get-currently-playing-track",
          label: "Get Currently Playing Track",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/start-resume-playback",
          label: "Start/Resume Playback",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spotify/pause-playback",
          label: "Pause Playback",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spotify/skip-to-next",
          label: "Skip To Next",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "spotify/skip-to-previous",
          label: "Skip To Previous",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "spotify/seek-to-position",
          label: "Seek To Position",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spotify/set-repeat-mode",
          label: "Set Repeat Mode",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spotify/set-playback-volume",
          label: "Set Playback Volume",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spotify/toggle-playback-shuffle",
          label: "Toggle Playback Shuffle",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spotify/get-recently-played-tracks",
          label: "Get Recently Played Tracks",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/get-the-user-s-queue",
          label: "Get the User's Queue",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/add-item-to-playback-queue",
          label: "Add Item to Playback Queue",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Playlists",
      link: {
        type: "doc",
        id: "spotify/playlists",
      },
      items: [
        {
          type: "doc",
          id: "spotify/create-playlist",
          label: "Create Playlist",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "spotify/get-playlist",
          label: "Get Playlist",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/change-playlist-details",
          label: "Change Playlist Details",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spotify/update-playlist-items",
          label: "Update Playlist Items",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spotify/add-items-to-playlist",
          label: "Add Items to Playlist",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "spotify/get-playlist-items",
          label: "Get Playlist Items",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/remove-playlist-items",
          label: "Remove Playlist Items",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "spotify/get-playlist-cover-image",
          label: "Get Playlist Cover Image",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/add-custom-playlist-cover-image",
          label: "Add Custom Playlist Cover Image",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spotify/get-user-s-playlists",
          label: "Get User's Playlists",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/get-current-user-s-playlists",
          label: "Get Current User's Playlists",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/get-featured-playlists-deprecated",
          label: "Get Featured Playlists[DEPRECATED]",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/get-category-s-playlists-deprecated",
          label: "Get Category's Playlists[DEPRECATED]",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Search",
      link: {
        type: "doc",
        id: "spotify/search",
      },
      items: [
        {
          type: "doc",
          id: "spotify/search-for-item",
          label: "Search for Item",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Shows",
      link: {
        type: "doc",
        id: "spotify/shows",
      },
      items: [
        {
          type: "doc",
          id: "spotify/get-show",
          label: "Get Show",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/get-several-shows",
          label: "Get Several Shows",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/get-show-episodes",
          label: "Get Show Episodes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/check-user-s-saved-shows",
          label: "Check User's Saved Shows",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/get-user-s-saved-shows",
          label: "Get User's Saved Shows",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/save-shows-for-current-user",
          label: "Save Shows for Current User",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spotify/remove-user-s-saved-shows",
          label: "Remove User's Saved Shows",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Tracks",
      link: {
        type: "doc",
        id: "spotify/tracks",
      },
      items: [
        {
          type: "doc",
          id: "spotify/get-track",
          label: "Get Track",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/get-several-tracks",
          label: "Get Several Tracks",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/get-track-s-audio-features",
          label: "Get Track's Audio Features [DEPRECATED]",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/get-several-tracks-audio-features-deprecated",
          label: "Get Several Tracks' Audio Features[DEPRECATED]",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/get-track-s-audio-analysis-deprecated",
          label: "Get Track's Audio Analysis[DEPRECATED]",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/get-user-s-saved-tracks",
          label: "Get User's Saved Tracks",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/save-tracks-for-current-user",
          label: "Save Tracks for Current User",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spotify/remove-user-s-saved-tracks",
          label: "Remove User's Saved Tracks",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "spotify/check-user-s-saved-tracks",
          label: "Check User's Saved Tracks",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/get-recommendations-deprecated",
          label: "Get Recommendations[DEPRECATED]",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Users",
      link: {
        type: "doc",
        id: "spotify/users",
      },
      items: [
        {
          type: "doc",
          id: "spotify/get-user-s-profile",
          label: "Get User's Profile",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/get-followed-artists",
          label: "Get Followed Artists",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/follow-artists-or-users",
          label: "Follow Artists or Users",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spotify/unfollow-artists-or-users",
          label: "Unfollow Artists or Users",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "spotify/check-if-user-follows-artists-or-users",
          label: "Check If User Follows Artists or Users",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/get-user-s-top-items",
          label: "Get User's Top Items",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/get-current-user-s-profile",
          label: "Get Current User's Profile",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "spotify/follow-playlist",
          label: "Follow Playlist",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "spotify/unfollow-playlist",
          label: "Unfollow Playlist",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "spotify/check-if-current-user-follows-playlist",
          label: "Check if Current User Follows Playlist",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Access Token & Auth Flow",
      link: {
        type: "doc",
        id: "spotify/access-token-auth-flow",
      },
      items: [
        {
          type: "doc",
          id: "spotify/access-token",
          label: "Access Token",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
