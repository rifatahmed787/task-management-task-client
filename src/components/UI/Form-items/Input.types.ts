import { InputType } from "@/Types/Input";
import React from "react";

export type ITextInput = {
  label?: string;
  type: InputType;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  currentValue: string | number;
  placeHolder: string;
  className?: string;
  required?: boolean;
  htmlFor?: string;
  id?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  rightIcon?: React.ReactNode;
  errorMessage?: string | null;
};
