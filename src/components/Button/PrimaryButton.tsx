import { ReactNode } from "react";

type BrandButton = {
  text: ReactNode;
  icon: ReactNode;
};
const BrandButton = ({ text, icon }: BrandButton) => {
  return (
    <>
      <button
        type="button"
        className="relative inline-flex items-center justify-center px-3 py-3 overflow-hidden font-display-Poppins font-medium text-regular border-none bg-primary rounded-md group"
      >
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-primary-100 rounded-full group-hover:w-56 group-hover:h-56"></span>
        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg"></span>
        <span className="relative uppercase flex text-xs md:text-sm items-center gap-2">
          {text} {icon}
        </span>
      </button>
    </>
  );
};

export default BrandButton;
