import { FiltersProps } from "types/types";
import Input from "../input-field/Input";

export default function Slider({ onRadiusChange }: FiltersProps) {
  return (
    <fieldset className="space-y-1 sm:w-60 text-white">
      <Input
        onChange={onRadiusChange}
        type="range"
        className="w-full accent-secondary-clr"
        min="1"
        max="5"
        srOnly={true}
        name="range"
        id="range"
        required={false}>
        range input
      </Input>
      <div aria-hidden="true" className="flex justify-between px-1">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
      </div>
    </fieldset>
  );
}
