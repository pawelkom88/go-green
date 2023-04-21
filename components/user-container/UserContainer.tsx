import { useAuthContext } from "@context/AuthContext";
import { Props } from "domain/types";

interface UserContainer extends Props {
  fallback: JSX.Element;
}

export default function UserContainer({ children, fallback }: UserContainer) {
  const { user } = useAuthContext();

  if (!user) return fallback;

  return <>{children}</>;
}
