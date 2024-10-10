import PropTypes from 'prop-types';

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="mt-6 flex flex-wrap items-center justify-center">
    <button
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
      className="px-3 py-1 m-1 border rounded-md"
    >
      Previous
    </button>
    <span className="mx-2">
      Page {currentPage} of {totalPages}
    </span>
    <button
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      className="px-3 py-1 m-1 border rounded-md"
    >
      Next
    </button>
  </div>
);

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
