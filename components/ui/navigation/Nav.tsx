import { useState } from "react";
import useGeolocation from "@hooks/useGeolocation";
import UserMenu from "@components/user-menu/UserMenu";
import Filters from "@components/filters/Filters";
import FilterIcon from "@components/ui/icons/FilterIcon";
import Location from "@components/ui/icons/LocationIcon";
import SearchIcon from "@components/ui/icons/SearchIcon";

type UserLocationProps = {
  onLocateUser: (val: object) => void;
};

export default function Nav({ onLocateUser }: UserLocationProps) {
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState<boolean>(false);

  function toggleFiltersMenu() {
    setIsFilterMenuOpen(!isFilterMenuOpen);
  }
  console.log("NAV renders");

  return (
    <>
      <nav className="h-max flex items-center lg:items-stretch justify-end lg:justify-between relative py-2 z-10">
        <div className="lg:flex w-full">
          <div className="w-full h-full flex-center flex-wrap">
            <h1 className="text-md sm:text-lg xl:text-2xl text-secondary-clr tracking-wide uppercase font-bold lg:mx-6 py-2">
              Find the nearest charging point
            </h1>
            <div className="relative w-3/4 lg:w-1/3 flex-center">
              <div className="text-primary-clr absolute ml-4 inset-0 m-auto w-4 h-4">
                <SearchIcon />
              </div>
              <input
                className="border-4 border-teriary-clr focus:outline-none focus:border-secondary-cls rounded w-full text-sm text-black pl-12 py-2"
                type="text"
                placeholder="Postcode"
              />
              <div onClick={onLocateUser} className="w-15 h-full ml-2 px-2">
                <Location />
              </div>
              <div onClick={toggleFiltersMenu} className="lg:hidden w-15 h-full px-2">
                <FilterIcon />
              </div>
            </div>
          </div>
          <UserMenu />
        </div>
      </nav>

      {isFilterMenuOpen ? (
        <div className="absolute w-full h-full bg-primary-clr z-40">
          <Filters />
        </div>
      ) : (
        ""
      )}
    </>
  );
}
