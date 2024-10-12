import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiKey = process.env.REACT_APP_TMDB_API_KEY;

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
  }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: ({ page, stringQuery }) => `/discover/movie?page=${page}${stringQuery}&api_key=${apiKey}`,
    }),
    searchMovieByTitle: builder.query({
      query: ({ searchTerm, page }) => `/search/movie?query=${searchTerm}&page=${page}&api_key=${apiKey}`,
    }),
    searchFeaturedMovie: builder.query({
      query: () => `/trending/movie/day?language=en-U&api_key=${apiKey}`,
    }),
    getGenres: builder.query({
      query: () => `/genre/movie/list?api_key=${apiKey}`,
    }),
    getMovie: builder.query({
      query: (id) => `/movie/${id}?api_key=${apiKey}`,
    }),
    getMovieCredits: builder.query({
      query: (id) => `/movie/${id}/credits?api_key=${apiKey}`,
    }),
    getRequestToken: builder.query({
      query: () => `/authentication/token/new?api_key=${apiKey}`,
    }),
    createSession: builder.mutation({
      query: (requestToken) => ({
        url: `/authentication/session/new?api_key=${apiKey}`,
        method: 'POST',
        body: { request_token: requestToken },
      }),
    }),
    createSessionWithLogin: builder.mutation({
      query: ({ username, password, requestToken }) => ({
        url: `/authentication/token/validate_with_login?api_key=${apiKey}`,
        method: 'POST',
        body: {
          username,
          password,
          request_token: requestToken,
        },
      }),
    }),
    addFavoriteMovie: builder.mutation({
      query: ({ sessionId, mediaId, ifExist }) => ({
        url: `/account/null/favorite?api_key=${apiKey}&session_id=${sessionId}`,
        method: 'POST',
        body: {
          media_id: mediaId,
          media_type: 'movie',
          favorite: ifExist ? false : true,
        },
      }),
      invalidatesTags: ['FavoriteMovies'],
    }),
    getFavoriteMovies: builder.query({
      query: (sessionId) => `/account/null/favorite/movies?api_key=${apiKey}&session_id=${sessionId}`,
      providesTags: ['FavoriteMovies'],
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useSearchMovieByTitleQuery,
  useSearchFeaturedMovieQuery,
  useGetGenresQuery,
  useGetMovieQuery,
  useGetMovieCreditsQuery,
  useGetRequestTokenQuery,
  useCreateSessionMutation,
  useCreateSessionWithLoginMutation,
  useAddFavoriteMovieMutation,
  useGetFavoriteMoviesQuery,
} = apiSlice;
