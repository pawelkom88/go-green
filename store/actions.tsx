import { AuthActions, FiltersActions } from "domain/types";

export const authActions: AuthActions = {
  login: "LOGIN",
  logout: "LOGOUT",
  authIsReady: "AUTH_IS_READY",
};

export const filtersActions: FiltersActions = {
  connectorType: "CONNECTOR_TYPE",
  maxResults: "MAX_RESULTS",
  distance: "DISTANCE",
  membership: "MEMBERSHIP",
};
