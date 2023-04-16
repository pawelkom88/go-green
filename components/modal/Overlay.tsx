import { OverlayType } from "domain/types";

export default function Overlay({ children, onClose, blur = "blur-none" }: OverlayType) {
  return (
    <div
      onClick={onClose}
      className={`${blur} fixed inset-0 backdrop-brightness-50 bg-opacity-75 z-50 flex-center`}>
      {children}
    </div>
  );
}
