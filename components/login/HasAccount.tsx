import Button from "@components/button/Button";
import { HasAccountProps } from "domain/types";

export default function HasAccount({ children, action, onLogin }: HasAccountProps) {
  return (
    <p className="text-center text-sm sm:px-6 dark:text-gray-600">
      {children}
      <Button onClick={onLogin} className="underline dark:text-gray-600 ml-2">
        {action}
      </Button>
    </p>
  );
}
