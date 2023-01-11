type UserIconProps = {
  fill: string;
  size: number;
};

export default function UserIcon({ fill, size }: UserIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      viewBox="0 0 25 25"
      fill="none"
      className="cursor-pointer">
      <path
        fill={fill}
        fillRule="evenodd"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm3-12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 7a7.489 7.489 0 0 1 6-3 7.489 7.489 0 0 1 6 3 7.489 7.489 0 0 1-6 3 7.489 7.489 0 0 1-6-3Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
