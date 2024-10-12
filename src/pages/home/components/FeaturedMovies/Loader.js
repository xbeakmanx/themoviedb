import React from 'react';

function Loader() {
  return (
    <div role="status" className="animate-pulse mt-4 grid grid-cols-2 gap-y-5 sm:grid-cols-4 gap-x-5">
      <div className="bg-gray-200 rounded-xl dark:bg-gray-700  h-[313px]"></div>
      <div className="bg-gray-200 rounded-xl dark:bg-gray-700  h-[313px]"></div>
      <div className="bg-gray-200 rounded-xl dark:bg-gray-700  h-[313px]"></div>
      <div className="bg-gray-200 rounded-xl dark:bg-gray-700  h-[313px]"></div>
      <div className="bg-gray-200 rounded-xl dark:bg-gray-700  h-[313px]"></div>
      <div className="bg-gray-200 rounded-xl dark:bg-gray-700  h-[313px]"></div>
    </div>
  );
}

export default Loader;
