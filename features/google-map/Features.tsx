import { useState } from "react";
import ChargingPointInfo from "@features/google-map/ChargingPointInfo";
import ChargingPointDetails from "@features/google-map/ChargingPointDetails";
import Marker from "@features/google-map/Marker";
import { DirectionsRenderer } from "@react-google-maps/api";
import { DataType, MapProps } from "types/types";

export default function Features({ userLocation, data }: MapProps) {
  const [selectedPoint, setSelectedPoint] = useState<null | DataType>(null);
  const [direction, setDirections] = useState<null | google.maps.DirectionsResult>(null);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  return (
    <>
      <Marker
        userLocation={userLocation}
        onSetSelectedPoint={setSelectedPoint}
        onSetDirection={setDirections}
        data={data}
      />
      {/* 
        charging points info 
      */}
      {selectedPoint && (
        <ChargingPointInfo
          userLocation={userLocation}
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
