/* eslint-disable react/jsx-key */
"use client";
import React, { useState } from "react";
import FilterByGender from "./FilterByGender";
import FilterByCategory from "./FilterByCategory";
import FilterByPriceRange from "./FilterByPrice";
import FilterByColor from "./FilterByColor";
import FilterAccordion from "./FilterAccordian";

const ProductList = () => {
  const [open, setOpen] = useState(true);

  const [list, setList] = useState([
    {
      heading: "Gender",
      filterContent: <FilterByGender />,
      active: 0,
    },
    {
      heading: "Filter By Category",
      filterContent: <FilterByCategory />,
      active: 0,
    },
    {
      heading: "Filter By Price",
      filterContent: <FilterByPriceRange />,
      active: 0,
    },
    {
      heading: "Filter By color",
      filterContent: <FilterByColor />,
      active: 0,
    },
  ]);

  //   const {data:dresses, isLoading, isError} = useGetDressQuery()

  // decide what to render
  //   let content = null;

  //   if(isLoading){
  //     content= (<>
  //     <CardLoader />
  //     <CardLoader />
  //     <CardLoader />
  //     <CardLoader />
  //     </>)
  //   }

  //   if(!isLoading && isError) {
  //     content= <Error message="There was an error"/>
  //   }

  //   if(!isLoading && !isError && dresses?.length === 0){
  // content = <Error message="No Dress Found !"/>
  //   }

  //   if(!isLoading && !isError && dresses?.length > 0){
  //     content = dresses.map(dress => <ProductCard key={dress.id} singleProduct={dress}/>)
  //       }
  return (
    <div className="mx-auto max-w-screen-2xl mt-10">
      <div
        className={`${
          open ? " flex-col lg:flex-row " : "flex-row lg:flex-row"
        } flex`}
      >
        <div
          className={` ${open ? "w-72" : "w-[5px] "}   relative duration-700`}
        >
          <svg
            className={`text-primary-300 absolute   -top-5  z-10 cursor-pointer  rounded-full  ${
              !open ? "rotate-180 -right-8" : "right-4"
            } `}
            onClick={() => setOpen(!open)}
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 50 50"
          >
            <path
              fill="currentColor"
              d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15z"
            />
            <path
              fill="currentColor"
              d="M25.3 34.7L15.6 25l9.7-9.7l1.4 1.4l-8.3 8.3l8.3 8.3z"
            />
            <path fill="currentColor" d="M17 24h17v2H17z" />
          </svg>

          <div
            className={`${
              open ? "block" : "hidden lg:block "
            } items-center  gap-x-4 lg:flex`}
          >
            <div
              className={`origin-left font-medium duration-700 ${
                !open && "scale-0"
              }`}
            >
              <div className=" flex h-auto items-center justify-center">
                <div className="h-auto w-64 border p-5">
                  <p className="text-xl font-semibold">Filter By</p>
                  {list?.map((item, key) => (
                    <FilterAccordion item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* body */}
        <div className="flex-1">
          <div className=" pb-10">
            <div className="mx-auto text-center lg:max-w-xl">
              <p className=" mb-4 inline-block text-2xl font-semibold uppercase tracking-wider lg:text-[32px]">
                Products
              </p>
            </div>

            {/* <div className="md:grid-cole-3 mx-auto grid gap-10 sm:grid-cols-2 lg:max-w-screen-lg lg:grid-cols-4">
                {
                  content
                }
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
