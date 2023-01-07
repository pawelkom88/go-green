import React from "react";

type ButtonType = {
  children: React.ReactNode;
  className: string;
  title?: string;
  type?: "submit" | "button";
  onClick?: () => void | (() => boolean);
};

export default function Button({
  children,
  onClick,
  className,
  type = "button",
  title,
}: ButtonType) {
  return (
    <button title={title} onClick={onClick} type={type} className={className}>
      {children}
    </button>
  );
}
