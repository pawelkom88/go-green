import { createContext, useReducer, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { User as FirebaseUser } from "firebase/auth";
import { auth } from "@lib/config";
import { Props, AuthContextModel } from "domain/types";
import { actionObj } from "@store/actions";
import authReducer from "@store/authReducer";

export const AuthContext = createContext<AuthContextModel>({} as AuthContextModel);

export default function AuthContextProvider({ children }: Props) {
  const [state, dispatch] = useReducer(authReducer, { user: null, authIsReady: false });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      dispatch({ type: actionObj.authIsReady, payload: user as FirebaseUser });
    });

    return () => unsubscribe();
  }, []);

  return <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>;
}
