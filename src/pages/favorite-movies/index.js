import React from 'react';
import Container from '../../components/Container';
import { useGetFavoriteMoviesQuery } from '../../api/apiSlice';
import { useSelector } from 'react-redux';
import Login from '../../components/Login';
import Loader from '../home/components/FeaturedMovies/Loader';
import Item from '../home/components/FeaturedMovies/Item';
import Error from '../../components/error';

function FavoriteMovies() {
  const sessionId = useSelector((state) => state.auth.sessionId);
  const { data, error, isLoading } = useGetFavoriteMoviesQuery(sessionId, { skip: !sessionId });
  return (
    <Container>
      {!sessionId ? (
        <>
          <div className="lg:hidden block">
            <Login setShowModal={() => null} />
          </div>
          <div className="lg:flex hidden justify-center items-center mt-10">
            <div>
              <img src="/energia.png" width={200} />
              <p className="dark:text-white text-xl mt-3 text-center">Aun no has iniciado sesión</p>
            </div>
          </div>
        </>
      ) : isLoading ? (
        <Loader />
      ) : (
        <>
          <div>
            <p className="font-semibold text-gray-700 text-base dark:text-white mb-3">Favorite Movies</p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-y-5 sm:grid-cols-4 gap-x-5 ">
            {error ? (
              <Error />
            ) : (
              data?.results?.map((el, index) => (
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
        </>
      )}
    </Container>
  );
}

export default FavoriteMovies;
