"use client";
import { useState, useEffect } from "react";
import TextInput from "../UI/Form-items/TextInput";
import ICONS from "../shared/Icons/AllIcons";

const BookSearchbar = ({
  current_value,
  handleFilterValue,
}: {
  current_value: string;
  handleFilterValue: (value: string) => void;
}) => {
  const [serch_key, setSerchKey] = useState("");

  useEffect(() => {
    setSerchKey(current_value);
  }, [current_value]);

  return (
    <div className="relative flex items-center ">
      <TextInput
        type="text"
        placeHolder="Search"
        currentValue={serch_key}
        onChange={(e) => {
          setSerchKey(e.target.value);
        }}
        required={true}
        className="pr-10"
      />
      <button
        className="hover:bg-primary text-black h-[44px] px-2 py-1  rounded-r-md  hover:text-white -ml-10 z-10"
        onClick={() => handleFilterValue(serch_key)}
      >
        {ICONS.Search_Icon}
      </button>
    </div>
  );
};

export default BookSearchbar;
