import { createContext, useReducer, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@lib/config";
import authReducer from "@store/authReducer";
import { actionObj } from "@store/actions";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, { user: null, authIsReady: false });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      dispatch({ type: actionObj.authIsReady, payload: user });
    });

    return () => unsubscribe();
  }, []);

  return <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>;
}
