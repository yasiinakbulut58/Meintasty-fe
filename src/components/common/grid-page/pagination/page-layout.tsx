'use client';

import usePagination from '@/utils/UsePagination';
import { FC } from 'react';
import { IPagination } from '@/lib/data';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const Pagination: FC<IPagination> = ({
  totalPages: totalPages1,
  currentPage: toPage,
}) => {
  const pages = usePagination({ toPage: toPage, totalPages: totalPages1 });

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleOnClick = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());

    replace(`${pathname}?${params.toString()}`);
  };

  if (1 !== totalPages1 && totalPages1 !== 0) {
    return (
      <nav aria-label="Page navigation example" className="pagination-section">
        <ul className="pagination">
          <li className="page-item">
            <div
              className="page-link"
              aria-label="Previous"
              onClick={() => handleOnClick(1)}
            >
              <span aria-hidden="true">«</span>
              <span className="sr-only">Previous</span>
            </div>
          </li>
          <li className="page-item">
            <div
              className="page-link"
              aria-label="Previous"
              onClick={() => {
                handleOnClick(toPage > 1 ? toPage - 1 : toPage);
              }}
            >
              <span aria-hidden="true">{'<'}</span>
              <span className="sr-only">Previous</span>
            </div>
          </li>
          {pages.map((data, i) => (
            <li
              className={`page-item ${data === toPage ? 'active' : ''}`}
              key={i}
              onClick={() => {
                handleOnClick(data);
              }}
            >
              <div className="page-link">{data}</div>
            </li>
          ))}

          <li className="page-item">
            <div
              className="page-link"
              aria-label="Next"
              onClick={() => {
                handleOnClick(toPage < totalPages1 ? toPage + 1 : toPage);
              }}
            >
              <span aria-hidden="true">{'>'}</span>
              <span className="sr-only">Next</span>
            </div>
          </li>
          <li className="page-item">
            <div
              className="page-link"
              aria-label="Next"
              onClick={() => handleOnClick(totalPages1)}
            >
              <span aria-hidden="true">»</span>
              <span className="sr-only">Next</span>
            </div>
          </li>
        </ul>
      </nav>
    );
  } else {
    return null;
  }
};

export default Pagination;
