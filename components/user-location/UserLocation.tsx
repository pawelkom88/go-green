import FilterIcon from "@components/ui/icons/FilterIcon";
import LocationIcon from "@components/ui/icons/LocationIcon";

export type UserLocationProps = {
  onLocateUser: (val: object) => void;
  onToggleFiltersMenu: () => void;
};

export default function UserLocation({ onLocateUser, onToggleFiltersMenu }: UserLocationProps) {

  return (
    <div className="w-full h-full flex justify-evenly lg:justify-center items-center flex-wrap px-4 lg:ml-12">
      <h1 className="text-md sm:text-lg xl:text-xl text-secondary-clr tracking-wide uppercase font-bold md:mr-6 py-2">
        Find the nearest charging point
      </h1>
      {/* component */}
      <input
        className="border-4 border-teriary-clr focus:outline-none focus:border-secondary-cls rounded text-sm text-black pl-12 py-2"
        type="text"
        placeholder="Postcode"
      />
      <div onClick={onLocateUser} className="w-15 h-full ml-2 px-2">
        <LocationIcon />
      </div>
      <div onClick={onToggleFiltersMenu} className="lg:hidden w-15 h-full px-2">
        <FilterIcon />
      </div>
    </div>
  );
}
