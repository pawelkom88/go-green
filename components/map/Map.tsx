import React, { useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import Modal from "@components/ui/modal/Modal";
import { containerStyle, londonCoords, data } from "@helpers/helpers";
import { UserLocationProps } from "types/types";

export default function Map({ userLocation }: UserLocationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { isLoaded, loadError } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY as string,
  });

  return (
    <div className="w-full h-[calc(100vh-64px)] bg-white">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          zoom={14}
          center={userLocation ? userLocation : londonCoords}>
          {/* 
                user position - default to London coords 
          */}
          <MarkerF
            icon={"/assets/electric-car.svg"}
            position={userLocation ? userLocation : londonCoords}
          />
          {/* 
                charging points position - displayed after user action 
          */}
          {data.map(({ ID, Latitude: nlat, Longitude: nlng }) => {
            const lat = nlat + (Math.random() * (0.002));
            const lng = nlng + (Math.random() * (0.01));
   
            return (
              <MarkerF
                key={ID}
                icon={"/assets/charger-station.svg"}
                position={{ lat, lng }}
                onClick={() => setIsOpen(!isOpen)}
              />
            );
          })}

        </GoogleMap>
      ) : (
        "Loading"
      )}
      {loadError && <Modal onError="Map cannot be displayed" />}
      {isOpen && <Modal onError="Map cannot be displayed" />}
    </div>
  );
}

