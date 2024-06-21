import React from 'react';
import '../styles/Pagination.css'; // Ruta corregida

const Pagination = ({ productsPerPage, totalProducts, paginate, currentPage }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const generatePageNumbers = () => {
    if (totalPages <= 12) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      for (let i = 1; i <= 10; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push('...');
      pageNumbers.push(totalPages - 1);
      pageNumbers.push(totalPages);
    }
  };

  generatePageNumbers();

  return (
    <nav className="pagination-nav">
      <ul className="pagination">
        {pageNumbers.map((number, index) => (
          <li key={index} className={`page-item ${number === currentPage ? 'active' : ''}`}>
            {number === '...' ? (
              <span className="page-link">...</span>
            ) : (
              <a onClick={() => paginate(number)} href="#!" className="page-link">
                {number}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
