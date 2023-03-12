import { useCurrentLocation } from "@context/UserLocationContext";
import Modal from "@components/ui/modal/Modal";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { containerStyles, londonCoords } from "@constants/constants";
import Features from "@features/google-map/Features";
import { Coords, MapProps } from "types/types";

export default function Map({ data }: MapProps) {
  const { currentLocation } = useCurrentLocation();

  const { isLoaded, loadError } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY as string,
  });

  const userLocation: Coords = currentLocation ? currentLocation : londonCoords;

  return (
    <div className="relative w-full h-[calc(100vh-104px)] sm:h-[calc(100vh-60px)] bg-white">
      {isLoaded ? (
        <GoogleMap mapContainerStyle={containerStyles} zoom={14} center={userLocation}>
          {/* 
            user position - default to London coords 
          */}
          <MarkerF icon={"/assets/electric-car.svg"} position={userLocation} />
          <Features data={data} />
        </GoogleMap>
      ) : (
        "Loading"
      )}
      {loadError && <Modal size="flex-center h-[245px]">Map cannot be displayed</Modal>}
    </div>
  );
}
