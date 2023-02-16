import { useState } from "react";
import PostCodeValidation from "@features/post-code-validation/PostCodeValidation";
import UserMenu from "@components/user-menu/UserMenu";
import Filters from "@features/filters/Filters";
import FilterIcon from "@components/ui/icons/FilterIcon";
import Button from "@components/ui/button/Button";
import LocationIcon from "@components/ui/icons/LocationIcon";
import Slider from "@components/ui/slider/Slider";

type UserLocationProps = {
  onLocateUser: (val: object) => void;
  onRadiusChange: (val: number) => void;
};

export default function Nav({ onLocateUser, onRadiusChange }: UserLocationProps) {
  const [toggleFilterMenu, setToggleFilterMenu] = useState<boolean>(false);

  return (
    <>
      <nav className="h-max relative py-2 z-10">
        <div className="h-full flex justify-evenly lg:justify-center items-center flex-wrap lg:pr-4 lg:ml-24 gap-2">
          <h1 className="text-md sm:text-md xl:text-xl text-secondary-clr tracking-wide uppercase font-bold md:mr-6 py-2">
            Find the nearest charging point
          </h1>
          <PostCodeValidation />
          <div onClick={onLocateUser} className="h-full ml-2 px-2">
            <LocationIcon size={25} fill="#f1b24a" />
          </div>
          <Button
            onClick={() => setToggleFilterMenu(!toggleFilterMenu)}
            className="lg:hidden h-full px-2">
            <FilterIcon size={25} fill="#f1b24a" />
          </Button>
          <UserMenu />
        </div>
      </nav>
      <div
        className={`${
          toggleFilterMenu ? "h-[50vh]" : "h-0"
        } absolute w-full transition-all duration-300 overflow-hidden bg-primary-clr`}>
        <Filters>
          <Slider onRadiusChange={onRadiusChange} />
        </Filters>
      </div>
    </>
  );
}
