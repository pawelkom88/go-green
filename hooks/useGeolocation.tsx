import { useState } from "react";
import { GeolocationType, PositionType, GeolocationState } from "../types/types";

const options = {
  enableHighAccuracy: true,
  timeout: 1000,
  maximumAge: 0,
};

export default function useGeolocation() {
  const [status, setStatus] = useState<string>("");
  const [requestTime, setRequestTime] = useState<Date>();
  const [currentLocation, setCurrentLocation] = useState<GeolocationState>({
    lat: 51.509865,
    lng: -0.118092,
  });

  function handleLocationError(error: GeolocationType): void {
    let message;

    switch (error.code) {
      case 1:
        {
          message = "You've decided not to share your position";
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

  function getCoordinates(position: PositionType) {
    const crd = position.coords;
    const timestamp = position.timestamp;

    setCurrentLocation({
      lat: crd.latitude,
      lng: crd.longitude,
    });

    setRequestTime(new Date(timestamp));
  }

  function getCurrentPosition() {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
      return;
    } else {
      navigator.geolocation.getCurrentPosition(getCoordinates, handleLocationError, options);
    }
  }

  return { currentLocation, getCurrentPosition, status, requestTime };
}
