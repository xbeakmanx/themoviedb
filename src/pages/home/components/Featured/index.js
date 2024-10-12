import React from 'react';
import { useSearchFeaturedMovieQuery } from '../../../../api/apiSlice';
import Loader from './Loader';
import { Link } from 'react-router-dom';
import Favorite from '../../../../components/Favorite';

function Featured() {
  const { data, isLoading } = useSearchFeaturedMovieQuery();

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
                  Details
                </button>
              </Link>
              <Favorite mediaId={el.id} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Featured;
