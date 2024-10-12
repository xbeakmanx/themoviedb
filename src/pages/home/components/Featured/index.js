import React from 'react';
import { useSearchFeaturedMovieQuery } from '../../../../api/apiSlice';
import Loader from './Loader';
import { Link } from 'react-router-dom';

function Featured() {
  const { data, error, isLoading } = useSearchFeaturedMovieQuery();

  const el = data?.results?.length > 0 ? data?.results[0] : false;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : !el ? (
        ''
      ) : (
        <div
          className="flex flex-col justify-between mt-4 bg-black/10 bg-blend-multiply rounded-3xl h-80 overflow-hidden bg-cover bg-center px-7 pt-4 pb-6 text-white"
          style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original${el.backdrop_path}')`,
            backgroundPosition: 'top',
          }}
        >
          <div className="flex -space-x-1 items-center"></div>

          <div className="bg-gradient-to-r from-black/30 to-transparent -mx-7 -mb-6 px-7 pb-6 pt-2">
            <span className="uppercase text-3xl font-semibold drop-shadow-lg ">{el.title}</span>
            <div className="text-xs text-gray-200 mt-2">
              <p href="#" className="">
                {el.overview}
              </p>
            </div>
            <div className="mt-4 flex space-x-3 items-center">
              <Link to={`/view-details/${el.id}`}>
                <button className="px-5 py-2.5 bg-red-600 hover:bg-red-700 rounded-lg text-xs inline-block">
                  Detalles
                </button>
              </Link>
              <a href="#" className="p-2.5 bg-gray-800/80 rounded-lg hover:bg-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Featured;
