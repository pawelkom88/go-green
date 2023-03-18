import { OverlayType } from "domain/types";

export default function Overlay({ children, onClose }: OverlayType) {
  return (
    <div onClick={onClose} className="fixed inset-0 bg-gray-600 bg-opacity-75 z-50 flex-center">
      {children}
    </div>
  );
}
