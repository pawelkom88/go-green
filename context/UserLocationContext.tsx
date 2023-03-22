import { createContext, useContext } from "react";
import useGeolocation from "@hooks/useGeolocation";
import { Props, Coords } from "domain/types";
import { londonCoords } from "domain/constants";

interface LocationContext {
  currentLocation: Coords;
  getCurrentPosition: () => void;
  status: string;
}

const LocationContext = createContext<LocationContext | null>(null);

export default function UserLocationContextProvider({ children }: Props) {
  const { currentLocation = londonCoords, getCurrentPosition, status } = useGeolocation();
  const values = { currentLocation, getCurrentPosition, status };

  return <LocationContext.Provider value={values}>{children}</LocationContext.Provider>;
}

export function useCurrentLocation() {
  const userLocation = useContext(LocationContext);
  if (userLocation == null) {
    throw new Error("useCurrentLocation must be used within a UserLocationContextProvider");
  }
  return userLocation as LocationContext;
}
