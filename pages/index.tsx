// hooks
import {useState} from "react";
import useGeolocation from "@hooks/useGeolocation";

// components
import MobileMenu from "@components/mobile-menu/MobileMenu";
import Sidebar from "@components/ui/sidebar/Sidebar";
import Nav from "@components/ui/navigation/Nav";
import MapData from "@components/map-data/MapData";
import Modal from "@components/ui/modal/Modal";

export default function Home() {
  const [radius, setRadius] = useState(5)

  const { currentLocation, getCurrentPosition, status } = useGeolocation();
  return (
    <>
      <div className="w-full bg-primary-clr">
        <div className="flex flex-no-wrap">
          <Sidebar />
          <main className="w-full">
            <Nav onLocateUser={getCurrentPosition} />
            <MapData userLocation={currentLocation} radius={radius}/>
            <MobileMenu />
          </main>
        </div>
      </div>

      {status.length !== 0 && <Modal onError={status} />}
    </>
  );
}
