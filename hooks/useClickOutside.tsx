import { MutableRefObject, useEffect, useRef } from "react";

export default function useClickOutside(callback: () => void) {
  let domNode: MutableRefObject<any> = useRef(null);
 
  useEffect(() => {
    function eventHandler(event: MouseEvent) {
      if (domNode?.current == null) {
        return;
      }

      if (!domNode?.current.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener("mousedown", eventHandler);

    return () => {
      document.removeEventListener("mousedown", eventHandler);
    };
  });

  return domNode;
}
