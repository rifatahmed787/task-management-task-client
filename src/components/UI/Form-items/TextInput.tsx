import { cn } from "@/lib/Utils";
import { RiErrorWarningLine } from "react-icons/ri";
import { useState } from "react";
import { ITextInput } from "./Input.types";
import React from "react";
import PasswordToggler from "./PasswordToggler/PasswordToggler";

const TextInput = ({
  label,
  type,
  onChange,
  currentValue,
  placeHolder,
  className,
  required,
  id,
  rightIcon,
  errorMessage,
}: ITextInput) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [inputType, setInputType] = React.useState(type);
  const [numberOfCharacters, setNumberOfCharacters] = React.useState(0);

  const isPassword = type === "password" && numberOfCharacters !== 0;

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleTogglePassword = (e: React.MouseEvent) => {
    e.stopPropagation();
    setInputType((prev) => (prev === "password" ? "text" : "password"));
  };

  const showPassword = inputType === "password" && numberOfCharacters !== 0;

  const defaultClassValue = `block py-3 px-0 w-full text-sm bg-transparent border-2 border-primary appearance-none rounded-md focus:outline-none focus:ring-0 focus:border-primary peer focus:border-t-1 pl-2`;

  return (
    <div className="flex flex-col gap-2 relative">
      <label
        htmlFor={id || "input-box"}
        className={`absolute text-sm text-bold text-gray-500 transform transition-all ${
          isFocused || currentValue
            ? "top-0 scale-75 -translate-y-2.5 bg-white"
            : "top-3 scale-100 translate-y-0"
        } left-2 peer-focus:text-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:absolute peer-focus:z-10 px-2`}
      >
        {label}
      </label>
      <input
        id={id || "input-box"}
        className={cn(className, defaultClassValue)}
        type={type}
        value={currentValue}
        onChange={onChange}
        placeholder={placeHolder}
        required={required ?? false}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {isPassword && !rightIcon ? (
        <PasswordToggler
          className="ml-2"
          isPasswordVisible={showPassword}
          onToggle={handleTogglePassword}
        />
      ) : null}
      {rightIcon ? <button>{rightIcon}</button> : null}

      {errorMessage ? (
        <div className="text-xs text-red-700 mt-[0.4rem] flex items-center">
          <RiErrorWarningLine className="inline-block h-3 w-3 mr-[0.45rem] self-start mt-[0.1rem]" />
          <span>{errorMessage}</span>
        </div>
      ) : null}
    </div>
  );
};

export default TextInput;
