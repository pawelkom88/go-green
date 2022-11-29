import { useEffect, useState } from "react";

type geolocationType = {
  code: string;
  message: string;
};

const options = {
  enableHighAccuracy: true,
  timeout: 1000,
  maximumAge: 0,
};

function handleLocationError(error: geolocationType) {
  console.warn(`ERROR(${error.code}): ${error.message}`);
}

export default function useGeolocation() {
  const [currentLocation, setCurrentLocation] = useState({
    lat: 51.509865,
    lng: -0.118092,
  });
  const [status, setStatus] = useState("");

  function getCurrentPosition() {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
      return;
    } else {
      navigator.geolocation.getCurrentPosition(
        function getCoordinates(position) {
          const crd = position.coords;

          setCurrentLocation({
            lat: crd.latitude,
            lng: crd.longitude,
          });
        },
        handleLocationError,
        options
      );
    }
  }

  return { currentLocation, getCurrentPosition, status };
}
