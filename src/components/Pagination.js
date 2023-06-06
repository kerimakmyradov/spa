import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePageChange = (page) => {
        onPageChange(page);
      };
    
      const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
          pageNumbers.push(
            <li
              key={i}
              className={`page-item ${currentPage === i ? 'active' : ''}`}
              onClick={() => handlePageChange(i)}
            >
              <a className="page-link">{i}</a>
            </li>
          );
        }
        return pageNumbers;
      };
    return (
        <nav>
        <ul className="pagination justify-content-center">
          {renderPageNumbers()}
        </ul>
      </nav>
    );
};

export default Pagination;