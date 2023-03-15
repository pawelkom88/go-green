import useAuthContext from "@hooks/useAuthContext";
import { useRadius } from "@context/RadiusContext";
import PostCodeValidation from "@features/post-code-validation/PostCodeValidation";
import UserMenu from "@components/user-menu/UserMenu";
import LocationIcon from "@components/ui/icons/LocationIcon";
import NavMobile from "./NavMobile";
import LoginModal from "@components/login-modal/LoginModal";
import { useCurrentLocation } from "@context/UserLocationContext";

export default function Nav() {
  const { getCurrentPosition } = useCurrentLocation();
  const { user } = useAuthContext();
  // move down to mobile
  const { setRadius: onRadiusChange } = useRadius();

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
          <NavMobile onRadiusChange={onRadiusChange} />
          {user ? <UserMenu /> : <LoginModal />}
        </div>
      </nav>
    </>
  );
}
