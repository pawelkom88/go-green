import { ChildrenType } from "types/types";

interface InputProps extends ChildrenType {
  onChange: (e: Event) => void;
  srOnly: boolean;
  name: string;
  type: string;
  id: string;
  className: string;
  placeholder: string;
  value: string;
  required: boolean | undefined;
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
  placeholder,
  required,
}: InputProps) {
  return (
    <>
      <label className={srOnly ? "sr-only" : ""} htmlFor={name}>
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
      />
    </>
  );
}
