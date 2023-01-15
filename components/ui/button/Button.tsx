import React from "react";

type ButtonType = {
  children: React.ReactNode;
  className?: string;
  title?: string;
  type?: "submit" | "button";
  disabled?: boolean;
  onClick?: () => void | (() => boolean);
};

export default function Button({
  children,
  onClick,
  className,
  type = "button",
  title,
  disabled,
}: ButtonType) {
  return (
    <button title={title} onClick={onClick} type={type} className={className} disabled={disabled}>
      {children}
    </button>
  );
}
