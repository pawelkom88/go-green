import { useState } from "react";

import { useCurrentLocation } from "@context/UserLocationContext";
import ChargingPointInfo from "@features/google-map/ChargingPointInfo";
import ChargingPointDetails from "@features/google-map/ChargingPointDetails";
import Marker from "@features/google-map/Marker";
import { DirectionsRenderer } from "@react-google-maps/api";
import { POIDetails } from "domain/api-types";

export default function Features() {
  const { currentLocation } = useCurrentLocation();
  const [selectedPoint, setSelectedPoint] = useState<null | POIDetails>(null);
  const [direction, setDirections] = useState<null | google.maps.DirectionsResult>(null);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  return (
    <>
      <Marker
        userLocation={currentLocation}
        onSetSelectedPoint={setSelectedPoint}
        onSetDirection={setDirections}
      />
      {/* <>
      <Marker
        userLocation={userLocation}
        onSetSelectedPoint={setSelectedPoint}
        onSetDirection={setDirections}
        data={data}
      /> */}
      {/* 
        charging points info 
      */}
      {selectedPoint && (
        <ChargingPointInfo
          userLocation={currentLocation}
          selectedPoint={selectedPoint}
          onCloseClick={setSelectedPoint}
          onShowDetails={setShowDetails}
        />
      )}
      {/* 
        charging points details such as connection time and payment 
      */}
      {selectedPoint && showDetails && (
        <ChargingPointDetails
          userLocation={currentLocation}
          selectedPoint={selectedPoint}
          direction={direction}
          chargingPointDetails={selectedPoint}
          onShowDetails={setShowDetails}
        />
      )}
      {/* 
      charging points position and direction - displayed after user action 
      */}
      {direction && (
        <DirectionsRenderer
          directions={direction}
          options={{
            polylineOptions: {
              zIndex: 50,
              strokeColor: "#164a41",
              strokeWeight: 5,
            },
            suppressMarkers: true,
          }}
        />
      )}
    </>
  );
}
