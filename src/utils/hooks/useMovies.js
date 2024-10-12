import { useGetMoviesQuery, useSearchMovieByTitleQuery } from '../../api/apiSlice';

const useMovies = (searchTerm, page, activeFilter) => {
  const {
    data: searchData,
    error: searchError,
    isLoading: searchLoading,
  } = useSearchMovieByTitleQuery(
    { searchTerm, page },
    {
      skip: !searchTerm,
    }
  );

  let stringQuery = '';

  if (activeFilter?.genre.id) stringQuery += `&with_genres=${activeFilter?.genre?.id}`;
  if (activeFilter?.calification) stringQuery += `&vote_average.gte=${activeFilter?.calification}`;
  if (activeFilter?.date) stringQuery += `&primary_release_year=${activeFilter?.date}`;

  const { data: moviesData, error: moviesError, isLoading: moviesLoading } = useGetMoviesQuery({ page, stringQuery });

  const isLoading = searchLoading || moviesLoading;
  const error = searchError || moviesError;
  const movies = searchTerm ? searchData?.results : moviesData?.results;
  const totalPages = searchTerm ? searchData?.total_pages : moviesData?.total_pages;

  return { movies, error, isLoading, pages: totalPages };
};

export default useMovies;
