import { useState } from "react";
import useAuthContext from "@hooks/useAuthContext";
import { auth } from "@lib/config";

export default function useAuth(method, action) {
  const { dispatch } = useAuthContext();
  const [userData, setUserData] = useState(null);

  async function handleUser(email, password) {
    try {
      const userCredential = await method(auth, email, password);
      setUserData(userCredential.user);
      dispatch({ type: action, payload: userCredential.user });
    } catch {
      console.log("123");
    }
  }

  return { handleUser, userData };
}
