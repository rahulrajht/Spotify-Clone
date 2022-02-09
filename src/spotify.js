export const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId ="ee2ba0fc62b948edb6d0c877c523e98b";
const redirectUri = "https://thespotifyclone.netlify.app/";
const scopes = [
  "user-read-private",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "playlist-read-private",
  "user-library-read",
  "playlist-read-collaborative",
  "playlist-read-collaborative",
  "playlist-modify-public",
  "playlist-modify-private",
  "user-follow-read",
  "user-read-playback-state",
  "user-read-currently-playing",
  "user-modify-playback-state",
  "user-follow-modify",
];

export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
