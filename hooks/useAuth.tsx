import { useState } from "react";
import useAuthContext from "@hooks/useAuthContext";
import { auth } from "@lib/config";
import { Auth, User, UserCredential } from "firebase/auth";

export default function useAuth(
  method: (auth: Auth, email: string, password: string) => Promise<UserCredential>,
  action: string
) {
  const { dispatch } = useAuthContext();
  const [userData, setUserData] = useState<null | User>(null);

  async function handleUser(email: string, password: string) {
    try {
      const userCredential = await method(auth, email, password);
      setUserData(userCredential.user);
      dispatch({ type: action, payload: userCredential.user });
    } catch {
      // sort it out
      console.log("123");
    }
  }

  return { handleUser, userData };
}
