import { useReducer } from "react";
import { useCurrentLocation } from "@context/UserLocationContext";
import filtersReducer from "@store/filtersReducer";
import MobileMenu from "@components/navigation/mobile-menu/MobileMenu";
import Nav from "@components/navigation/Nav";
import Map from "@components/map/Map";
import Modal from "@components/modal/Modal";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@components/error-boundries/ErrorFallback";
import { initialFilters } from "domain/constants";

export default function Home() {
  const { currentLocation, getCurrentPosition, status } = useCurrentLocation();

  const [filters, dispatch] = useReducer(filtersReducer, initialFilters);
  console.log(filters);
  // const [maxResults, setMaxResults] = useState<number>(100);
  // const [filters, setFilters] = useState<number>(0);

  // function handleFilters() {}

  // function setNumberOfFetchedPOI(numberOfPOI: number): void {
  //   setMaxResults(numberOfPOI);
  // }

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => getCurrentPosition()}
      resetKeys={[currentLocation]}>
      <div className="w-full bg-primary-clr">
        <main className="w-full">
          <Nav setFilters={dispatch} />
          <Map filters={filters} />
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
