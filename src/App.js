import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { getAccessToken } from "./api/getAccessToken";
import {
  isAuthenticated,
  isNotAuthenticated,
} from "./features/auth/tokenSlice";
import { useGetSpotifyProfileQuery } from "./api/spotifyService";

function App() {
  const isAuth = useSelector((state) => state.getToken);
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetSpotifyProfileQuery();
  console.log(data);

  const loginHandler = () => {
    const isLoggedIn = getAccessToken();
    if (isLoggedIn) {
      console.log(isLoggedIn, "user Logged in");
      dispatch(isAuthenticated());
    } else {
      console.log(isLoggedIn, "user not Logged in");
      dispatch(isNotAuthenticated());
    }
  };
  // Spotify api that query the profile + get the access token from local storage
  // Check if token is expeired and open the new window if we don't have a access token
  return (
    <section className="posts-list">
      {isAuth.isAuth && (
        <div>
          <h1>Welcome {data.display_name} </h1>
          <span>Origin Country: {data.country}</span><br />
          <span>Email: {data.email}</span><br />
          <span>Number Of followers {data.followers.total}</span><br />
          <span>Spotify Profile {data.external_urls.spotify}</span><br />
        </div>
      )}
      {!isAuth.isAuth && <h1>User is Not Authenicated</h1>}
      {!isAuth.isAuth && (
        <button onClick={loginHandler}>Log in with Spotify</button>
      )}
    </section>
  );
}

export default App;
