import isAuthenticated from "../features/auth/tokenSlice";

export const getAccessToken = () => {
  const state = generateRandomString(16);
  const client_id = "c3055b8b331342558e33316affa69f0f"; // Your client id
  const redirect_uri = "http://localhost:3000"; // Your redirect uri
  const scope = "user-read-private user-read-email";
  const stateKey = "spotify_auth_state";
  let IsAuthenticated = false;
  let url;

  const openInNewTab = (url) => {
   window.open(url, "_blank");
    localStorage.setItem("access_token", window.location.hash.substring(1).replace(/access_token=/g,''));
  };

  function generateRandomString(length) {
    var text = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  localStorage.setItem(stateKey, state);
  url = "https://accounts.spotify.com/authorize";
  url += "?response_type=token";
  url += "&client_id=" + encodeURIComponent(client_id);
  url += "&scope=" + encodeURIComponent(scope);
  url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
  url += "&state=" + encodeURIComponent(state);
  // console.log(url)
  
  if (!localStorage.getItem("access_token")) {
    localStorage.removeItem("access_token");
    openInNewTab(url);
  }
  if (
    localStorage.getItem("access_token") &&
    localStorage.getItem("access_token") !== ""
  ) {
      console.log("user is IN!!!!!")
    IsAuthenticated = true;
  }
  return IsAuthenticated;
};
