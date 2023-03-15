import React from "react";
import Button from "@components/ui/button/Button";
import { InfoWindow } from "@react-google-maps/api";
import { ChargingPointInfoType, Coords } from "types/types";
import { handleLocation } from "@helpers/helpers";

export default function ChargingPointInfo({
  userLocation,
  selectedPoint,
  onCloseClick,
  onShowDetails,
}: ChargingPointInfoType) {
  
  const chargingPoint: Coords = {
    lat: selectedPoint?.AddressInfo.address.lat,
    lng: selectedPoint?.AddressInfo.address.lng,
  };
  
  const directionLink: string = handleLocation(userLocation, chargingPoint) ?? "";

  handleLocation(userLocation, chargingPoint);

  return (
    <InfoWindow
      onCloseClick={() => {
        onCloseClick(null);
        () => onShowDetails(false);
      }}
      position={chargingPoint}>
      <div className="w-full mx-auto text-primary-clr text-center p-4 flex flex-col">
        <h3 className="font-bold text-lg my-2">{selectedPoint.AddressInfo.address.title}</h3>
        <span>{selectedPoint.AddressInfo.address.postCode}</span>
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
