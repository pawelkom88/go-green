import { SetMaxResults } from "domain/types";
import Input from "../input-field/Input";

export default function Slider({ onSetDisplayedPoints }: SetMaxResults) {
  return (
    <fieldset className="my-6 sm:w-60 text-white">
      <Input
        onChange={(e: Event) => onSetDisplayedPoints(+(e.target as HTMLInputElement).value)}
        type="range"
        className="w-full accent-secondary-clr"
        min="1"
        max="10"
        srOnly={true}
        name="range"
        id="range"
        required={false}
        // value={maxResults}
      >
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
