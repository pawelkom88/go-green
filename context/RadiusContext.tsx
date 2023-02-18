import { useState, createContext, useContext } from "react";
import { ChildrenType } from "types/types";

type RadiusContextModel = {
  radius: number;
  setRadius: (val: number) => void;
};

export const RadiusContext = createContext<RadiusContextModel | null>(null);

export default function RadiusContextProvider({ children }: ChildrenType) {
  const [radius, setRadius] = useState(2);

  return <RadiusContext.Provider value={{ radius, setRadius }}>{children}</RadiusContext.Provider>;
}

export function useRadius() {
  const context = useContext(RadiusContext);
  if (context === undefined) {
    throw new Error("useRadius must be used within a RadiusContextProvider");
  }
  return context as RadiusContextModel;
}
