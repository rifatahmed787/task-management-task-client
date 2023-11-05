"use client";

import { useEffect, useMemo } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface IPagignationProps {
  isLoading?: boolean;
  totalPage: number;
  pageSize: number;
  currentPage: number;
  paginationOption?: number;
  handleSelectPage?: (clickedPage: number) => void;
  handleNextPage?: (nextPage: number) => void;
  handlePreviousPage?: (previousPage: number) => void;
}

export default function Pagination({
  isLoading,
  pageSize = 1,
  totalPage = 1,
  currentPage = 1,
  paginationOption = 5,
  handleSelectPage,
  handleNextPage,
  handlePreviousPage,
}: IPagignationProps) {
  const paginationPageNumbers = useMemo(() => {
    const pageNumbers = [];
    if (totalPage <= paginationOption) {
      // If totalPage is less than or equal to paginationOption, show all page numbers
      for (let i = 1; i <= totalPage; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Otherwise, calculate the range of page numbers to display centered around the currentPage
      const halfOption = Math.floor(paginationOption / 2);
      let start = Math.max(currentPage - halfOption, 1);
      let end = Math.min(currentPage + halfOption, totalPage);

      if (currentPage <= halfOption) {
        end = paginationOption;
      } else if (currentPage >= totalPage - halfOption) {
        start = totalPage - paginationOption + 1;
      }

      for (let i = start; i <= end; i++) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers;
  }, [totalPage, currentPage, paginationOption]);

  return (
    <div className="flex justify-between items-center mt-10 lg:mt-16 ">
      <span className="text-gray-600 text-lg hidden lg:block">
        Showing entries {pageSize * currentPage} out of {pageSize * totalPage}
      </span>
      <div className="flex space-x-4 mx-auto lg:mx-0">
        <button
          disabled={currentPage === 1 || isLoading}
          onClick={() => handlePreviousPage?.(currentPage - 1)}
          className="rounded-white-button hover:rounded-black-button disabled:cursor-not-allowed"
        >
          <IoIosArrowBack className="lg:text-xl text-[#A7A7A7] hover:text-white" />
        </button>
        {paginationPageNumbers?.map((paginationPageNumber) => (
          <button
            key={paginationPageNumber}
            disabled={paginationPageNumber === currentPage || isLoading}
            onClick={() => handleSelectPage?.(paginationPageNumber)}
            className={`disabled:cursor-not-allowed ${
              paginationPageNumber === currentPage
                ? "rounded-black-button"
                : "rounded-white-button"
            }`}
          >
            {paginationPageNumber}
          </button>
        ))}
        <button
          disabled={currentPage === totalPage || isLoading}
          onClick={() => handleNextPage?.(currentPage + 1)}
          className="rounded-white-button hover:rounded-black-button disabled:cursor-not-allowed"
        >
          <IoIosArrowForward className="lg:text-xl text-[#A7A7A7] hover:text-white" />
        </button>
      </div>
    </div>
  );
}
