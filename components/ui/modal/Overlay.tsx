import { Props } from "types/types";
import React from "react";

interface OverlayType extends Props {
  onClose: () => void;
}

export default function Overlay({ children, onClose }: OverlayType) {
  return (
    <div onClick={onClose} className="fixed inset-0 bg-gray-600 bg-opacity-75 z-50 flex-center">
      {children}
    </div>
  );
}
