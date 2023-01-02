import ChargingPointDetails from "@features/google-map/ChargingPointDetails";
import React, { useState } from "react";
import ChargingPointInfo from "@features/google-map/ChargingPointInfo";
import Marker from "@features/google-map/Marker";
import Modal from "@components/ui/modal/Modal";
import { GoogleMap, useLoadScript, MarkerF, DirectionsRenderer } from "@react-google-maps/api";
import { containerStyle, londonCoords } from "@helpers/helpers";
import { Coords, DataType } from "types/types";

type MapPropsType = {
  userLocation: undefined | Coords;
  data: Array<DataType>;
};

type LatLngLiteral = google.maps.LatLngLiteral;
type DirectionsResult = google.maps.DirectionsResult;
// type MapOptions = google.maps.MapOptions;

export default function Map({ userLocation, data }: MapPropsType) {
  const [selectedPoint, setSelectedPoint] = useState<null | DataType>(null);
  const [direction, setDirections] = useState<null | DirectionsResult>(null);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const { isLoaded, loadError } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY as string,
  });

  const defaultLocation = userLocation ? userLocation : londonCoords;

  return (
    <div className="relative w-full h-[calc(100vh-84px-48px)] md:h-[cal(100vh-60px-48px)] lg:h-[calc(100vh-60px)] bg-white">
      {isLoaded ? (
        <GoogleMap mapContainerStyle={containerStyle} zoom={14} center={defaultLocation as LatLngLiteral}>
          {/* 
            user position - default to London coords 
          */}
          <MarkerF icon={"/assets/electric-car.svg"} position={defaultLocation as LatLngLiteral} />
          {/* 
            charging points position and direction - displayed after user action 
          */}
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
        </GoogleMap>
      ) : (
        "Loading"
      )}
      {loadError && <Modal info="Map cannot be displayed" />}
    </div>
  );
}
