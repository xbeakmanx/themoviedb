import React from 'react';
import { useGetGenresQuery } from '../../../../../api/apiSlice';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../../../../../features/filtersSlice';

function ModalFilter({ setShowModal }) {
  const { data, error, isLoading } = useGetGenresQuery();
  const filters = useSelector((state) => state.filters, shallowEqual);

  const dispatch = useDispatch();

  const years = [];
  for (let year = 2024; year >= 1900; year--) {
    years.push(year);
  }

  const handleUpdate = (type, value, nameGenre) => {
    dispatch(updateFilter({ type, value, nameGenre }));
  };

  return (
    <div className="mt-6">
      <p className="dark:text-white -mt-3 mb-2 text-xs"> Filtrar por género</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
        {isLoading ? (
          <p className="dark:text-white">Loading...</p>
        ) : (
          data?.genres?.map((el, index) => {
            const ifExist = filters.genre.id === el.id ? true : false;

            return (
              <div
                onClick={() => handleUpdate('genre', el.id, el.name)}
                className={`border border-yellow-500 text-white px-2 py-1 rounded-md  cursor-pointer ${
                  ifExist ? 'bg-yellow-500' : ''
                }`}
                key={index}
              >
                {el.name}
              </div>
            );
          })
        )}
      </div>

      <div className="relative mb-8">
        <p className="dark:text-white -mt-3 mb-2 text-xs">Filter by release date</p>
        <select
          id="countries"
          value={filters.date}
          onChange={(e) => handleUpdate('date', e.target.value)}
          className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full ps-3 p-2.5 dark:bg-transparent dark:border-yellow-600 dark:placeholder-text-white dark:text-white"
        >
          <option></option>
          {years.map((year) => (
            <option key={year} value={year} className="text-black">
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="relative mb-8 w-fit">
        <p className="dark:text-white -mt-3 mb-2 text-xs">Calification more than</p>

        <input
          value={filters.calification}
          onChange={(e) => handleUpdate('calification', e.target.value)}
          type="number"
          className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full ps-3 p-2.5 dark:bg-transparent dark:border-yellow-600 dark:placeholder-text-white dark:text-white"
          placeholder=""
        />
      </div>

      <div className="flex items-end justify-end">
        <button
          className="bg-red-600 rounded-md px-3 py-1 font-semibold text-white "
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ModalFilter;
