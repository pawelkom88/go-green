import { Props } from "domain/types";
import React from "react";

interface ButtonType extends Props {
  className?: string;
  title?: string;
  type?: "submit" | "button";
  disabled?: boolean;
  onClick?: () => void | (() => boolean);
}

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
