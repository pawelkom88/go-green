import { MutableRefObject, useEffect, useRef } from "react";

export default function useClickOutside(callback: () => void ) {
  let activeDomNode: MutableRefObject<any> = useRef(null);

  useEffect(() => {
    function eventHandler(event: MouseEvent) {
      if (activeDomNode?.current == null) {
        return;
      }

      if (!activeDomNode?.current.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener("mousedown", eventHandler);

    return () => {
      document.removeEventListener("mousedown", eventHandler);
    };
  });

  return activeDomNode;
}
