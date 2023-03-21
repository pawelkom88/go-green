import { Actions, InitialFilters } from "domain/types";
import { filtersActions } from "./actions";
import { initialFilters } from "domain/constants";

export default function filtersReducer(
  filters: InitialFilters,
  { type, payload = "" }: Actions
): InitialFilters {
  switch (type) {
    case filtersActions.connectorType:
      return { ...filters, connectorType: payload };

    case filtersActions.maxResults:
      return { ...filters, maxResults: payload };

    case filtersActions.distance:
      return { ...filters, distance: payload };

    case filtersActions.reset:
      return initialFilters;

    default:
      return filters;
  }
}
