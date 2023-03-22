import { createContext, useContext, useReducer } from "react";
import filtersReducer from "@store/filtersReducer";
import { initialFilters } from "domain/constants";
import { Props, InitialFilters, SetFilters } from "domain/types";

interface FiltersContext {
  setFilters: SetFilters;
  filters: InitialFilters;
}

export const FiltersCtx = createContext<FiltersContext | null>(null);

export default function FiltersContext({ children }: Props) {
  const [filters, setFilters] = useReducer(filtersReducer, initialFilters);

  return <FiltersCtx.Provider value={{ filters, setFilters }}>{children}</FiltersCtx.Provider>;
}

export function useFilters() {
  const filters = useContext(FiltersCtx);
  if (filters == null) {
    throw new Error("useFilters must be used within a UserLocationContextProvider");
  }

  return filters;
}
