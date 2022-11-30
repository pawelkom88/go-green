import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

type UserLocationProps = {
  userLocation: {
    lat: number;
    lng: number;
  };
};

const containerStyle = {
  maxWidth: "100%",
  minHeight: "100%",
};

export default function Map({ userLocation }: UserLocationProps) {
  const { isLoaded, loadError } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY as string,
  });

  return (
    <div className="w-full h-[calc(100vh-64px)] bg-white">
      {isLoaded ? (
        <GoogleMap mapContainerStyle={containerStyle} zoom={14} center={userLocation}>
          <MarkerF position={userLocation} />
        </GoogleMap>
      ) : (
        "Loading"
      )}
      {loadError && "error"}
    </div>
  );
}
