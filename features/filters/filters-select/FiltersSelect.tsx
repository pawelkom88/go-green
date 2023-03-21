import { useState } from "react";
import useClickOutside from "@hooks/useClickOutside";
import Image from "next/image";
import { connectorTypes, socketTypeImages } from "domain/constants";
import useToggle from "@hooks/useToggle";
import { filtersActions } from "@store/actions";
import { FiltersProps } from "domain/types";

export default function FiltersSelect({ setFilters }: FiltersProps) {
  const [connectorType, setConnectorType] = useState<string | null>(null);
  const { isShown: showDropdown, handleOnShow: handleShowDropdown } = useToggle();

  function openDropDownOnKeyPress({ key }: React.KeyboardEvent) {
    if (key === "Enter") handleShowDropdown(true);
  }

  function closeDropDownOnKeyPress({ key }: React.KeyboardEvent) {
    if (key === "Escape") handleShowDropdown(false);
  }

  function selectConnectorTypeOnKeyPress(key: string, type: string) {
    if (key !== "Enter") return;

    setFilters({ type: filtersActions.connectorType, payload: type });
    handleShowDropdown(false);
  }

  let domNode = useClickOutside(() => {
    handleShowDropdown(false);
  });

  return (
    <>
      <label className="sr-only" htmlFor="charging-point-type">
        Choose a type:
      </label>
      <div className="absolute top-[38%] w-full sm:w-1/3 z-50">
        <ul
          tabIndex={0}
          onKeyDown={showDropdown ? closeDropDownOnKeyPress : openDropDownOnKeyPress}
          onClick={() => handleShowDropdown(true)}
          className="relative w-full">
          <li className="bg-secondary-clr text-primary mt-4 p-2 text-center cursor-pointer">
            Connector type
          </li>
          {showDropdown &&
            connectorTypes.map(({ id, type, value }) => {
              return (
                <li
                  ref={domNode}
                  tabIndex={0}
                  onClick={() => setFilters({ type: filtersActions.connectorType, payload: type })}
                  onMouseEnter={() => setConnectorType(value)}
                  onMouseLeave={() => setConnectorType(null)}
                  onFocus={() => setConnectorType(value)}
                  onKeyDown={({ key }: React.KeyboardEvent) =>
                    selectConnectorTypeOnKeyPress(key, type)
                  }
                  className="bg-primary-clr text-white p-2 hover:bg-teriary-clr focus:bg-teriary-clr cursor-pointer"
                  key={id}
                  value={value}>
                  {type}
                </li>
              );
            })}
          {showDropdown && connectorType && (
            <Image
              className="hidden md:block absolute top-[3rem] -right-40 border"
              width={150}
              height={150}
              src={socketTypeImages[+connectorType]?.src}
              alt={socketTypeImages[+connectorType]?.socketType}
            />
          )}
        </ul>
      </div>
    </>
  );
}
