import useAuthContext from "@hooks/useAuthContext";
import { ChildrenType } from "types/types";

interface UserContainer extends ChildrenType {
  action: string;
}

export default function UserContainer({ children, action }: UserContainer) {
  // const { user } = useAuthContext();
  let user = true

  if (!user) {
    return (
      <h2 className="text-md lg:text-2xl font-bold text-dark-text-clr text-center">{action}</h2>
    );
  }

  return <>{children}</>;
}
