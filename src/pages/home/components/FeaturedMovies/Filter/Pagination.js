import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
import { updatePagination } from '../../../../../features/pagination';

function Pagination({ pages }) {
  const dispatch = useDispatch();

  const handleUpdatePagination = (e) => {
    dispatch(updatePagination(e));
  };

  return (
    <div>
      {pages > 1 && (
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={(e) => {
            handleUpdatePagination(e.selected + 1);
          }}
          pageRangeDisplayed={2}
          pageCount={pages}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName="containerReactPaginate"
          pageClassName="liReactPaginate"
        />
      )}
    </div>
  );
}

export default Pagination;
