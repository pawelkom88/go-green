import React, { useState } from "react";
// import hadleKeyPress from "helpers/helpers";
import CloseBtnIcon from "../icons/CloseBtnIcon";
import Overlay from "@components/ui/modal/Overlay";
import Button from "@components/ui/button/Button";
import FocusLock from "react-focus-lock";

type ModalTypes = {
  children?: React.ReactNode;
  callback?: (val: boolean) => void;
  size: string;
};

export default function Modal({ children, callback, size }: ModalTypes) {
  const [isOpen, setIsopen] = useState(true);

  function closeModal() {
    callback?.(false);
    setIsopen(false);
  }

  return (
    <>
      {isOpen && (
        <Overlay onClose={closeModal}>
          <FocusLock>
            <dialog
              onClick={e => e.stopPropagation()}
              className={`${
                isOpen ? "animate-start" : "animate-end"
              } ${size} overflow-y-auto bg-white md:max-w-3xl text-lg md:text-xl md:mt-12`}
              open>
              <Button onClick={closeModal}>
                <CloseBtnIcon size={25} className="absolute top-4 right-4" />
              </Button>
              {children}
            </dialog>
          </FocusLock>
        </Overlay>
      )}
    </>
  );
}
