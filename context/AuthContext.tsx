import { splitStringBySymbol } from "@helpers/helpers";
import { auth } from "@lib/config";
import { authActions } from "@store/actions";
import authReducer from "@store/authReducer";
import { AuthContextModel, Props } from "domain/types";
import { onAuthStateChanged, User as FirebaseUser } from "firebase/auth";
import { createContext, useContext, useEffect, useReducer } from "react";

export const AuthContext = createContext<AuthContextModel>({} as AuthContextModel);

export default function AuthContextProvider({ children }: Props) {
  const [state, dispatch] = useReducer(authReducer, { user: null, authIsReady: false });

  const userName = (state.user && splitStringBySymbol(state.user?.email, "@")) || "";

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      dispatch({ type: authActions.authIsReady, payload: user as FirebaseUser });
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, userName, dispatch }}>{children}</AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context: AuthContextModel = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be inside an AuthContextProvider");
  }

  return context;
}
