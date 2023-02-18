import { User as FirebaseUser } from "firebase/auth";
import { actionObj } from "./actions";

type ActionType = {
  type: string;
  payload: FirebaseUser;
};

type ReducerStateType = {
  user: null | FirebaseUser;
  authIsReady: boolean;
};

export default function authReducer(state: ReducerStateType, action: ActionType) {
  switch (action.type) {
    case actionObj.login:
      return { ...state, user: action.payload };

    case actionObj.logout:
      return { ...state, user: null };

    case actionObj.authIsReady:
      return { user: action.payload, authIsReady: true };

    default:
      return state;
  }
}
