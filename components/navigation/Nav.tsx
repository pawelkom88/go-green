import useAuthContext from "@hooks/useAuthContext";
import UserMenu from "@components/user-menu/UserMenu";
import LocationIcon from "@components/ui/icons/LocationIcon";
import LoginModal from "@components/login/login-modal/LoginModal";
import { useCurrentLocation } from "@context/UserLocationContext";
import Slider from "@features/filters/slider/Slider";
import Filters from "@features/filters/Filters";
import FilterIcon from "@components/ui/icons/FilterIcon";
import Button from "@components/button/Button";
import useToggle from "@hooks/useToggle";
import FiltersSelect from "@features/filters/filters-select/FiltersSelect";
import Modal from "@components/modal/Modal";
import { sliderProps } from "domain/constants";
import { FiltersProps } from "domain/types";

export default function Nav({ setFilters }: FiltersProps) {
  const { getCurrentPosition } = useCurrentLocation();
  const { user } = useAuthContext();
  const { isShown, handleOnShow } = useToggle();

  const IsUserLoggedIn = user ? <UserMenu /> : <LoginModal />;

  const showModalWithFilters = isShown && (
    <Modal size="w-full h-full md:h-[52rem] flex-center flex-col gap-2" onModalClose={handleOnShow}>
      <Filters setFilters={setFilters}>
        <FiltersSelect setFilters={setFilters} />
        {sliderProps.map(props => {
          return <Slider key={props.id} props={props} onChange={setFilters} />;
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
