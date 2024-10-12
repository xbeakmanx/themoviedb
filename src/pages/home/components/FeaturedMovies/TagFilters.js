import React from 'react';
import Close from '../../../../components/SVG/close';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { removeFilter } from '../../../../features/filtersSlice';

function TagFilters() {
  const filters = useSelector((state) => state.filters, shallowEqual);

  const dispatch = useDispatch();

  const handleUpdate = (type, value, nameGenre) => {
    dispatch(removeFilter({ type, value, nameGenre }));
  };

  return (
    <div className="flex gap-3">
      {filters.genre && (
        <div
          className="bg-yellow-600 w-fit p-1 rounded-md flex justify-between items-center gap-2 px-2 cursor-pointer"
          onClick={() => handleUpdate('genre')}
        >
          {filters?.genre?.nameGenre} <Close size={15} />
        </div>
      )}

      {filters.date && (
        <div
          className="bg-yellow-600 w-fit p-1 rounded-md flex justify-between items-center gap-2 px-2 cursor-pointer"
          onClick={() => handleUpdate('date')}
        >
          {filters?.date} <Close size={15} />
        </div>
      )}

      {filters.calification && (
        <div
          className="bg-yellow-600 w-fit p-1 rounded-md flex justify-between items-center gap-2 px-2 cursor-pointer"
          onClick={() => handleUpdate('calification')}
        >
          {filters?.calification} <Close size={15} />
        </div>
      )}
    </div>
  );
}

export default TagFilters;
