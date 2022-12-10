import React from "react";
import Button from "@components/ui/button/Button";
import { InfoWindow } from "@react-google-maps/api";
import { DataType } from "types/types";

type ChargingPointInfoType = {
  selectedPoint: DataType;
  onCloseClick: (val: null) => void;
};

export default function ChargingPointInfo({ selectedPoint, onCloseClick }: ChargingPointInfoType) {
  function handler() {
    console.log("asds");
  }

  return (
    <>
      <InfoWindow
        onCloseClick={() => {
          onCloseClick(null);
        }}
        position={{
          lat: selectedPoint?.address.lat,
          lng: selectedPoint?.address.lng,
        }}>
        <div className="w-full mx-auto text-primary-clr text-center py-24 flex flex-col">
          <h3 className="font-bold text-lg my-2">{selectedPoint.address.title}</h3>
          <span>{selectedPoint.address.postCode}</span>
          <div className="flex justify-evenly">
            <Button
              onClick={handler}
              className="bg-secondary-clr my-2 py-2 px-4 text-primary-clr font-bold">
              Details
            </Button>
            <Button
              onClick={handler}
              className="bg-primary-clr my-2 py-2 px-4 text-secondary-clr font-bold">
              Get direction
            </Button>
          </div>
        </div>
      </InfoWindow>
    </>
  );
}
