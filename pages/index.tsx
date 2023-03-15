import { useCurrentLocation } from "@context/UserLocationContext";

// components
import MobileMenu from "@components/mobile-menu/MobileMenu";
import Sidebar from "@components/sidebar/Sidebar";
import Nav from "@components/navigation/Nav";
import Map from "@components/map/Map";
import Modal from "@components/ui/modal/Modal";

//error boundry
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@components/error-boundries/ErrorFallback";
import RadiusContextProvider from "@context/RadiusContext";

export default function Home() {
  const { currentLocation, getCurrentPosition, status } = useCurrentLocation();

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => getCurrentPosition()}
      resetKeys={[currentLocation]}>
      <div className="w-full bg-primary-clr">
        <RadiusContextProvider>
          <Sidebar />
          <main className="w-full">
            <Nav />
            <Map />
            <MobileMenu />
          </main>
        </RadiusContextProvider>
      </div>

      {status?.length !== 0 && (
        <Modal size="flex-center h-[200px] mt-12">
          <p className="text-center">{status}</p>
        </Modal>
      )}
    </ErrorBoundary>
  );
}
