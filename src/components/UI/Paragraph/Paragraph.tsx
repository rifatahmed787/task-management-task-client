import React, { ReactNode } from "react";

// Define the interface for the props
interface ParagraphProps {
  children: ReactNode;
  className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ children, className }) => {
  return (
    <article className={`leading-6 text-[14px] font-sans ${className}`}>
      {children}
    </article>
  );
};

export default Paragraph;
