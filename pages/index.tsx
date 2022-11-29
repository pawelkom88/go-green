import { useState } from "react";
import useGeolocation from "@hooks/useGeolocation";
import Sidebar from "@components/ui/sidebar/Sidebar";
import Nav from "@components/ui/navigation/Nav";
import Map from "@components/map/Map";

export default function Home() {
  const { currentLocation, getCurrentPosition } = useGeolocation();

  return (
    <>
      <div className="w-full bg-primary-clr">
        <div className="flex flex-no-wrap">
          <Sidebar />
          <main className="w-full">
            <Nav onLocateUser={getCurrentPosition} />
            <Map userLocation={currentLocation} />
          </main>
        </div>
      </div>
    </>
  );
}
