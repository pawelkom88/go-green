import React from "react";
import Button from "@components/button/Button";
import { InfoWindow } from "@react-google-maps/api";
import { ChargingPointInfoProps, Coords } from "domain/types";
import { handleLocation } from "@helpers/helpers";

export default function POIInfoBox({
  userLocation,
  selectedPoint,
  onCloseClick,
  onShowDetails,
}: ChargingPointInfoProps) {
  const chargingPointCoords: Coords = {
    lat: selectedPoint?.AddressInfo.Latitude,
    lng: selectedPoint?.AddressInfo.Longitude,
  };

  const directionLink: string = handleLocation(userLocation, chargingPointCoords) || "";

  handleLocation(userLocation, chargingPointCoords);

  return (
    <InfoWindow
      onCloseClick={() => {
        onCloseClick(null);
        () => onShowDetails(false);
      }}
      position={chargingPointCoords}>
      <div className="w-full mx-auto text-primary-clr text-center p-4 flex flex-col">
        <h3 className="font-bold text-lg my-2">
          {selectedPoint.AddressInfo.Title == "null" ? "Unknown" : selectedPoint.AddressInfo.Title}
        </h3>
        <span>{selectedPoint.AddressInfo.Postcode}</span>
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
