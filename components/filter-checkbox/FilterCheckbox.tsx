import React from "react";
import { Props } from "domain/types";

export default function FilterCheckbox({ children }: Props) {
  return (
    <div className="w-full m-1">
      <label htmlFor="filter" className="flex items-center justify-between cursor-pointer">
        <span className="label-text mr-2">{children}</span>
        <input
          id="filter"
          type="checkbox"
          className="w-5 h-5 accent-secondary-clr checkbox checkbox-primary"
        />
      </label>
    </div>
  );
}
