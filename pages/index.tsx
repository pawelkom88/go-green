// hooks
import useGeolocation from "@hooks/useGeolocation";

// components
import MobileMenu from "@components/mobile-menu/MobileMenu";
import Sidebar from "@components/sidebar/Sidebar";
import Nav from "@components/navigation/Nav";
import MapData from "@components/map-data/MapData";
import Modal from "@components/ui/modal/Modal";

//error boundry
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@components/error-boundries/ErrorFallback";
import RadiusContextProvider from "@context/RadiusContext";

export default function Home() {
  const { currentLocation, getCurrentPosition, status } = useGeolocation();

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => getCurrentPosition()}
      resetKeys={[currentLocation]}>
      <div className="w-full bg-primary-clr">
        <RadiusContextProvider>
          <Sidebar />
          <main className="w-full">
            <Nav onLocateUser={getCurrentPosition} />
            <MapData userLocation={currentLocation} />
            <MobileMenu />
          </main>
        </RadiusContextProvider>
      </div>

      {status.length !== 0 && (
        <Modal size="flex-center h-[200px] mt-12">
          <p className="text-center">{status}</p>
        </Modal>
      )}
    </ErrorBoundary>
  );
}
