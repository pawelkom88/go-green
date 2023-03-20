import { InitialFilters } from "domain/types";
import { FiltersActions } from "./actions";

interface Actions {
  type: string;
  //change
  payload: string;
}

export default function filtersReducer(filters: InitialFilters, action: Actions): InitialFilters {
  switch (action.type) {
    case FiltersActions.connectorType:
      return { ...filters, connectorType: action.payload };

    case FiltersActions.maxResults:
      return { ...filters, maxResults: action.payload };

    case FiltersActions.distance:
      return { ...filters, distance: action.payload };

    default:
      return filters;
  }
}
