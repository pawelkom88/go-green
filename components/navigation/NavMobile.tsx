import { useState } from "react";
import Slider from "@components/ui/slider/Slider";
import Filters from "@features/filters/Filters";
import FilterIcon from "@components/ui/icons/FilterIcon";
import Button from "@components/ui/button/Button";

type NavMobileProps = {
  onRadiusChange: (val: number) => void;
};

export default function NavMobile({ onRadiusChange }: NavMobileProps) {
  const [toggleFilterMenu, setToggleFilterMenu] = useState<boolean>(false);

  return (
    <>
      <Button
        onClick={() => setToggleFilterMenu(!toggleFilterMenu)}
        className="lg:hidden h-full px-2">
        <FilterIcon size={25} fill="#f1b24a" />
      </Button>
      <nav
        className={`${
          toggleFilterMenu ? "h-[50vh]" : "h-0"
        } absolute top-[100%] w-full transition-all duration-300 overflow-hidden bg-primary-clr`}>
        <Filters>
          <Slider onRadiusChange={onRadiusChange} />
        </Filters>
      </nav>
    </>
  );
}
