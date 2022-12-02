import React from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import Modal from "@components/ui/modal/Modal";

type UserLocationProps = {
  userLocation: {
    lat: number;
    lng: number;
  };
};

const containerStyle = {
  maxWidth: "100%",
  minHeight: "100%",
};

const fakePoition = {
  lat: 51.519977,
  lng: -0.128115,
};

export default function Map({ userLocation }: UserLocationProps) {
  const { isLoaded, loadError } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY as string,
  });

  return (
    <div className="w-full h-[calc(100vh-64px)] bg-white">
      {isLoaded ? (
        <GoogleMap mapContainerStyle={containerStyle} zoom={14} center={userLocation}>
          <MarkerF icon={"/assets/electric-car.svg"} position={userLocation} />
          <MarkerF icon={"/assets/charger-station.svg"} position={fakePoition} />
        </GoogleMap>
      ) : (
        "Loading"
      )}
      {loadError && <Modal onError="Map cannot be displayed" />}
    </div>
  );
}
