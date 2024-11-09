import React from 'react';
import { Button } from './ui';
import { Icon } from '@iconify/react';
import styles from '@styles/components/pagination.module.scss';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  showPageRange?: number; // Número máximo de páginas visibles en el rango
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
  showPageRange = 5,
}) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  // Lógica de determinación del rango de páginas
  let startPage = Math.max(1, currentPage - Math.floor(showPageRange / 2));
  let endPage = startPage + showPageRange - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - showPageRange + 1);
  }

  return (
    <nav aria-label="Pagination Navigation" className={styles.pagination}>
      <Button
        variant="pagination"
        icon={<Icon icon="ph:caret-left-fill" width={16} />}
        iconPosition="left"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous Page"
      >
        Prev
      </Button>
      <div className={styles.pages}>
        {startPage > 1 && (
          <>
            <Button
              variant="pagination"
              squared
              onClick={() => handlePageChange(1)}
            >
              1
            </Button>
            {startPage > 2 && <span className={styles.ellipsis}>...</span>}
          </>
        )}
        {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
          const page = startPage + index;
          return (
            <Button
              key={page}
              variant="pagination"
              squared
              current={page === currentPage}
              onClick={() => handlePageChange(page)}
              aria-current={page === currentPage ? 'page' : undefined}
              aria-label={`Page ${page}`}
            >
              {page}
            </Button>
          );
        })}
        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && (
              <span className={styles.ellipsis}>...</span>
            )}
            <Button
              variant="pagination"
              squared
              onClick={() => handlePageChange(totalPages)}
            >
              {totalPages}
            </Button>
          </>
        )}
      </div>
      <Button
        variant="pagination"
        icon={<Icon icon="ph:caret-right-fill" width={16} />}
        iconPosition="right"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next Page"
      >
        Next
      </Button>
    </nav>
  );
};

export default Pagination;
