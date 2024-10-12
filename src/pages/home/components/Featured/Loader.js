import React from 'react';

function Loader() {
  return (
    <div
      role="status"
      className="animate-pulse flex flex-col justify-between mt-4 bg-black/10 bg-blend-multiply rounded-3xl h-80 overflow-hidden bg-cover bg-center text-white"
    >
      <div className="bg-gray-200 rounded-xl dark:bg-gray-700  h-80"></div>
    </div>
  );
}

export default Loader;
