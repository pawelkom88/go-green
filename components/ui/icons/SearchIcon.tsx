export default function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[15px]"
      width={20}
      height={20}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="#222"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" />
      <circle cx={10} cy={10} r={7} />
      <line x1={21} y1={21} x2={15} y2={15} />
    </svg>
  );
}
