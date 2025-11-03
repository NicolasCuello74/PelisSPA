import React from 'react'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  const handlePageClick = (page) => {
    onPageChange(page)
  }

  return (
    <div
      className="btn-toolbar"
      role="toolbar"
      aria-label="Toolbar with button groups"
    >
      <div className="btn-group" role="group" aria-label="Pagination">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {currentPage > 1 && (
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => handlePageClick(currentPage - 1)}
          >
            {currentPage - 1}
          </button>
        )}

        <button type="button" className="btn btn-secondary" disabled>
          {currentPage}
        </button>

        {currentPage < totalPages && (
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => handlePageClick(currentPage + 1)}
          >
            {currentPage + 1}
          </button>
        )}

        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Pagination
