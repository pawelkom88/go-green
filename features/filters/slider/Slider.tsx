import Input from "@components/ui/input-field/Input";
import { useFilters } from "@context/FiltersContext";
import { filtersActions } from "@store/actions";
import { FiltersActions, SliderProps } from "domain/types";

export default function Slider({ props }: { props: SliderProps }) {
  const { setFilters } = useFilters();
  const { label, min, max, name } = props;

  function handleRange({ target }: React.ChangeEvent<HTMLInputElement>) {
    const { value } = target;

    setFilters({ type: filtersActions[name as keyof FiltersActions], payload: value });
  }

  return (
    <fieldset className="relative w-full sm:w-1/2 my-6 text-primary-clr">
      <legend className="mb-2">{label}</legend>
      <Input
        onChange={handleRange}
        type="range"
        className="w-full accent-secondary-clr"
        min={min}
        max={max}
        srOnly={true}
        name="range"
        id="range"
        required={false}>
        {label}
      </Input>
      <div aria-hidden="true" className="flex justify-between px-1">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </fieldset>
  );
}
