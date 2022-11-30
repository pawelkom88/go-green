import React from "react";

type ButtonType = {
  children: React.ReactNode;
  className: string;
  type?: "submit" | "button";
  onClick: () => void;
};

export default function Button({ children, onClick, className, type = "button" }: ButtonType) {
  return (
    <button onClick={onClick} type={type} className={className}>
      {children}
    </button>
  );
}
