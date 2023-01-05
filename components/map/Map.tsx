import Modal from "@components/ui/modal/Modal";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { containerStyle, londonCoords } from "@helpers/helpers";
import Features from "@features/google-map/Features";
import { MapProps } from "types/types";

export default function Map({ userLocation, data }: MapProps) {
  const { isLoaded, loadError } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY as string,
  });

  const defaultLocation = userLocation ? userLocation : londonCoords;
  return (
    <div className="relative w-full h-[calc(100vh-96px-39px)] sm:h-[calc(100vh-84px-20px)] lg:h-[calc(100vh-60px)] bg-white">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          zoom={14}
          center={defaultLocation as google.maps.LatLngLiteral}>
          {/* 
            user position - default to London coords 
          */}
          <MarkerF
            icon={"/assets/electric-car.svg"}
            position={defaultLocation as google.maps.LatLngLiteral}
          />
          <Features userLocation={userLocation} data={data} />
        </GoogleMap>
      ) : (
        "Loading"
      )}
      {loadError && <Modal>Map cannot be displayed</Modal>}
    </div>
  );
}
