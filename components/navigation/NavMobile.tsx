import Slider from "@components/ui/slider/Slider";
import Filters from "@features/filters/Filters";

type NavMobileProps = {
  toggleFilterMenu: boolean;
  onRadiusChange: (val: number) => void;
};

export default function NavMobile({ toggleFilterMenu, onRadiusChange }: NavMobileProps) {
  return (
    <nav
      className={`${
        toggleFilterMenu ? "h-[50vh]" : "h-0"
      } absolute w-full transition-all duration-300 overflow-hidden bg-primary-clr`}>
      <Filters>
        <Slider onRadiusChange={onRadiusChange} />
      </Filters>
    </nav>
  );
}
