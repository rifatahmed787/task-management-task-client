import React from "react";
import CheckBox from "../UI/Check-box/Checkbox";

const FilterByCategory = () => {
  return (
    <>
      <div className="mt-2 flex items-center space-x-2">
        <CheckBox id={""} />
        <h1 className="font-medium leading-none text-gray-700">Shirt</h1>
      </div>

      <div className="mt-2 flex items-center space-x-2">
        <CheckBox id={""} />
        <h1 className="font-medium leading-none text-gray-700">T-Shirt</h1>
      </div>

      <div className="mt-2 flex items-center space-x-2">
        <CheckBox id={""} />
        <h1 className="font-medium leading-none text-gray-700">Polo-Shirt</h1>
      </div>

      <div className="mt-2 flex items-center space-x-2">
        <CheckBox id={""} />
        <h1 className="font-medium leading-none text-gray-700">Trouser</h1>
      </div>

      <div className="mt-2 flex items-center space-x-2">
        <CheckBox id={""} />
        <h1 className="font-medium leading-none text-gray-700">Panjabi</h1>
      </div>

      <div className="mt-2 flex items-center space-x-2">
        <CheckBox id={""} />
        <h1 className="font-medium leading-none text-gray-700">Sharee</h1>
      </div>

      <div className="mt-2 flex items-center space-x-2">
        <CheckBox id={""} />
        <h1 className="font-medium leading-none text-gray-700">Single Kamiz</h1>
      </div>

      <div className="mt-2 flex items-center space-x-2">
        <CheckBox id={""} />
        <h1 className="font-medium leading-none text-gray-700">Lehenga</h1>
      </div>

      <div className="mt-2 flex items-center space-x-2">
        <CheckBox id={""} />
        <h1 className="font-medium leading-none text-gray-700">Three piece</h1>
      </div>
    </>
  );
};

export default FilterByCategory;
