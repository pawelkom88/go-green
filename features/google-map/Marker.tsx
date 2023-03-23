import { useFilters } from "@context/FiltersContext";
import useBoundingBox from "@hooks/useBoundingBox";
import useFetch from "@hooks/useFetch";
import { useDebounce } from "use-debounce";
import { useState } from "react";
import { MarkerF } from "@react-google-maps/api";
import { MarkerProps } from "domain/types";
import Modal from "@components/modal/Modal";
import Spinner from "@components/ui/spinner/Spinner";

export default function Marker({ onSetSelectedPoint, onSetDirection, userLocation }: MarkerProps) {
  const [status, setStatus] = useState<string>("");
  const { boundingBoxPolygon } = useBoundingBox(userLocation, .5);
  const [debouncedMaxResults] = useDebounce(150, 1500);

  // const [debouncedMaxResults] = useDebounce(maxResults, 1500);
  const { data, loading, error } = useFetch(boundingBoxPolygon, debouncedMaxResults);
  
  const { filters } = useFilters();


  function fetchDirections({ lat, lng }: google.maps.LatLngLiteral) {
    if (!userLocation) return;

    const service = new google.maps.DirectionsService();
    const request: google.maps.DirectionsRequest = {
      origin: { lat, lng },
      destination: userLocation,
      travelMode: google.maps.TravelMode.DRIVING,
    };

    service.route(
      request,
      function getResults(
        result: google.maps.DirectionsResult | null,
        status: google.maps.DirectionsStatus
      ): void {
        if (status === "OK" && result) {
          onSetDirection(result);
        } else {
          setStatus("Directions request failed due to " + status);
        }
      }
    );
  }

  if (data) {
    return (
      <>
        {data
          .filter(({ Connections }) => Connections.length)
          .map(chargingPoint => {
            const { Latitude: lat, Longitude: lng } = chargingPoint.AddressInfo;

            return (
              <MarkerF
                key={chargingPoint.ID}
                icon={"/assets/charger-station.svg"}
                position={{ lat, lng }}
                onClick={() => {
                  onSetSelectedPoint(chargingPoint);
                  fetchDirections({ lat, lng });
                }}
              />
            );
          })}
        {status && <Modal size="flex-center h-[300px]">{status}</Modal>}
        {error && (
          <Modal size="flex-center h-[245px]">
            An error occurred while fetching data. Please try again
          </Modal>
        )}
        {loading && <Spinner />}
      </>
    );
  }
  return null;
}
