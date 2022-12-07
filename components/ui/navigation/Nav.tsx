import { useState } from "react";
import UserLocation from "@components/user-location/UserLocation";
import UserMenu from "@components/user-menu/UserMenu";
import Filters from "@components/filters/Filters";

export type UserLocationProps = {
  onLocateUser: (val: object) => void;
};

export default function Nav({ onLocateUser }: UserLocationProps) {
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState<boolean>(false);

  function toggleFiltersMenu() {
    setIsFilterMenuOpen(!isFilterMenuOpen);
  }

  return (
    <>
      <nav className="h-max relative py-2 z-10">
        <div className="lg:flex w-full">
          <UserLocation onLocateUser={onLocateUser} onToggleFiltersMenu={toggleFiltersMenu} />
          <UserMenu />
        </div>
      </nav>
      {isFilterMenuOpen && <Filters />}
    </>
  );
}
