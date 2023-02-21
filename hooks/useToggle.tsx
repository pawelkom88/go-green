import { useState } from "react";

export default function useToggle() {
  const [isShown, setIsShown] = useState<boolean>(false);

  function handleOnShow(condition: boolean) {
    if (condition === true) {
      setIsShown(condition);
    } else {
      setIsShown(false);
    }
  }

  return { isShown, handleOnShow };
}
