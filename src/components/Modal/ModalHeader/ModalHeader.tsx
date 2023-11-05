import { IModalHeaderProps } from "@/Types/Interface/Interface";
import { GrClose } from "react-icons/gr";

export default function ModalHeader({
  title,
  onClose,
  className = "",
  style = {},
  ...rest
}: IModalHeaderProps) {
  return (
    <div
      style={style}
      className={`flex justify-between items-center mb-8 ${className}`}
      {...rest}
    >
      {title ? (
        <h1 className="text-2xl lg:text-[2rem] font-bold ">{title}</h1>
      ) : null}
      <button
        onClick={onClose}
        className="bg-gray-200 p-2 lg:p-3 rounded-full ml-auto justify-self-end"
      >
        <GrClose color="black" className="h-4 w-4 lg:h-5 lg:w-5" />
      </button>
    </div>
  );
}
