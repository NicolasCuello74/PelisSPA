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
    <div className="d-flex align-items-center justify-content-center p-2">
      <button className="m-2" onClick={handlePrev} disabled={currentPage === 1}>
        Prev
      </button>

      {currentPage > 1 && (
        <button onClick={() => handlePageClick(currentPage - 1)}>
          {currentPage - 1}
        </button>
      )}

      <button className="m-2" disabled>
        {currentPage}
      </button>

      {currentPage < totalPages && (
        <button onClick={() => handlePageClick(currentPage + 1)}>
          {currentPage + 1}
        </button>
      )}

      <button
        className="m-2"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
