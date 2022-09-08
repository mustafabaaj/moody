import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const spotifyAPIs = createApi({
  reducerPath: "spotifyAPIs",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spotify.com/v1",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("access_token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSpotifyProfile: builder.query({
      query: () => "/me",
    }),
  }),
});

export const { useGetSpotifyProfileQuery } = spotifyAPIs;
