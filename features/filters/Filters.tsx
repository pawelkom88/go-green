import Button from "@components/button/Button";
import FilterIcon from "@components/ui/icons/FilterIcon";
import FilterCheckbox from "@features/filters/filter-checkbox/FilterCheckbox";
import { FiltersBtnStyles, filtersCheckbox } from "domain/constants";
import { FiltersProps } from "domain/types";

export default function Filters({ children, onApplyFilters }: FiltersProps) {
  return (
    <div className="w-full h-full flex-center">
      <form onSubmit={onApplyFilters} className="relative lg:h-full w-full flex-center flex-col">
        <div className="flex-center gap-2">
          <h2 className="text-2xl font-bold my-4 mr-2 uppercase">Filters</h2>
          <FilterIcon size={35} fill="#f1b24a" />
        </div>
        <div className="flex flex-col items-start gap-2 mb-24">
          {filtersCheckbox.map(({ id, label, name }) => {
            return (
              <FilterCheckbox key={id} name={name}>
                {label}
              </FilterCheckbox>
            );
          })}
        </div>
        {children}
        <div className="flex-center gap-2">
          <Button type="submit" className={`${FiltersBtnStyles} bg-primary-clr text-white`}>
            Apply
          </Button>
        </div>
      </form>
    </div>
  );
}
