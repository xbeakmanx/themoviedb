import React from 'react';

function Error() {
  return (
    <div className="flex items-center justify-center">
      <div>
        <img className="m-auto" src="error.png" width={120} />
        <p className="dark:text-white text-center my-3">Ups, something went wrong</p>
        <button className="bg-blue-600 text-white rounded-md p-2 w-full" onClick={() => window.location.reload()}>
          Reload
        </button>
      </div>
    </div>
  );
}

export default Error;
