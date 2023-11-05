import React from "react";
import { IModal } from "@/Types/Interface/Interface";

export default function Modal({
  onClose,
  isOpen,
  children,
  className = "",
  style = {},
}: IModal) {
  const backdropRef = React.useRef<HTMLDivElement>(null);

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClose?.();
  };

  React.useEffect(() => {
    const backdrop = backdropRef.current;
    if (backdrop) {
      //  stop scrolling without moving the screen to the top
      if (isOpen) {
        backdrop.style.display = "flex";
        backdrop.scrollTop = window.scrollY;
      } else {
        backdrop.style.display = "none";
        window.scrollTo(0, backdrop.scrollTop);
      }
    }
  }, [isOpen]);

  return (
    isOpen && (
      <div
        style={style}
        className={`modal-backdrop opacity-100 ${className}`}
        onClick={handleClose}
        onPointerDown={(e) => e.stopPropagation()}
        ref={backdropRef}
      >
        {children}
      </div>
    )
  );
}
