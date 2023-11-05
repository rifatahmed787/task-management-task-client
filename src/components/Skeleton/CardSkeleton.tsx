import React from "react";

const CardSkeleton = () => {
  return (
    <>
      <div className="w-56 rounded bg-white shadow-md">
        <div className="h-52 animate-pulse rounded-tl rounded-tr bg-gray-200"></div>

        <div className="p-5">
          <div className="mb-4 h-7 animate-pulse rounded-sm bg-gray-200"></div>

          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-3 h-4 animate-pulse rounded-sm bg-gray-200"></div>
            <div className="h-4 animate-pulse rounded-sm bg-gray-200"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSkeleton;
