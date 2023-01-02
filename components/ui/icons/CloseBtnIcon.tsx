type CloseBtnProps = {
  className?: string;
  onClose?: () => void ;
};

export default function CloseBtnIcon({ className, onClose }: CloseBtnProps) {
  return (
    <svg
      onClick={onClose}
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} cursor-pointer z-50`}
      width={30}
      height={30}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" />
      <line x1={18} y1={6} x2={6} y2={18} />
      <line x1={6} y1={6} x2={18} y2={18} />
    </svg>
  );
}
