export default function ChevronIcon() {
  return (
    <svg
      aria-haspopup="true"
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      className="cursor-pointer text-white"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="#f1b24a"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" />
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
