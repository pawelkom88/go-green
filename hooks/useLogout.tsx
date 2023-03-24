import { auth } from "@lib/config";
import { authActions } from "@store/actions";
import { signOut } from "firebase/auth";
import useAuthContext from "./useAuthContext";

export default function useLogout() {
  const { dispatch } = useAuthContext();

  function logUserOut() {
    try {
      signOut(auth).then(() => dispatch({ type: authActions.logout }));
    } catch (error: unknown) {
      console.log(`Something went wrong : ${(error as Error).message}`);
    }
  }

  return { logUserOut };
}
