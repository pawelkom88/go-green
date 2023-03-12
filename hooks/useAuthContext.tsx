import { useContext } from "react";
import { AuthContext } from "@context/AuthContext";
import { AuthContextModel } from "types/types";

export default function useAuthContext() {
  const context: AuthContextModel = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be inside an AuthContextProvider");
  }

  return context;
}
