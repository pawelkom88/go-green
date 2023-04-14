import { useAuthContext } from "@context/AuthContext";
import { handleAuthError } from "@helpers/helpers";
import { auth } from "@lib/config";
import { AuthErrorMessage } from "domain/types";
import { FirebaseError } from "firebase/app";
import { Auth, User, UserCredential } from "firebase/auth";
import { useState } from "react";

export default function useAuth(
  userAction: (auth: Auth, email: string, password: string) => Promise<UserCredential>,
  action: string
) {
  const { dispatch } = useAuthContext();
  const [user, setUser] = useState<null | User>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | AuthErrorMessage>(null);

  async function handleUser(email: string, password: string) {
    setLoading(true);
    setError(null);

    try {
      const userCredential = await userAction(auth, email, password);
      setUser(userCredential.user);
      dispatch({ type: action, payload: userCredential.user });
      setLoading(false);
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        setError(handleAuthError(error));
        setLoading(false);
      }
    }
  }

  return { handleUser, user, loading, error };
}
