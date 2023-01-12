import { IconProps } from "types/types";

export default function ChevronIcon({ size, fill }: IconProps) {
  return (
    <svg
      aria-haspopup="true"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      className=""
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill={fill}
      strokeLinecap="round"
      strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" />
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
