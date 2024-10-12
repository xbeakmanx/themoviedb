import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
  }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: ({ page, stringQuery }) =>
        `/discover/movie?page=${page}${stringQuery}&api_key=eb02cf1eb810d072cfb6840908382b48`,
    }),
    searchMovieByTitle: builder.query({
      query: ({ searchTerm, page }) =>
        `/search/movie?query=${searchTerm}&page=${page}&api_key=eb02cf1eb810d072cfb6840908382b48`,
    }),
    searchFeaturedMovie: builder.query({
      query: () => `/trending/movie/day?language=en-U&api_key=eb02cf1eb810d072cfb6840908382b48`,
    }),
    getGenres: builder.query({
      query: () => `/genre/movie/list?api_key=eb02cf1eb810d072cfb6840908382b48`,
    }),
    getMovie: builder.query({
      query: (id) => `/movie/${id}?api_key=eb02cf1eb810d072cfb6840908382b48`,
    }),
    getMovieCredits: builder.query({
      query: (id) => `/movie/${id}/credits?api_key=eb02cf1eb810d072cfb6840908382b48`,
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
} = apiSlice;
