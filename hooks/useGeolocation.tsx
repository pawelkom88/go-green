import { londonCoords } from "domain/constants";
import { Coords, LocationError, UserPositionCoords } from "domain/types";
import { useState } from "react";

interface Options {
  enableHighAccuracy: boolean;
  timeout: number;
  maximumAge: number;
}

const options: Options = {
  enableHighAccuracy: true,
  timeout: 1000,
  maximumAge: 0,
};

export default function useGeolocation() {
  const [status, setStatus] = useState<string>("");
  const [currentLocation = londonCoords, setCurrentLocation] = useState<Coords>();

  function handleLocationError(error: LocationError): void {
    let message: string;

    switch (error.code) {
      case 1:
        {
          message = "You've decided not to share your position. Location service is turned off.";
        }
        break;
      case 2:
        {
          message = "The network is down or the positioning service can't be reached.";
        }
        break;
      case 3:
        {
          message = "The attempt timed out before it could get the location data.";
        }
        break;
      default:
        message = "Geolocation failed due to unknown error.";
    }
    setStatus(message);
  }

  function getCoordinates(position: UserPositionCoords): void {
    const crd = position.coords;

    setCurrentLocation({
      lat: crd.latitude,
      lng: crd.longitude,
    });
  }

  function getCurrentPosition(): void {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
      return;
    } else {
      navigator.geolocation.getCurrentPosition(getCoordinates, handleLocationError, options);
    }
  }

  return { currentLocation, getCurrentPosition, status };
}
