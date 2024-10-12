import React from 'react';

function ItemCast({ name, character, img }) {
  return (
    <div className="relative rounded-xl overflow-hidden">
      {img ? (
        <img src={`https://image.tmdb.org/t/p/w300${img}`} className="object-cover h-full w-full -z-10" alt="" />
      ) : (
        <div> </div>
      )}

      <div className="absolute top-0 h-full w-full bg-gradient-to-t from-black/50 p-3 flex flex-col justify-between">
        <div />
        <div className="self-center flex flex-col items-center space-y-2">
          <span className="capitalize text-white font-medium drop-shadow-md">{name}</span>
          <span className="text-gray-100 text-xs">{character}</span>
        </div>
      </div>
    </div>
  );
}

export default ItemCast;
