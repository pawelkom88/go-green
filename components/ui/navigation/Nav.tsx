import UserMenu from "@components/user-menu/UserMenu";
import SearchIcon from "@components/ui/icons/SearchIcon";

export default function Nav() {
  console.log("render Nav");
  return (
    <nav className="h-max flex items-center lg:items-stretch justify-end lg:justify-between bg-grey-100 shadow relative py-2 z-10">
      <div className="lg:flex w-full">
        <div className="w-full h-full flex-center flex-wrap lg:pr-24">
          <h1 className="text-xl lg:text-3xl tracking-wide mx-12 py-2">
            Electric Car Charging Point Finder
          </h1>
          <div className="relative w-3/4 md:w-2/3 lg:w-1/3 flex-center">
            <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
              {/* change to navigation icon */}
              <SearchIcon />
            </div>
            <input
              className="border border-gray-100 focus:outline-none focus:border-indigo-700 rounded w-full text-sm text-gray-500 bg-gray-100 pl-12 py-2"
              type="text"
              placeholder="Postcode"
            />
            <button title="Navigation button" aria-label="Locate me" className="w-15 h-full  px-2">
              <SearchIcon />
            </button>

            <button
              title="Navigation button"
              aria-label="Locate me"
              className="lg:hidden w-15 h-full  px-2">
              <SearchIcon />
            </button>
          </div>
        </div>
        <UserMenu />
      </div>
    </nav>
  );
}
