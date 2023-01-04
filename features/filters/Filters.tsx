import FilterCheckbox from "@components/ui/filter-checkbox/FilterCheckbox";
import Button from "@components/ui/button/Button";
import FilterIcon from "@components/ui/icons/FilterIcon";
import { FiltersProps } from "types/types";

const commonStyles = "w-full h-12 font-bold uppercase my-4 border-2 border-primary-clr";

export default function Filters({ onRadiusChange }: FiltersProps) {
  function someHandler() {
    console.log("handler");
  }

  return (
    <div className="absolute w-full h-2/3 bg-primary-clr z-40 flex-center border-b-4 border-b-teriary-clr lg:border-0">
      <form className="lg:h-full w-full flex-center flex-col">
        <div className="flex-center">
          <h2 className="text-2xl font-bold my-2 mr-2 uppercase">Filters</h2>
          <FilterIcon />
        </div>
        <FilterCheckbox>1</FilterCheckbox>
        <br />
        <FilterCheckbox>2</FilterCheckbox>
        <br />
        <FilterCheckbox>3</FilterCheckbox>
        <br />
        <div className="w-3/4 flex-center px-1">
          <Button
            onClick={someHandler}
            className={`${commonStyles} bg-white text-black  hover:bg-secondary-clr`}>
            Apply
          </Button>
          <Button onClick={someHandler} className={`${commonStyles} bg-teriary-clr`}>
            Clear All
          </Button>
        </div>
      </form>
    </div>
  );
}
