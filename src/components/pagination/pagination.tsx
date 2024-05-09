// pagination.tsx

import { forwardRef } from "react";
import { PaginationProps } from "./pagination.types";
import {
  PaginationWrapper,
  PaginationButton,
  PaginationEllipsis,
} from "./pagination.styles";
import { Button } from "..";
import { LmCkChevronLeft } from "@icons/lmCkChevronLeft";
import { LmCkChevronRight } from "@icons/lmCkChevronRight";

export const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
  (
    { pageNumber, totalPages, onPressNext, onPressPrevious, onPressPageNumber },
    ref
  ) => {
    const getPageNumbers = () => {
      const pageNumbers: Array<number | "."> = [];
      const maxVisiblePages = 5;

      if (totalPages <= maxVisiblePages) {
        for (let i = 1; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        if (pageNumber > 2) {
          pageNumbers.push(".");
        }

        for (
          let i = Math.max(2, pageNumber - 1);
          i <= Math.min(totalPages - 1, pageNumber + 1);
          i++
        ) {
          pageNumbers.push(i);
        }

        if (pageNumber < totalPages - 1) {
          pageNumbers.push(".");
        }
        pageNumbers.push(totalPages);
      }

      return pageNumbers;
    };

    return (
      <PaginationWrapper ref={ref} aria-label="Pagination Navigation">
        {pageNumber > 1 && (
          <Button type="label" icon={LmCkChevronLeft} onClick={onPressPrevious} />
        )}

        {getPageNumbers().map((num, index) =>
          num === "." ? (
            <PaginationEllipsis key={index}>…</PaginationEllipsis>
          ) : (
            <PaginationButton
              key={index}
              isActive={num === pageNumber}
              onClick={() => onPressPageNumber(num)}
              aria-label={`Page ${num}`}
            >
              {num}
            </PaginationButton>
          )
        )}
        {pageNumber < totalPages && (
          <Button type="label" icon={LmCkChevronRight} onClick={onPressNext} />
        )}
      </PaginationWrapper>
    );
  }
);

Pagination.displayName = "Pagination";
