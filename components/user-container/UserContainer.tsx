import { useAuthContext } from "@context/AuthContext";
import { Props } from "domain/types";

interface UserContainer extends Props {
  action: string;
}

export default function UserContainer({ children, action }: UserContainer) {
  const { user } = useAuthContext();

  if (!user) {
    return (
      <h2 className="text-md lg:text-xl font-bold text-dark-text-clr text-center mt-12">{action}</h2>
    );
  }

  return <>{children}</>;
}
