import { useState } from "react";
import Sidebar from "@components/ui/sidebar/Sidebar";
import MobileMenu from "@components/ui/navigation/mobile-menu/MobileMenu";
import Nav from "@components/ui/navigation/desktop-nav/Nav";

export default function Home() {
  const [show, setShow] = useState<boolean>(false);

  function toggleMenu() {
    setShow(!show);
  }

  return (
    <>
      <div className="w-full h-full bg-gray-200">
        <div className="flex flex-no-wrap">
          <Sidebar />
          <MobileMenu onToggle={toggleMenu} isShown={show} />
          <div className="w-full">
            <Nav onToggle={toggleMenu} isShown={show} />
            <main className="w-full h-[calc(100vh-64px)] bg-red-100">MAP</main>
          </div>
        </div>
      </div>
    </>
  );
}
