import { IModalBodyProps } from "@/Types/Interface/Interface";
import React from "react";

export default function ModalBody({
  className = "",
  style = {},
  children,
}: IModalBodyProps) {
  const preventClickToClose = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      style={style}
      className={`modal-body w-[calc(100%-2rem)] px-4 lg:px-8  max-w-lg lg:max-w-2xl scrollbar-hide ${className}`}
      onClick={preventClickToClose}
    >
      {children}
    </div>
  );
}
