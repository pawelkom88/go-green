import MobileMenu from "@components/mobile-menu/MobileMenu";
import useGeolocation from "@hooks/useGeolocation";
import Sidebar from "@components/ui/sidebar/Sidebar";
import Nav from "@components/ui/navigation/Nav";
import Map from "@components/map/Map";
import Modal from "@components/ui/modal/Modal";

export default function Home() {
  const { currentLocation, getCurrentPosition, status } = useGeolocation();

  return (
    <>
      <div className="w-full bg-primary-clr">
        <div className="flex flex-no-wrap">
          <Sidebar />
          <main className="w-full">
            <Nav onLocateUser={getCurrentPosition} />
            <Map userLocation={currentLocation} />
            <MobileMenu />
          </main>
        </div>
      </div>

      {status.length !== 0 && <Modal onError={status} />}
    </>
  );
}
