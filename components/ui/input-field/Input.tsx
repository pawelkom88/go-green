import { MutableRefObject } from "react";
import { Props } from "domain/types";

interface InputProps extends Props {
  onChange: any;
  onKeyDown?: any;
  // onChange: () => void;
  srOnly?: boolean;
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
  checked?: boolean;
}

export default function Input({
  onChange,
  onKeyDown,
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
  checked,
}: InputProps) {
  return (
    <>
      <label className={`${srOnly ? "sr-only" : ""} ${labelClassName}`} htmlFor={name}>
        {children}
      </label>
      <input
        onKeyDown={onKeyDown}
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
        checked={checked}
      />
    </>
  );
}
