import React from 'react';
import Loader from './Loader';
import Item from './Item';
import useMovies from '../../../../utils/hooks/useMovies';
import './paginate.css';
import SearchFilter from './Filter/SearchFilter';
import TagFilters from './TagFilters';
import { shallowEqual, useSelector } from 'react-redux';
import Pagination from './Filter/Pagination';
import Error from '../../../../components/error';

function FeaturedMovies() {
  const filters = useSelector((state) => state.filters, shallowEqual);
  const searchTerm = useSelector((state) => state.search, shallowEqual);
  const currentPage = useSelector((state) => state.pagination, shallowEqual);

  const { movies, error, isLoading, pages } = useMovies(searchTerm, currentPage, filters);

  return (
    <>
      <section className="mt-9">
        <div className="sm:flex items-center justify-between ">
          <div>
            <p className="font-semibold text-gray-700 text-base dark:text-white mb-3">Featured Movies</p>
            <TagFilters />
          </div>

          <SearchFilter searchTerm={searchTerm} />
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="mt-4 grid grid-cols-2 gap-y-5 sm:grid-cols-4 gap-x-5 ">
            {error ? (
              <Error />
            ) : (
              movies?.map((el, index) => (
                <Item
                  key={index}
                  id={el.id}
                  title={el.title}
                  poster={el.poster_path}
                  rate={el.vote_average}
                  hoverText={el.title}
                  releaseDate={el.release_date}
                />
              ))
            )}
          </div>
        )}
      </section>
      {!error && <Pagination pages={pages} />}
    </>
  );
}

export default FeaturedMovies;
