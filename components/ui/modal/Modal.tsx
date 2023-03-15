import React, { useState } from "react";
// import hadleKeyPress from "helpers/helpers";
import CloseBtnIcon from "../icons/CloseBtnIcon";
import Overlay from "@components/ui/modal/Overlay";
import Button from "@components/ui/button/Button";
import FocusLock from "react-focus-lock";
import { Props } from "types/types";

interface ModalTypes extends Props {
  callback?: (val: boolean) => void;
  size: string;
}

export default function Modal({ children, callback, size }: ModalTypes) {
  const [isOpen, setIsopen] = useState(true);

  function closeModal() {
    callback?.(false);
    setIsopen(false);
  }

  return (
    <>
      {isOpen && (
        <FocusLock>
          <Overlay onClose={closeModal}>
            <dialog
              onClick={e => e.stopPropagation()}
              className={`${
                isOpen ? "animate-start" : "animate-end"
              } ${size} overflow-y-auto bg-white md:max-w-3xl text-lg md:text-xl`}
              open>
              <Button className="absolute top-4 right-4" onClick={closeModal}>
                <CloseBtnIcon size={25} />
              </Button>
              {children}
            </dialog>
          </Overlay>
        </FocusLock>
      )}
    </>
  );
}
