import { OverlayType } from "domain/types";

export default function Overlay({ children, onClose }: OverlayType) {
  return (
    <div onClick={onClose} className="fixed inset-0 backdrop-brightness-50 bg-opacity-75 z-50 flex-center">
      {children}
    </div>
  );
}
