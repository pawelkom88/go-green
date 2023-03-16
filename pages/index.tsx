import { useState } from "react";
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

export default function Home() {
  const { currentLocation, getCurrentPosition, status } = useCurrentLocation();

  const [maxResults, setMaxResults] = useState<number>(2);

  function setNumberOfDisplayedPoints(value: number): void {
    setMaxResults(value);
  }

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => getCurrentPosition()}
      resetKeys={[currentLocation]}>
      <div className="w-full bg-primary-clr">
        <Sidebar onSetDisplayedPoints={setNumberOfDisplayedPoints} />
        <main className="w-full">
          <Nav onSetDisplayedPoints={setNumberOfDisplayedPoints} />
          <Map maxResults={maxResults} />
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
