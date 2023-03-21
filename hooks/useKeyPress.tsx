import { useEffect, useState } from "react";

export default function useKeyPress(targetKey: string, condition: boolean) {
  const [keyPressed, setKeyPressed] = useState<boolean>(condition);

  function downHandler({ key }: any): void {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", downHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  }, []);

  return keyPressed;
}
