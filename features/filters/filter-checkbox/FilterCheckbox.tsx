import Input from "@components/ui/input-field/Input";
import { useFilters } from "@context/FiltersContext";
import useToggle from "@hooks/useToggle";
import { filtersActions } from "@store/actions";
import { FilterCheckboxProps, FiltersActions } from "domain/types";

export default function FilterCheckbox({ children, name = "" }: FilterCheckboxProps) {
  const { setFilters } = useFilters();
  const { isShown: isChecked, handleOnShow: handleIsChecked } = useToggle();

  function markAsCheckedOnKeyPress({ key }: React.KeyboardEvent) {
    if (key === "Enter") handleIsChecked(!isChecked);
  }

  function handleFilters({ target }: React.ChangeEvent<HTMLInputElement>): void {
    const { name, checked: isChecked } = target;

    handleIsChecked(isChecked);

    setFilters({
      type: filtersActions[name as keyof FiltersActions],
      payload: isChecked,
    });
  }

  return (
    <div className="w-full m-1">
      <label htmlFor="filter" className="flex items-center justify-between cursor-pointer">
        <span className="label-text mr-2">{children}</span>
        <Input
          name={name}
          onChange={handleFilters}
          onKeyDown={markAsCheckedOnKeyPress}
          id="filter"
          type="checkbox"
          className="w-5 h-5 accent-secondary-clr checkbox checkbox-primary"
          checked={isChecked}
          required={false}
        />
      </label>
    </div>
  );
}
