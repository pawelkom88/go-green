import { handleAuthError } from "@helpers/helpers";
import { defaultAuthErrorState } from "domain/constants";
import { FirebaseError } from "firebase/app";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";

export default function usePasswordReset(userEmail: string) {
  const auth = getAuth();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(defaultAuthErrorState);

  async function handlePasswordReset() {
    setLoading(true);
    setError({ occured: false, message: "" });

    try {
      await sendPasswordResetEmail(auth, userEmail).then(() => {
        // display toast Password reset email sent!

        // dispatch({ type: action, payload: userCredential.user });
        setError({ occured: false, message: "" });
      });
      setLoading(false);
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        setError({ occured: true, message: handleAuthError(error) });
        setLoading(false);
      }
    }
  }

  return { handlePasswordReset, loading, error };
}
