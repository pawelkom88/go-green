import { FilterContextActions, InitialFiltersState } from "domain/types";
import { filtersActions } from "./actions";

export default function filtersReducer(
  filters: InitialFiltersState,
  { type, payload = "" }: FilterContextActions
): InitialFiltersState {
  switch (type) {
    case filtersActions.membership:
      return { ...filters, membership: payload };

    case filtersActions.connectorType:
      return { ...filters, connectorType: payload as string };

    case filtersActions.maxResults:
      return { ...filters, maxResults: payload as string };

    case filtersActions.distance:
      return { ...filters, distance: payload };

    default:
      return filters;
  }
}
