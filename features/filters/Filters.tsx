import FilterCheckbox from "@components/ui/filter-checkbox/FilterCheckbox";
import Button from "@components/ui/button/Button";
import FilterIcon from "@components/ui/icons/FilterIcon";
import { ChildrenType } from "types/types";
import { FiltersBtnStyles } from "@helpers/helpers";

export default function Filters({ children }: ChildrenType) {
  function someHandler() {
    console.log("handler");
  }

  return (
    <div className="absolute w-full h-full bg-primary-clr z-40 flex-center border-b-4 border-b-teriary-clr lg:border-0">
      <form className="lg:h-full w-full flex-center flex-col">
        <div className="flex-center gap-2">
          <h2 className="text-2xl font-bold my-4 mr-2 uppercase">Filters</h2>
          <FilterIcon size={35} fill="#f1b24a" />
        </div>
        <FilterCheckbox>1</FilterCheckbox>
        <br />
        <FilterCheckbox>2</FilterCheckbox>
        <br />
        <FilterCheckbox>3</FilterCheckbox>
        <br />
        {children}
        <div className="w-3/4 flex-center px-1">
          <Button
            onClick={someHandler}
            className={`${FiltersBtnStyles} bg-white text-black  hover:bg-secondary-clr`}>
            Apply
          </Button>
          <Button onClick={someHandler} className={`${FiltersBtnStyles} bg-teriary-clr`}>
            Clear All
          </Button>
        </div>
      </form>
    </div>
  );
}
