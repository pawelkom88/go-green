import Button from "@components/button/Button";
import LoginModal from "@components/login/login-modal/LoginModal";
import Modal from "@components/modal/Modal";
import FilterIcon from "@components/ui/icons/FilterIcon";
import LocationIcon from "@components/ui/icons/LocationIcon";
import UserMenu from "@components/user-menu/UserMenu";
import { useAuthContext } from "@context/AuthContext";
import { useCurrentLocation } from "@context/UserLocationContext";
import Filters from "@features/filters/Filters";
import FiltersSelect from "@features/filters/filters-select/FiltersSelect";
import Slider from "@features/filters/slider/Slider";
import useToggle from "@hooks/useToggle";
import { sliderProps } from "domain/constants";

export default function Nav() {
  const { getCurrentPosition } = useCurrentLocation();
  const { user } = useAuthContext();
  const { isShown, handleOnShow } = useToggle();

  function applyFilters(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleOnShow(false);
  }

  const IsUserLoggedIn = user ? <UserMenu /> : <LoginModal />;

  const showModalWithFilters = isShown && (
    <Modal size="w-full h-full md:h-[52rem] flex-center flex-col gap-2" onModalClose={handleOnShow}>
      <Filters onApplyFilters={applyFilters}>
        <FiltersSelect />
        {sliderProps.map(props => {
          return <Slider key={props.id} props={props} />;
        })}
      </Filters>
    </Modal>
  );

  return (
    <>
      <nav className="h-max relative py-2 z-10">
        <div className="h-full flex justify-center items-center flex-wrap md:ml-4 gap-2">
          <h1 className="text-sm sm:text-md xl:text-xl text-secondary-clr tracking-wide uppercase font-bold py-2 md:grow">
            Find the nearest charging point
          </h1>
          <Button onClick={getCurrentPosition} className="h-full mx-2 md:px-2">
            <LocationIcon size={25} fill="#f1b24a" />
          </Button>
          <Button onClick={() => handleOnShow(true)} className=" h-full md:px-2 md:mr-8">
            <FilterIcon size={25} fill="#f1b24a" />
          </Button>
          {showModalWithFilters}
          {IsUserLoggedIn}
        </div>
      </nav>
    </>
  );
}
