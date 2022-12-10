import { useState } from "react";
import { MarkerF } from "@react-google-maps/api";
import { Coords, DataType } from "types/types";
import Modal from "@components/ui/modal/Modal";

type MarkerPropsType = {
  data: null | Array<DataType>;
  userLocation: undefined | Coords;
  onSetSelectedPoint: (val: DataType) => void;
  onSetDirection: (val: google.maps.DirectionsResult) => void;
};

export default function Marker({
  data,
  onSetSelectedPoint,
  onSetDirection,
  userLocation,
}: MarkerPropsType) {
  const [status, setStatus] = useState<string>("");
  function fetchDirections(chargingPoint: Coords) {
    if (!userLocation) return;

    const request = {
      origin: chargingPoint,
      destination: userLocation as google.maps.LatLngLiteral,
      travelMode: google.maps.TravelMode.DRIVING,
    };

    const service = new google.maps.DirectionsService();

    service.route(request, function getResults(result, status) {
      if (status === "OK" && result) {
        onSetDirection(result);
      } else {
        setStatus("Directions request failed due to " + status);
      }
    });
  }

  return (
    <>
      {data?.map(chargingPoint => {
        return (
          <MarkerF
            key={chargingPoint.id}
            icon={"/assets/charger-station.svg"}
            position={{ ...chargingPoint.address }}
            onClick={() => {
              onSetSelectedPoint(chargingPoint);
              fetchDirections({
                lat: chargingPoint.address.lat,
                lng: chargingPoint.address.lng,
              });
            }}
          />
        );
      })}
      {status && <Modal onError={status} />}
    </>
  );
}