import Spinner from "@components/ui/spinner/Spinner";
import { Props } from "domain/types";

interface IsLoadingProps extends Props {
  isLoading: boolean;
}

export default function IsLoading({ isLoading, children }: IsLoadingProps) {
  if (isLoading) return <Spinner />;
  return <>{children}</>;
}
