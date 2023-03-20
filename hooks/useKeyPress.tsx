import { useEffect, useState } from "react";

export default function useKeyPress(targetKey: string) {
  const [keyPressed, setKeyPressed] = useState<boolean>(false);

  function downHandler({ key }: any): void {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  //   function upHandler({ key }: any): void {
  //     if (key === targetKey) {
  //       setKeyPressed(false);
  //     }
  //   }
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    // window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      //   window.removeEventListener("keyup", upHandler);
    };
  }, []);

  return keyPressed;
}
