import React, { useState } from 'react';
import Modal from '../../../../../components/Modal';
import ModalFilter from './ModalFilter';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { updateSearch } from '../../../../../features/searchTerm';

function SearchFilter({ activeFilter, setActiveFilter }) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const inputSearch = useSelector((state) => state.search, shallowEqual);

  const handleText = (e) => {
    dispatch(updateSearch(e));
  };
  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} className="md:!w-[500px]">
        <ModalFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} setShowModal={setShowModal} />
      </Modal>
      <div className="relative items-center content-center flex ">
        <span className="text-gray-400 absolute left-4 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </span>
        <input
          type="text"
          value={inputSearch}
          onChange={(e) => handleText(e.target.value)}
          className="text-xs ring-1 bg-transparent ring-gray-200 dark:ring-zinc-600 focus:ring-red-300 pl-10 pr-5 text-gray-600 dark:text-white  py-3 rounded-full w-full outline-none focus:ring-1"
          placeholder="Buscar por nombre ..."
        />
        <button className="bg-blue-600 text-white px-3 py-1 text-xl rounded-md ml-2" onClick={() => setShowModal(true)}>
          <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18 7H17M17 7H16M17 7V6M17 7V8M12.5 5H6C5.5286 5 5.29289 5 5.14645 5.14645C5 5.29289 5 5.5286 5 6V7.96482C5 8.2268 5 8.35779 5.05916 8.46834C5.11833 8.57888 5.22732 8.65154 5.4453 8.79687L8.4688 10.8125C9.34073 11.3938 9.7767 11.6845 10.0133 12.1267C10.25 12.5688 10.25 13.0928 10.25 14.1407V19L13.75 17.25V14.1407C13.75 13.0928 13.75 12.5688 13.9867 12.1267C14.1205 11.8765 14.3182 11.6748 14.6226 11.4415M20 7C20 8.65685 18.6569 10 17 10C15.3431 10 14 8.65685 14 7C14 5.34315 15.3431 4 17 4C18.6569 4 20 5.34315 20 7Z"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default SearchFilter;
