import React, { useState, useEffect } from "react";
import { GoogleMap, useLoadScript, MarkerF, InfoWindow, Circle } from "@react-google-maps/api";
import Modal from "@components/ui/modal/Modal";
import { containerStyle, londonCoords } from "@helpers/helpers";
import { UserLocationProps } from "types/types";

type propertiesType = {
  id: number;
  address: {
    lat: number;
    lng: number;
  };
};

const options = {
  strokeColor: "#FF0000",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#FF0000",
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 3000,
  zIndex: 1,
};

export default function Map({ userLocation, data, radius }: UserLocationProps) {
  const [selectedPoint, setSelectedPoint] = useState(null);
  const { isLoaded, loadError } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY as string,
  });

  const center = userLocation ? userLocation : londonCoords;

  // useEffect(() => {
  //   const listener = e => {
  //     if (e.key === "Escape") {
  //       setSelectedPoint(null);
  //     }
  //   };
  //   window.addEventListener("keydown", listener);
  //   return () => {
  //     window.removeEventListener("keydown", listener);
  //   };
  // }, []);

  return (
    <div
      className="w-full 
    h-[calc(100vh-84px-48px)] 
    md:h-[calc(100vh-60px-48px)] 
    lg:h-[calc(100vh-60px)] bg-white">
      {isLoaded ? (
        <GoogleMap mapContainerStyle={containerStyle} zoom={14} center={center}>
          <Circle center={center} options={options} />
          {/* 
                user position - default to London coords 
          */}
          <MarkerF icon={"/assets/electric-car.svg"} position={center} />
          {/* 
                charging points position - displayed after user action 
          */}

          {data?.map(chargingPoint => {
            return (
              <MarkerF
                key={chargingPoint.id}
                icon={"/assets/charger-station.svg"}
                position={{ ...chargingPoint.address }}
                onClick={() => setSelectedPoint(chargingPoint)}
              />
            );
          })}

          {selectedPoint && (
            <InfoWindow
              onCloseClick={() => {
                setSelectedPoint(null);
              }}
              position={{
                lat: selectedPoint?.address.lat,
                lng: selectedPoint?.address.lng,
              }}>
              <div>
                <h3 className="relative text-cyan-900 text-lg p-4 z-40">
                  {selectedPoint.address.title}
                </h3>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      ) : (
        "Loading"
      )}
      {loadError && <Modal onError="Map cannot be displayed" />}
    </div>
  );
}
