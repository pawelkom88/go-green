import React from "react";
import { ChildrenType } from "types/types";

export default function Overlay({ children }: ChildrenType) {
  return <div className="absolute inset-0 w-full h-full bg-gray-800 opacity-50 flex-center z-50">{children}</div>;
}
