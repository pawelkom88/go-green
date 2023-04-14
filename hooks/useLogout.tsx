import { useAuthContext } from "@context/AuthContext";
import { handleAuthError } from "@helpers/helpers";
import { auth } from "@lib/config";
import { authActions } from "@store/actions";
import { AuthErrorMessage } from "domain/types";
import { FirebaseError } from "firebase/app";
import { signOut } from "firebase/auth";
import { useState } from "react";

export default function useLogout() {
  const { dispatch } = useAuthContext();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | AuthErrorMessage>(null);

  function logUserOut() {
    setLoading(true);
    setError(null);
    try {
      signOut(auth).then(() => dispatch({ type: authActions.logout }));
      setLoading(false);
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        setError(handleAuthError(error));
        setLoading(false);
      }
    }
  }

  return { logUserOut, loading, error };
}
