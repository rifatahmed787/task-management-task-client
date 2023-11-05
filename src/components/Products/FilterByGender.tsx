import React from "react";
import CheckBox from "../UI/Check-box/Checkbox";

const FilterByGender = () => {
  return (
    <>
      <div className="mt-2 flex items-center space-x-2">
        <CheckBox id={""} />
        <h1 className="font-medium leading-none text-gray-700">Men</h1>
      </div>
      <div className="mt-2 flex items-center space-x-2">
        <CheckBox id={""} />
        <h1 className="font-medium leading-none text-gray-700">Women</h1>
      </div>
      <div className="mt-2 flex items-center space-x-2">
        <CheckBox id={""} />
        <h1 className="font-medium leading-none text-gray-700">Kid Boys</h1>
      </div>
      <div className="mt-2 flex items-center space-x-2">
        <CheckBox id={""} />
        <h1 className="font-medium leading-none text-gray-700">Kid Girls</h1>
      </div>
    </>
  );
};

export default FilterByGender;
