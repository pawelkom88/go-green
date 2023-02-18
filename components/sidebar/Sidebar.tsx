import { useState } from "react";
import { useRadius } from "@context/RadiusContext";
import Filters from "@features/filters/Filters";
import FilterIcon from "../ui/icons/FilterIcon";
import CloseBtnIcon from "@components/ui/icons/CloseBtnIcon";
import Button from "@components/ui/button/Button";
import Logo from "@components/ui/logo/Logo";
import Slider from "@components/ui/slider/Slider";
import { FiltersProps } from "types/types";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const { setRadius: onRadiusChange } = useRadius();

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <>
      <aside className={isCollapsed ? "w-[35vw] sidebar" : "w-20 sidebar"}>
        <div className="relative h-full flex-center flex-col py-6">
          {isCollapsed ? (
            <>
              <Button onClick={toggleSidebar}>
                <CloseBtnIcon size={30} className={"absolute top-4 right-4 cursor-pointer"} />
              </Button>
              <span className="absolute top-2 left-0 right-0 m-auto">
                <Logo
                  src="/assets/logo.png"
                  width={180}
                  height={180}
                  className="relative min-h-max w-full flex-center z-50 mt-6"
                />
              </span>
              <Filters>
                <Slider onRadiusChange={onRadiusChange} />
              </Filters>
            </>
          ) : (
            <Button onClick={toggleSidebar}>
              <FilterIcon size={35} fill="#f1b24a" />
            </Button>
          )}
        </div>
      </aside>
    </>
  );
}
