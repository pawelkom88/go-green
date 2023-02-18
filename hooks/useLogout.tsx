import useAuthContext from "./useAuthContext";
import { auth } from "@lib/config";
import { signOut } from "firebase/auth";
import { actionObj } from "@store/actions";

export default function useLogout() {
  const { dispatch } = useAuthContext();
  function logUserOut() {
    try {
      signOut(auth).then(() => dispatch({ type: actionObj.logout }));
    } catch (error: any) {
      console.log(`Something went wrong : ${error.message}`);
    }
  }

  return { logUserOut };
}
