import { useAuthContext } from "@context/AuthContext";
import { auth } from "@lib/config";
import { Auth, User, UserCredential } from "firebase/auth";
import { useState } from "react";

export default function useAuth(
  userAction: (auth: Auth, email: string, password: string) => Promise<UserCredential>,
  action: string
) {
  const { dispatch } = useAuthContext();
  // error and loading state !!!
  const [user, setUser] = useState<null | User>(null);

  async function handleUser(email: string, password: string) {
    try {
      const userCredential = await userAction(auth, email, password);
      setUser(userCredential.user);
      dispatch({ type: action, payload: userCredential.user });
    } catch {
      // sort it out
      console.log("123");
    }
  }

  return { handleUser, user };
}
