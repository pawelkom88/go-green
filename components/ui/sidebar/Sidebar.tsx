import { useState } from "react";
import Filters from "@components/filters/Filters";
import FilterIcon from "../icons/FilterIcon";
import CloseBtn from "@components/ui/icons/CloseBtnIcon";
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
                <Filters />
              </li>
            </>
          ) : (
            <li
              onClick={() => {
                setIsOpen(!isOpen);
              }}>
              <FilterIcon />
            </li>
          )}
        </ul>
      </aside>
    </>
  );
}
