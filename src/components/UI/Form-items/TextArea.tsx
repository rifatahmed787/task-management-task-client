import { cn } from "@/lib/Utils";
import { useContext, useState } from "react";

type ITextInput = {
  label?: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  currentValue: string;
  placeHolder: string;
  className?: string;
  required?: boolean;
  row?: number;
  htmlFor?: string;
  id?: string;
};

const TextArea = ({
  label,
  onChange,
  currentValue,
  placeHolder,
  className,
  required,
  row,
  id,
}: ITextInput) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  const defaultClassValue = `block py-3 px-0 w-full text-sm bg-transparent border-2 border-primary appearance-none rounded-md focus:outline-none focus:ring-0 focus:border-primary peer focus:border-t-1 pl-2 `;
  return (
    <div className="flex flex-col gap-2 ">
      <label
        htmlFor={id || "input-box"}
        className={`absolute text-sm text-bold text-gray-500 transform transition-all ${
          isFocused || currentValue
            ? "top-0 scale-75 -translate-y-3"
            : "top-3 scale-100 translate-y-0"
        } left-2 peer-focus:text-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:absolute peer-focus:z-10 px-2`}
      >
        {label}
      </label>
      <textarea
        id="text-box"
        className={cn(className, defaultClassValue)}
        value={currentValue}
        onChange={onChange}
        placeholder={placeHolder}
        required={required ?? false}
        rows={row ?? 3}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default TextArea;
