import { useState } from "react";
import PostCodeValidation from "@features/post-code-validation/PostCodeValidation";
import UserMenu from "@components/user-menu/UserMenu";
import Filters from "@components/filters/Filters";
import FilterIcon from "@components/ui/icons/FilterIcon";
import LocationIcon from "@components/ui/icons/LocationIcon";

export type UserLocationProps = {
  onLocateUser: (val: object) => void;
};

export default function Nav({ onLocateUser }: UserLocationProps) {
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState<boolean>(false);

  return (
    <>
      <nav className="h-max relative py-2 z-10">
        <div className="h-full flex justify-evenly lg:justify-center items-center flex-wrap pr-4 lg:ml-24">
          <h1 className="text-md sm:text-md xl:text-xl text-secondary-clr tracking-wide uppercase font-bold md:mr-6 py-2">
            Find the nearest charging point
          </h1>
          <PostCodeValidation />
          <div onClick={onLocateUser} className="h-full ml-2 px-2">
            <LocationIcon />
          </div>
          <div
            onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
            className="lg:hidden h-full px-2">
            <FilterIcon />
          </div>
          <UserMenu />
        </div>
      </nav>
      {isFilterMenuOpen && <Filters />}
    </>
  );
}
