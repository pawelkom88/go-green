import { ButtonType } from "domain/types";

export default function Button({
  children,
  onClick,
  className,
  type = "button",
  title,
  disabled,
  aria,
}: ButtonType) {
  return (
    <button
      aria-label={aria}
      title={title}
      onClick={onClick}
      type={type}
      className={className}
      disabled={disabled}>
      {children}
    </button>
  );
}
