import { SliderProps } from "domain/types";
import Input from "../ui/input-field/Input";

export default function Slider({ props }: { props: SliderProps }) {
  const { label, min, max, onChange, value } = props;

  return (
    <fieldset className="relative w-full md:w-1/2 my-6 text-primary-clr">
      <legend className="mb-2">{label}</legend>
      <Input
        onChange={onChange}
        type="range"
        className="w-full accent-secondary-clr"
        min={min}
        max={max}
        srOnly={true}
        name="range"
        id="range"
        required={false}
        value={value}>
        {label}
      </Input>
      <div aria-hidden="true" className="flex justify-between px-1">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </fieldset>
  );
}
