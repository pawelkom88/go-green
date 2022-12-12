import React from "react";
import Button from "@components/ui/button/Button";
import { InfoWindow } from "@react-google-maps/api";
import { DataType, Coords } from "types/types";

type ChargingPointInfoType = {
  selectedPoint: DataType;
  userLocation: undefined | Coords;
  onCloseClick: (val: null) => void;
  onShowDetails: (val: boolean) => void;
};

export default function ChargingPointInfo({
  userLocation,
  selectedPoint,
  onCloseClick,
  onShowDetails,
}: ChargingPointInfoType) {
  const { lat, lng } = userLocation || {};

  const chargingPoint = {
    lat: selectedPoint?.address.lat,
    lng: selectedPoint?.address.lng,
  };

  const directionLink = `https://www.google.com/maps/dir/?api=1&origin=${lat},${lng}&destination=${chargingPoint.lat},${chargingPoint.lng}&travelmode=driving`;

  return (
    <InfoWindow
      onCloseClick={() => {
        onCloseClick(null);
        () => onShowDetails(false);
      }}
      position={chargingPoint}>
      <div className="w-full mx-auto text-primary-clr text-center py-24 flex flex-col">
        <h3 className="font-bold text-lg my-2">{selectedPoint.address.title}</h3>
        <span>{selectedPoint.address.postCode}</span>
        <div className="flex justify-evenly">
          <Button
            onClick={() => onShowDetails(true)}
            className="bg-secondary-clr my-2 mr-2 py-2 px-4 text-primary-clr font-bold">
            Details
          </Button>
          <a
            target="_blank"
            href={directionLink}
            rel="noopener noreferrer"
            className="bg-primary-clr my-2 py-2 px-4 text-secondary-clr font-bold">
            Get direction
          </a>
        </div>
      </div>
    </InfoWindow>
  );
}
