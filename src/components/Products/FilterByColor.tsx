import CheckBox from "../UI/Check-box/Checkbox";

const FilterByColor = () => {
  return (
    <>
      <div className="mt-2 flex items-center space-x-2">
        <CheckBox id={""} />
        <h1 className="font-medium leading-none text-gray-700">Black</h1>
      </div>

      <div className="mt-2 flex items-center space-x-2">
        <CheckBox id={""} />
        <h1 className="font-medium leading-none text-gray-700">Blue</h1>
      </div>
      <div className="mt-2 flex items-center space-x-2">
        <CheckBox id={""} />
        <h1 className="font-medium leading-none text-gray-700">Navy blue</h1>
      </div>

      <div className="mt-2 flex items-center space-x-2">
        <CheckBox id={""} />
        <h1 className="font-medium leading-none text-gray-700">White</h1>
      </div>

      <div className="mt-2 flex items-center space-x-2">
        <CheckBox id={""} />
        <h1 className="font-medium leading-none text-gray-700">Red</h1>
      </div>

      <div className="mt-2 flex items-center space-x-2">
        <CheckBox id={""} />
        <h1 className="font-medium leading-none text-gray-700">Green</h1>
      </div>
    </>
  );
};

export default FilterByColor;
