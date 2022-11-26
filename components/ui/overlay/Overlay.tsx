import { MobileMenuProps } from "@types/types";

export default function Overlay({ onToggle, isShown }: MobileMenuProps) {
  return (
    <div
      className="bg-gray-600 opacity-50 absolute h-full w-full lg:hidden z-40"
      onClick={() => onToggle(!isShown)}
    />
  );
}
