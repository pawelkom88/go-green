import useAuthContext from "@hooks/useAuthContext";
import PostCodeValidation from "@features/post-code-validation/PostCodeValidation";
import UserMenu from "@components/user-menu/UserMenu";
import LocationIcon from "@components/ui/icons/LocationIcon";
import LoginModal from "@components/login-modal/LoginModal";
import { useCurrentLocation } from "@context/UserLocationContext";
import { SetMaxResults } from "domain/types";
import Slider from "@components/ui/slider/Slider";
import Filters from "@features/filters/Filters";
import FilterIcon from "@components/ui/icons/FilterIcon";
import Button from "@components/ui/button/Button";
import useToggle from "@hooks/useToggle";

export default function Nav({ onSetDisplayedPoints }: SetMaxResults) {
  const { getCurrentPosition } = useCurrentLocation();
  const { user } = useAuthContext();
  const { isShown, handleOnShow } = useToggle();

  return (
    <>
      <nav className="h-max relative py-2 z-10">
        <div className="h-full flex justify-evenly lg:justify-center items-center flex-wrap lg:pr-4 lg:ml-24 gap-2">
          <h1 className="text-md sm:text-md xl:text-xl text-secondary-clr tracking-wide uppercase font-bold md:mr-6 py-2">
            Find the nearest charging point
          </h1>
          <PostCodeValidation />
          <div onClick={getCurrentPosition} className="h-full ml-2 px-2">
            <LocationIcon size={25} fill="#f1b24a" />
          </div>
          {/* NAV MOBILE START */}
          <Button onClick={() => handleOnShow(!isShown)} className="lg:hidden h-full px-2">
            <FilterIcon size={25} fill="#f1b24a" />
          </Button>
          <nav
            className={`${
              isShown ? "h-[50vh]" : "h-0"
            } absolute top-[100%] w-full transition-all duration-300 overflow-hidden bg-primary-clr`}>
            <Filters>
              <Slider onSetDisplayedPoints={onSetDisplayedPoints} />
            </Filters>
          </nav>
          {/* NAV MOBILE END */}
          {user ? <UserMenu /> : <LoginModal />}
        </div>
      </nav>
    </>
  );
}
