import useAuthContext from "@hooks/useAuthContext";
import PostCodeValidation from "@features/post-code-validation/PostCodeValidation";
import UserMenu from "@components/user-menu/UserMenu";
import LocationIcon from "@components/ui/icons/LocationIcon";
import Button from "@components/ui/button/Button";
import NavMobile from "./NavMobile";
import LoginModal from "@components/login-modal/LoginModal";

type UserLocationProps = {
  onLocateUser: (val: object) => void;
  onRadiusChange: (val: number) => void;
};

export default function Nav({ onLocateUser, onRadiusChange }: UserLocationProps) {
  const { user } = useAuthContext();

  console.log(user);

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

          <NavMobile onRadiusChange={onRadiusChange} />

          {user ? <UserMenu /> : <LoginModal />}
        </div>
      </nav>
    </>
  );
}
