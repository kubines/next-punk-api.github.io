import React, { useMemo, useCallback } from 'react';
import clsx from 'clsx';

import { PaginationProps } from './types';

export function Pagination({
  currentPage,
  onPageChange,
}: PaginationProps) {
  const disablePrevious = useMemo(() => currentPage < 2 && 'disabled', [currentPage]);
  
  const onChange = useCallback((value: number) => {    
    onPageChange(value);
  }, [onPageChange]);

  return (
    <nav>
      <ul className="pagination">
        <li className={clsx('page-item', disablePrevious)}>
          <a 
            className="page-link"
            href="_#"
            onClick={(e) => {
              e.preventDefault();
              onChange(-1);
            }}
          >
            Previous
          </a>
        </li>
        <li className="page-item disabled">
          <span
            className="page-link"
          >
            {currentPage}
          </span>
        </li>
        <li className="page-item">
          <a
            className="page-link"
            href="_#"
            onClick={(e) => {
              e.preventDefault();
              onChange(1);
            }}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}
