import React from "react";
import { ChildrenType } from "types/types";

export default function FilterCheckbox({ children }: ChildrenType) {
  return (
    <div className="form-control">
      <label htmlFor="filter" className="flex-center label cursor-pointer">
        <span className="label-text mr-2"> {children}</span>
        <input
          id="filter"
          type="checkbox"
          className="w-5 h-5 accent-secondary-clr checkbox checkbox-primary"
        />
      </label>
    </div>
  );
}
