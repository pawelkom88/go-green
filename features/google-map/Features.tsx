import { useCurrentLocation } from "@context/UserLocationContext";
import Marker from "@features/google-map/Marker";
import POIInfo from "@features/google-map/POIInfo";
import POIInfoBox from "@features/google-map/POIInfoBox";
import { DirectionsRenderer } from "@react-google-maps/api";
import { ExtendedPOIDetails } from "domain/api-types";
import { useState } from "react";

export default function Features() {
  const { currentLocation } = useCurrentLocation();
  const [selectedPoint, setSelectedPoint] = useState<null | ExtendedPOIDetails>(null);
  const [direction, setDirections] = useState<null | google.maps.DirectionsResult>(null);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  return (
    <>
      <Marker
        userLocation={currentLocation}
        onSetSelectedPoint={setSelectedPoint}
        onSetDirection={setDirections}
      />
      {/* 
        charging points info 
      */}
      {selectedPoint && (
        <POIInfoBox
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
        <POIInfo
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
