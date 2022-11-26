import SidebarItem from "./SidebarItem";
// import React, { ReactNode } from "react";
import Image from "next/image";
import Logo from "@components/ui/logo/Logo";

// type ChildrenProps = {
//   children: ReactNode;
// };

export default function Sidebar() {
  return (
    <>
      <aside className="absolute lg:relative w-80 h-screen shadow bg-gray-100 hidden lg:block">
        <Logo />
        <ul className="flex flex-col justify-center items-center py-6">
          <SidebarItem name="sidebar item" />
          <SidebarItem name="sidebar item" />
          <SidebarItem name="sidebar item" />
        </ul>
      </aside>
    </>
  );
}
