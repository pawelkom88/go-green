import { auth } from "@lib/config";
import { authActions } from "@store/actions";
import authReducer from "@store/authReducer";
import { AuthContextModel, Props } from "domain/types";
import { onAuthStateChanged, User as FirebaseUser } from "firebase/auth";
import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext<AuthContextModel>({} as AuthContextModel);

export default function AuthContextProvider({ children }: Props) {
  const [state, dispatch] = useReducer(authReducer, { user: null, authIsReady: false });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      dispatch({ type: authActions.authIsReady, payload: user as FirebaseUser });
    });

    return () => unsubscribe();
  }, []);

  return <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>;
}
