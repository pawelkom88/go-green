import { useState } from "react";
import Filters from "@components/filters/Filters";
import FilterIcon from "../icons/FilterIcon";
import CloseBtn from "@components/ui/icons/CloseBtnIcon";
import Logo from "@components/ui/logo/Logo";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <aside className={isOpen ? "w-80 sidebar" : "w-20 sidebar"}>
        <div className="relative h-full flex-center flex-col py-6">
          {isOpen ? (
            <>
              <CloseBtn
                className={"absolute top-4 right-4 cursor-pointer"}
                onClose={toggleSidebar}
              />
              <span className="absolute top-2 left-0 right-0 m-auto">
                <Logo />
              </span>
              <Filters />
            </>
          ) : (
            <FilterIcon onToggleSidebar={toggleSidebar} />
          )}
        </div>
      </aside>
    </>
  );
}
