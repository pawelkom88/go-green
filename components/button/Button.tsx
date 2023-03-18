import { ButtonType } from "domain/types";

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
