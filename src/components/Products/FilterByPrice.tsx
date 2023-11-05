import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import React from "react";

const FilterByPriceRange = () => {
  return (
    <div className="px-5">
      <Slider range step={20} dots min={50} max={5000} />
    </div>
  );
};

export default FilterByPriceRange;
