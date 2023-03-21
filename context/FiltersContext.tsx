import { createContext, useReducer } from "react";
import filtersReducer from "@store/authReducer";
import { initialFilters } from "domain/constants";
import { Props } from "domain/types";

export const FiltersContext = createContext(null);

export default function FiltersContextProvider({ children }: Props) {
  const [filters, dispatch] = useReducer(filtersReducer, initialFilters);

  return (
    <FiltersContext.Provider value={{ ...filters, dispatch }}>{children}</FiltersContext.Provider>
  );
}
