import { createContext, useContext } from "react";
import useGeolocation from "@hooks/useGeolocation";
import { Props, Coords } from "types/types";

type LocationContextType = {
  currentLocation: Coords | undefined;
  getCurrentPosition: () => void;
  status: string;
};

const LocationContext = createContext<LocationContextType | null>(null);

export default function UserLocationContextProvider({ children }: Props) {
  const { currentLocation, getCurrentPosition, status } = useGeolocation();
  const values = { currentLocation, getCurrentPosition, status };

  return <LocationContext.Provider value={values}>{children}</LocationContext.Provider>;
}

export function useCurrentLocation() {
  const userLocation = useContext(LocationContext);
  if (userLocation === undefined) {
    throw new Error("useCurrentLocation must be used within a UserLocationContextProvider");
  }
  return userLocation as LocationContextType;
}
