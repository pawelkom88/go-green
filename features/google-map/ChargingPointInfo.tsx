import React from "react";
import Button from "@components/ui/button/Button";
import { InfoWindow } from "@react-google-maps/api";
import { ChargingPointInfoType } from "types/types";
import { handleLocation } from "@helpers/helpers";

export default function ChargingPointInfo({
  userLocation,
  selectedPoint,
  onCloseClick,
  onShowDetails,
}: ChargingPointInfoType) {
  const chargingPoint = {
    lat: selectedPoint?.address.lat,
    lng: selectedPoint?.address.lng,
  };

  const directionLink = handleLocation(userLocation, chargingPoint);

  handleLocation(userLocation, chargingPoint);

  return (
    <InfoWindow
      onCloseClick={() => {
        onCloseClick(null);
        () => onShowDetails(false);
      }}
      position={chargingPoint}>
      <div className="w-full mx-auto text-primary-clr text-center p-4 flex flex-col">
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
