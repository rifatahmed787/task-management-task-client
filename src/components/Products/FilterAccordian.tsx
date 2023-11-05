import { Icon } from "@iconify/react";
import React, { useState } from "react";

const FilterAccordion = ({ item }: any) => {
  const [items, setItems] = useState(item);
  const handletoggleActive = () => {
    let newActive = items.active === 1 ? 0 : 1;
    setItems({ ...items, active: newActive });
  };
  return (
    <>
      <div
        className={` group w-full border-t  py-5 ${
          items.active === 1 ? "is-active bg-white" : ""
        } `}
      >
        <div className="flex items-center" onClick={handletoggleActive}>
          <div className="w-full group-[.is-active]:font-bold">
            {items.heading}
          </div>
          <div
            className="cursor-pointer rounded-full bg-gray-50 p-1 text-xl duration-500 group-[.is-active]:rotate-[180deg]"
            onClick={handletoggleActive}
          >
            <Icon icon="ep:arrow-down" />
          </div>
        </div>

        <div className="max-h-0 overflow-hidden duration-500 group-[.is-active]:max-h-full">
          {items.filterContent}
        </div>
      </div>
    </>
  );
};

export default FilterAccordion;
