import { Dispatch, useState } from "react";
import useKeyPress from "@hooks/useKeyPress";
import useClickOutside from "@hooks/useClickOutside";
import Image from "next/image";
import { connectorTypes, socketTypeImages } from "domain/constants";
import useToggle from "@hooks/useToggle";
import { FiltersActions } from "@store/actions";

export default function FiltersSelect({ setFilters }: { setFilters: Dispatch<any> }) {
  const [connectorType, setConnectorType] = useState<string | null>(null);
  const { isShown: showDropdown, handleOnShow: handleShowDropdown } = useToggle();

  const showDropdownOnKeyPress = useKeyPress("Enter");
  const closeDropdownOnKeyPress = useKeyPress("Escape");

  function openDropDownOnKeyPress() {
    if (showDropdownOnKeyPress) handleShowDropdown(true);
  }

  function closeDropDownOnKeyPress() {
    if (closeDropdownOnKeyPress) handleShowDropdown(false);
  }

  function closeDropdownAfterSelectingConnectorType(value: string) {
    if (showDropdownOnKeyPress) {
      setConnectorType(value);
    }
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
      <div className="w-full sm:w-1/3">
        <ul
          ref={domNode}
          tabIndex={0}
          onKeyDown={showDropdown ? closeDropDownOnKeyPress : openDropDownOnKeyPress}
          onClick={() => handleShowDropdown(!showDropdown)}
          className="relative w-full h-[210px]">
          <li className="bg-secondary-clr text-primary mt-4 p-2 text-center cursor-pointer">
            Connector type
          </li>
          {showDropdown &&
            connectorTypes.map(({ id, type, value }) => {
              return (
                <li
                  tabIndex={0}
                  onClick={() =>
                    setFilters({ type: FiltersActions.connectorType, payload: type })
                  }
                  // onClick={() => setConnectorType(value)}
                  onMouseEnter={() => setConnectorType(value)}
                  onMouseLeave={() => setConnectorType(null)}
                  onFocus={() => setConnectorType(value)}
                  onKeyDown={() => closeDropdownAfterSelectingConnectorType(value)}
                  className="bg-primary-clr text-white p-2 hover:bg-teriary-clr focus:bg-teriary-clr cursor-pointer"
                  key={id}
                  value={value}>
                  {type}
                </li>
              );
            })}
          {showDropdown && connectorType && (
            <Image
              className="hidden md:block absolute top-[1.8rem] -right-40 border"
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
