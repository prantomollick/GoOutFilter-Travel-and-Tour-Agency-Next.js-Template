import { useMemo } from "react";

export interface UsePaginationProps {
  totalCount: number;
  pageSize: number;
  siblingCount?: number;
  currentPage: number;
}

export const DOTS = "...";

function range(start: number, end: number) {
  return Array.from({ length: end - start + 1 }, (_, idx) => idx + start);
}

export function usePagination({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage
}: UsePaginationProps): (string | number)[] {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);

    //Displaying Pages number determined as siblingCount + firstpage + lastpage+currentPage+2*Dots
    const totalPageNumbers = siblingCount + 5;

    /*
    CASE1: 
    If the number of pages is less then the page numbers we want to show in our pagination component, we return the range [1, ...totalPage count]
    */

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    /*
    Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
    */

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    /*
    We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limts i.e 1 and totalpagecount.
    Hence we are using leftSiblingIndex > 2  and rightSiblingIndex < totalPageCount - 2
    */

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    /*
      Case 2: no left dots to show, but rights dots to be shown
    */

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    /*
      Case 3: no rights dot to show, but left dots to be show
    */

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );

      return [firstPageIndex, DOTS, ...rightRange];
    }

    /*
      Case 4: both left and right dots need to be shown.
    */

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange || [];
}
