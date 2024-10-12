import React from 'react';
import { Link } from 'react-router-dom';

function Item({ title, poster, rate, hoverText, releaseDate, id }) {
  return (
    <>
      <div
        className="justify-end relative group flex flex-col rounded-xl overflow-hidden border dark:border-zinc-600"
        style={{
          aspectRatio: '1/1.76',
        }}
      >
        {poster ? (
          <div>
            <div
              className="absolute inset-0 bg-gray-600 animate-pulse  z-10"
              style={{
                aspectRatio: '1/1.42',
              }}
            ></div>
            <img
              src={`https://image.tmdb.org/t/p/w300${poster}`}
              className="h-full object-contain  w-full relative z-10"
              alt=""
            />
          </div>
        ) : (
          <p className="h-full object-contain w-full dark:text-white flex items-center justify-center text-center">
            {title}
          </p>
        )}

        <div className="absolute inset-0 z-10 bg-black bg-opacity-80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white text-lg text-center">{hoverText}</span>
          {releaseDate && <span className="text-white text-xs text-center">Fecha de estreno: {releaseDate}</span>}

          <Link to={`/view-details/${id}`}>
            <button className="mt-4 px-7 py-2 bg-red-600 text-white rounded-full md:text-md text-xs">Details</button>
          </Link>
        </div>
        <div className="w-full h-1/5 bg-white dark:bg-zinc-800 dark:text-white px-3 flex items-center justify-between border-t-2 border-t-red-600">
          <span className="capitalize font-medium truncate py-4">{title}</span>
          <div className="flex space-x-2 items-center text-xs border border-1 p-1 dark:text-yellow-400 dark:border-yellow-400 text-[#574feb] border-[#574feb] rounded-md">
            <span>{rate.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
