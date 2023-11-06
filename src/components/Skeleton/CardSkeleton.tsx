import React from "react";

const CardSkeleton = () => {
  return (
    <>
      <div className="w-11/12 md:w-full rounded bg-white shadow-md">
        <div className="h-52 animate-pulse rounded-tl rounded-tr bg-gray-200"></div>

        <div className="col-span-3 h-4 animate-pulse rounded-sm bg-gray-200"></div>
        <div className="h-4 animate-pulse rounded-sm bg-gray-200"></div>
      </div>
    </>
  );
};

export default CardSkeleton;
