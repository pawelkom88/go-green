import { useState } from "react";
import Filter from "@components/filters/Filters";
import HamburgerIcon from "../icons/HamburgerIcon";
import CloseBtn from "@components/ui/icons/CloseBtn";
import Logo from "@components/ui/logo/Logo";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <aside className={isOpen ? "w-80 sidebar" : "w-20 sidebar"}>
        <ul className="relative h-full flex-center flex-col py-6">
          {isOpen ? (
            <>
              <li
                className="absolute top-4 right-4 cursor-pointer z-40"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}>
                <CloseBtn />
              </li>
              <li className="absolute top-2 left-0 right-0 m-auto">
                <Logo />
              </li>
              <li>
                <Filter />
              </li>
            </>
          ) : (
            <li className="h-full flex flex-col justify-center items-center">
              <span
                onClick={() => {
                  setIsOpen(!isOpen);
                }}>
                <HamburgerIcon />
              </span>
            </li>
          )}
        </ul>
      </aside>
    </>
  );
}
