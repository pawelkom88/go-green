import { useAuthContext } from "@context/AuthContext";
import { handleAuthError } from "@helpers/helpers";
import { auth } from "@lib/config";
import { AuthError } from "domain/types";
import { FirebaseError } from "firebase/app";
import { Auth, User, UserCredential } from "firebase/auth";
import { useState } from "react";

const defaultAuthErrorState: AuthError = { occured: true, message: "" };

export default function useAuth(
  userAction: (auth: Auth, email: string, password: string) => Promise<UserCredential>,
  action: string
) {
  const { dispatch } = useAuthContext();
  const [user, setUser] = useState<null | User>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(defaultAuthErrorState);

  async function handleUser(email: string, password: string) {
    setLoading(true);
    setError({ occured: false, message: "" });

    try {
      const userCredential = await userAction(auth, email, password);
      setUser(userCredential.user);
      dispatch({ type: action, payload: userCredential.user });
      setLoading(false);
      setError({ occured: false, message: "" });
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        setError({ occured: true, message: handleAuthError(error) });
        setLoading(false);
      }
    }
  }

  return { handleUser, user, loading, error };
}
