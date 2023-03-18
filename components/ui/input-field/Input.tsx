import { MutableRefObject } from "react";
import { Props } from "domain/types";

interface InputProps extends Props {
  onChange: any;
  // onChange: (e: Event) => void;
  srOnly: boolean;
  name: string;
  type: string;
  id: string;
  className: string;
  labelClassName?: string;
  placeholder?: string;
  value?: string;
  required: boolean | undefined;
  min?: string;
  max?: string;
}

export default function Input({
  onChange,
  value,
  srOnly = true,
  children,
  name,
  type,
  id,
  className,
  labelClassName,
  placeholder,
  required,
  min,
  max,
}: InputProps) {
  return (
    <>
      <label className={`${srOnly ? "sr-only" : ""} ${labelClassName}`} htmlFor={name}>
        {children}
      </label>
      <input
        onChange={onChange}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className={className}
        value={value}
        required={required}
        min={min}
        max={max}
      />
    </>
  );
}
