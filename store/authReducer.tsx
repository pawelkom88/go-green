import { User as FirebaseUser } from "firebase/auth";
import { authActions } from "./actions";

interface Actions {
  type: string;
  payload: FirebaseUser;
}

interface ReducerState {
  user: null | FirebaseUser;
  authIsReady: boolean;
}

export default function authReducer(state: ReducerState, action: Actions) {
  switch (action.type) {
    case authActions.login:
      return { ...state, user: action.payload };

    case authActions.logout:
      return { ...state, user: null };

    case authActions.authIsReady:
      return { user: action.payload, authIsReady: true };

    default:
      return state;
  }
}
