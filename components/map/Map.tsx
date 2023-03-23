import { useFilters } from "@context/FiltersContext";
import { useCurrentLocation } from "@context/UserLocationContext";
import Modal from "@components/modal/Modal";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { containerStyles } from "domain/constants";
import Features from "@features/google-map/Features";

export default function Map() {
  const { currentLocation } = useCurrentLocation();

  const { isLoaded, loadError } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY as string,
  });

  const showMap = isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyles} zoom={14} center={currentLocation}>
      <MarkerF icon={"/assets/electric-car.svg"} position={currentLocation} />
      <Features />
    </GoogleMap>
  ) : (
    "Loading"
  );

  return (
    <div className="relative w-full h-[calc(100vh-52px)] bg-white">
      {showMap}
      {loadError && <Modal size="flex-center h-[245px]">Map cannot be displayed</Modal>}
    </div>
  );
}
