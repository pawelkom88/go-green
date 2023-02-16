import { FiltersProps } from "types/types";
import Input from "../input-field/Input";

export default function Slider({ onRadiusChange }: FiltersProps) {
  return (
    <fieldset className="my-6 sm:w-60 text-white">
      <Input
        onChange={onRadiusChange}
        type="range"
        className="w-full accent-secondary-clr"
        min="1"
        max="10"
        srOnly={true}
        name="range"
        id="range"
        required={false}>
        range input
      </Input>
      <div aria-hidden="true" className="flex justify-between px-1">
        <span>2</span>
        <span>4</span>
        <span>6</span>
        <span>8</span>
        <span>10</span>
      </div>
    </fieldset>
  );
}
