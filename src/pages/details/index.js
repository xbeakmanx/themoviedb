import { Link, useParams } from 'react-router-dom';
import Container from '../../components/Container';
import Loader from './Loader';
import { useGetMovieCreditsQuery, useGetMovieQuery } from '../../api/apiSlice';
import ItemCast from './ItemCast';
import Favorite from '../../components/Favorite';

function Details() {
  const { id } = useParams();

  const { data, error, isLoading } = useGetMovieQuery(id);
  const { data: dataCredits, isLoading: loadingCredits } = useGetMovieCreditsQuery(id);

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : !data ? (
        <p>error</p>
      ) : (
        <>
          <div
            className="flex flex-col justify-between mt-4 bg-black/10 bg-blend-multiply rounded-3xl h-80 overflow-hidden bg-cover bg-center px-7 pt-4 pb-6 text-white"
            style={{
              backgroundImage: `url('https://image.tmdb.org/t/p/original${data.backdrop_path}')`,
              backgroundPosition: 'top',
            }}
          ></div>

          <div className="mt-5">
            <div className="md:flex justify-between items-center">
              <span className="uppercase text-3xl font-semibold drop-shadow-lg text-white">{data.title}</span>

              <div className="dark:text-white flex items-center gap-3 ">
                <p> Rate: </p>
                <div className="flex space-x-2 items-center text-xs border border-1 p-1 text-yellow-400 border-yellow-400 rounded-md">
                  <span>{data?.vote_average.toFixed(1)}</span>
                </div>
              </div>
            </div>

            <div className="text-xs text-gray-200 mt-2">
              <p href="#" className="">
                {data.overview}
              </p>
            </div>

            <p className="dark:text-white my-4">Duration: {data?.runtime} min</p>
            <div className="mt-4 flex space-x-3 items-center">
              <Favorite mediaId={data.id} text />
            </div>
          </div>

          <section className="mt-9">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-700 text-base dark:text-white">Stars</span>
            </div>

            <div className="mt-4 grid grid-cols-2  sm:grid-cols-4 gap-x-5 gap-y-5">
              {dataCredits?.cast?.map((el) => (
                <ItemCast key={el.id} name={el.name} character={el.character} img={el?.profile_path} />
              ))}
            </div>
          </section>
        </>
      )}
    </Container>
  );
}

export default Details;
