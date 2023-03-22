import FiltersContext from "@context/FiltersContext";
import { useCurrentLocation } from "@context/UserLocationContext";
import MobileMenu from "@components/navigation/mobile-menu/MobileMenu";
import Nav from "@components/navigation/Nav";
import Map from "@components/map/Map";
import Modal from "@components/modal/Modal";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@components/error-boundries/ErrorFallback";

export default function Home() {
  const { currentLocation, getCurrentPosition, status } = useCurrentLocation();

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => getCurrentPosition()}
      resetKeys={[currentLocation]}>
      <div className="w-full bg-primary-clr">
        <main className="w-full">
          <FiltersContext>
            <Nav />
            <Map />
          </FiltersContext>
          <MobileMenu />
        </main>
      </div>

      {status?.length !== 0 && (
        <Modal size="flex-center h-[200px] mt-12">
          <p className="text-center">{status}</p>
        </Modal>
      )}
    </ErrorBoundary>
  );
}
