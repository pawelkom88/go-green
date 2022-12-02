import React from "react";

import FilterIcon from "@components/ui/icons/FilterIcon";
import Location from "@components/ui/icons/LocationIcon";
import SearchIcon from "@components/ui/icons/SearchIcon";

export type UserLocationProps = {
  onLocateUser: (val: object) => void;
  onToggleFiltersMenu: () => void;
};

export default function UserLocation({ onLocateUser, onToggleFiltersMenu }: UserLocationProps) {
  console.log("USER LOCATION renders");

  return (
    <div className="w-full h-full flex-center flex-wrap">
      <h1 className="text-md sm:text-lg xl:text-xl text-secondary-clr tracking-wide uppercase font-bold lg:mx-2 py-2">
        Find the nearest charging point
      </h1>
      <div className="relative w-3/4 lg:w-1/3 flex-center">
        <SearchIcon />
        <input
          className="border-4 border-teriary-clr focus:outline-none focus:border-secondary-cls rounded text-sm text-black pl-12 py-2"
          type="text"
          placeholder="Postcode"
        />
        <div onClick={onLocateUser} className="w-15 h-full ml-2 px-2">
          <Location />
        </div>
        <div onClick={onToggleFiltersMenu} className="lg:hidden w-15 h-full px-2">
          <FilterIcon />
        </div>
      </div>
    </div>
  );
}
