import FilterCheckbox from "@features/filters/filter-checkbox/FilterCheckbox";
import { Dispatch } from "react";
import Button from "@components/button/Button";
import FilterIcon from "@components/ui/icons/FilterIcon";
import { Props } from "domain/types";
import { FiltersBtnStyles } from "domain/constants";

interface Filters extends Props {
  onSubmit: Dispatch<any>;
}

export default function Filters({ children, onSubmit }: Filters) {
  function resetFilters() {
    console.log("handler");
  }

  return (
    <div className="w-full h-full flex-center">
      <form onSubmit={onSubmit} className="lg:h-full w-full flex-center flex-col">
        <div className="flex-center gap-2">
          <h2 className="text-2xl font-bold my-4 mr-2 uppercase">Filters</h2>
          <FilterIcon size={35} fill="#f1b24a" />
        </div>

        <div className="flex flex-col items-start gap-2">
          <FilterCheckbox>Membership required ?</FilterCheckbox>
          <br />
          <FilterCheckbox>closest one ?</FilterCheckbox>
          <br />
          <FilterCheckbox>33333333</FilterCheckbox>
          <br />
        </div>
        {children}
        <div className="flex-center gap-2">
          <Button type="submit" className={`${FiltersBtnStyles} bg-primary-clr text-white`}>
            Apply
          </Button>
          <Button onClick={resetFilters} className={`${FiltersBtnStyles} bg-teriary-clr `}>
            Clear All
          </Button>
        </div>
      </form>
    </div>
  );
}
