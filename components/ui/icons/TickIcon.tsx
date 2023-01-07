type TickIconProps = {
  strokeClr: string;
};

export default function TickIcon({ strokeClr }: TickIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      className="w-15 ml-2 mt-0"
      viewBox="0 0 24 24"
      strokeWidth="3"
      stroke={strokeClr}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M5 12l5 5l10 -10" />
    </svg>
  );
}
