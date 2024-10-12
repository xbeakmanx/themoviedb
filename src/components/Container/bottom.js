import React from 'react';
import DarkMode from './darkMode';
import { Link } from 'react-router-dom';

function Bottom() {
  return (
    <div className="sticky bottom-0 w-full dark:bg-slate-800 bg-gray-200 border-t border-gray-500 z-30 md:hidden">
      <div className="grid grid-cols-3 gap-3 items-center ">
        <Link to="/" className="dark:text-white border-r border-gray-600 py-1 text-center">
          <button className="text-sm">Home</button>
        </Link>
        <Link to="/favorite-movies" className="dark:text-white border-r border-gray-600 py-1 text-center">
          <button className="text-sm">Favorites</button>
        </Link>
        <DarkMode cellphone />
      </div>
    </div>
  );
}

export default Bottom;
