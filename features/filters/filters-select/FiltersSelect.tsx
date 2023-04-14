import { useFilters } from "@context/FiltersContext";
import useClickOutside from "@hooks/useClickOutside";
import useToggle from "@hooks/useToggle";
import { filtersActions } from "@store/actions";
import { connectorTypes, socketTypeImages } from "domain/constants";
import Image from "next/image";
import { useState } from "react";

export default function FiltersSelect() {
  const { setFilters } = useFilters();
  const [connectorType, setConnectorType] = useState<string>("");
  const { isShown: showDropdown, handleOnShow: handleShowDropdown } = useToggle();

  const showSelectedConnectorType =
    connectorType && !showDropdown ? connectorType : "Connector type";

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

  function handleSelect(e: React.MouseEvent<HTMLElement>, type: string) {
    e.stopPropagation();
    setFilters({ type: filtersActions.connectorType, payload: type });
    handleShowDropdown(false);
  }

  let activeDomNode = useClickOutside(() => {
    handleShowDropdown(false);
  });

  return (
    <>
      <label className="sr-only" htmlFor="charging-point-type">
        Choose a type:
      </label>
      <div className="absolute top-[38%] w-full sm:w-1/2 z-50">
        <ul
          ref={activeDomNode}
          tabIndex={0}
          onKeyDown={showDropdown ? closeDropDownOnKeyPress : openDropDownOnKeyPress}
          onClick={() => handleShowDropdown(true)}
          className="relative w-full">
          <li className="bg-secondary-clr text-primary mt-4 p-2 text-center cursor-pointer">
            {showSelectedConnectorType}
          </li>
          {showDropdown &&
            connectorTypes.map(({ id, type, value }) => {
              return (
                <li
                  tabIndex={0}
                  onClick={e => handleSelect(e, type)}
                  onMouseEnter={() => setConnectorType(type)}
                  onMouseLeave={() => setConnectorType("")}
                  onFocus={() => setConnectorType(type)}
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
              src={socketTypeImages[connectorType]?.src}
              alt="Connector Type"
            />
          )}
        </ul>
      </div>
    </>
  );
}
