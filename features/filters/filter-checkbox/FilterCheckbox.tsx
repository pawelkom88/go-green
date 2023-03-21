import useKeyPress from "@hooks/useKeyPress";
import useToggle from "@hooks/useToggle";
import { FiltersProps } from "domain/types";
import { filtersActions } from "@store/actions";

export default function FilterCheckbox({ children, setFilters }: FiltersProps) {
  const { isShown: isChecked, handleOnShow: handleIsChecked } = useToggle();

  const checkOnKeyPress = useKeyPress("Enter");
  const uncheckOnKeyPress = useKeyPress("Escape");

  function markAsChecked() {
    if (checkOnKeyPress) {
      handleIsChecked(true);
    }
    
    if (uncheckOnKeyPress) {
      handleIsChecked(false);
    }
  }

  return (
    <div className="w-full m-1">
      <label htmlFor="filter" className="flex items-center justify-between cursor-pointer">
        <span className="label-text mr-2">{children}</span>
        <input
          onChange={() => setFilters({ type: filtersActions.reset, payload: "" })}
          onKeyDown={markAsChecked}
          id="filter"
          type="checkbox"
          className="w-5 h-5 accent-secondary-clr checkbox checkbox-primary"
          checked={isChecked}
        />
      </label>
    </div>
  );
}
