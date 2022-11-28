import React from "react";

type FilterCheckboxType = {
  children: React.ReactNode;
};

export default function FilterCheckbox({ children }: FilterCheckboxType) {
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
