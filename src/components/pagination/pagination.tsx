import styles from "./pagination.module.scss";
import React from "react";
import { DOTS, usePagination, type UsePaginationProps } from "./usePagination";
import ArrowBtn from "../ui/arrow-btn/arrow-btn";
import { GoDotFill } from "react-icons/go";
import classNames from "classnames";

interface PaginationProps extends UsePaginationProps {
  onPageChange: (page: number) => void;
  className?: string;
}

function Pagination({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className
}: PaginationProps) {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  // Gurd Clause (if there are less than 2 times in pagination)
  if (currentPage === 0 && paginationRange?.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div className={styles["pagination-container"]}>
      <ul className={styles["pagination__list"]}>
        <li className={classNames(styles["pagination__list-arrow-left"])}>
          <ArrowBtn
            direction="left"
            variant="bordered"
            disabled={currentPage === 1}
            onClick={onPrevious}
          />
        </li>
        {paginationRange.map((pageNumber, idx) => {
          if (pageNumber === DOTS) {
            return (
              <li key={idx} className={styles["pagination__list-dots"]}>
                <GoDotFill size={8} />
                <GoDotFill size={8} />
                <GoDotFill size={8} />
              </li>
            );
          }

          return (
            <li
              key={idx}
              className={classNames(styles["pagination__list-item"], {
                [styles.selected]: currentPage === pageNumber
              })}
              onClick={() => onPageChange(+pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
        <li className={styles["pagination__list-arrow-right"]}>
          <ArrowBtn
            direction="right"
            variant="bordered"
            disabled={currentPage === lastPage}
            onClick={onNext}
          />
        </li>
      </ul>
      <p className={styles["pagination__content"]}>
        1 – {currentPage * pageSize} of {totalCount}+ properties found
      </p>
    </div>
  );
}

export default Pagination;
