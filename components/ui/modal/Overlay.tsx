import React from "react";

type OverlayType = {
  children: React.ReactNode;
  onClose: () => void;
};

export default function Overlay({ children, onClose }: OverlayType) {

  return (
    <div onClick={onClose} className="fixed inset-0 bg-gray-600 bg-opacity-75 flex-center z-50">
      {children}
    </div>
  );
}
