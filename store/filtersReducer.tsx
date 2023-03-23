import { Actions, InitialFilters } from "domain/types";
import { filtersActions } from "./actions";
import { initialFilters } from "domain/constants";

export default function filtersReducer(
  filters: InitialFilters,
  { type, payload = "" }: Actions
): InitialFilters {
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
