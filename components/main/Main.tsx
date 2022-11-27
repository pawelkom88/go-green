import React, { useState, ReactNode } from "react";
import MobileMenu from "@components/ui/navigation/mobile-menu/MobileMenu";
import Nav from "@components/ui/navigation/desktop-nav/Nav";

type MainProps = {
  children: ReactNode;
};

export default function Main({ children }: MainProps) {
  const [show, setShow] = useState<boolean>(false);

  function toggleMenu() {
    setShow(!show);
  }

  return (
    <>
      <MobileMenu onToggle={toggleMenu} isShown={show} />
      <main className="w-full">
        <Nav onToggle={toggleMenu} isShown={show} />
        {children}
      </main>
    </>
  );
}
