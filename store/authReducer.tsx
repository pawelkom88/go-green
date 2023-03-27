import { AuthContextActions } from "domain/types";
import { User as FirebaseUser } from "firebase/auth";
import { authActions } from "./actions";

interface InitialAuthState {
  user: null | FirebaseUser;
  authIsReady: boolean;
}

export default function authReducer(
  state: InitialAuthState,
  { type, payload = null }: AuthContextActions
): InitialAuthState {
  switch (type) {
    case authActions.login:
      return { ...state, user: payload };

    case authActions.logout:
      return { ...state, user: null };

    case authActions.authIsReady:
      return { user: payload, authIsReady: true };

    default:
      return state;
  }
}
