import useBoundingBox from "@hooks/useBoundingBox";
import useFetch from "@hooks/useFetch";
import useDebounce from "@hooks/useDebounce";
import { useRadius } from "@context/RadiusContext";
import { useState } from "react";
import { MarkerF } from "@react-google-maps/api";
import { BoundingBox, UserLocationType, Coords, MapProps } from "types/types";
import Modal from "@components/ui/modal/Modal";
import Spinner from "@components/ui/spinner/Spinner";
import { POIDetails } from "domain/api-types";

interface MarkerProps extends MapProps {
  userLocation: UserLocationType;
  onSetSelectedPoint: (val: POIDetails) => void;
  onSetDirection: (val: google.maps.DirectionsResult) => void;
}

export default function Marker({
  // data,
  onSetSelectedPoint,
  onSetDirection,
  userLocation,
}: MarkerProps) {
  const [status, setStatus] = useState<string>("");
  const { radius } = useRadius();
  const { boundingBoxPolygon } = useBoundingBox(userLocation, radius);
  const debouncedValue: BoundingBox = useDebounce(boundingBoxPolygon, 1500);
  const { data, loading, error } = useFetch(debouncedValue);

  function fetchDirections(chargingPoint: TYPE) {
    if (!userLocation) return;

    const { Latitude, Longitude } = chargingPoint;

    const service = new google.maps.DirectionsService();
    const request = {
      origin: { Latitude, Longitude },
      destination: userLocation,
      travelMode: google.maps.TravelMode.DRIVING,
    };

    service.route(request, function getResults(result, status) {
      if (status === "OK" && result) {
        onSetDirection(result);
      } else {
        setStatus("Directions request failed due to " + status);
      }
    });
  }

  if (data) {
    return (
      <>
        {data.map(chargingPoint => {
          const { Latitude, Longitude } = chargingPoint;

          // investigate why undefined
          console.log(Latitude, Longitude);

          return (
            <MarkerF
              key={chargingPoint.ID}
              icon={"/assets/charger-station.svg"}
              // TO BE FIXED - check docs what position takes in
              position={{ Latitude, Longitude }}
              // TO BE FIXED
              onClick={() => {
                onSetSelectedPoint(chargingPoint);
                fetchDirections(chargingPoint.AddressInfo);
              }}
            />
          );
        })}
        {status && <Modal size="flex-center h-[300px]">{status}</Modal>}
        {error && (
          <Modal size="flex-center h-[245px]">
            An error occured while fetching data. Please try again.
          </Modal>
        )}
        {loading && <Spinner />}
      </>
    );
  }
  return null;
}
