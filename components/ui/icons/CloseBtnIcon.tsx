import { IconProps } from "types/types";

interface CloseBtnProps extends IconProps {
  onClick?: () => void;
}

export default function CloseBtnIcon({ size, className, onClick }: CloseBtnProps) {
  return (
    <svg
      aria-labelledby="close"
      role="img"
      tabIndex={0}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} cursor-pointer z-50`}
      width={size}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round">
      <title id="close">Close icon</title>
      <path stroke="none" d="M0 0h24v24H0z" />
      <line x1={18} y1={6} x2={6} y2={18} />
      <line x1={6} y1={6} x2={18} y2={18} />
    </svg>
  );
}
