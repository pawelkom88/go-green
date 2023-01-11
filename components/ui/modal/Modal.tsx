import React, { useState } from "react";
// import hadleKeyPress from "helpers/helpers";
import CloseBtnIcon from "../icons/CloseBtnIcon";
import Overlay from "@components/ui/modal/Overlay";
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
        <FocusLock>
          <Overlay onClose={closeModal}>
            <dialog
              onClick={e => e.stopPropagation()}
              className={`${size} overflow-y-auto lg:rounded-lg bg-white shadow-xl sm:my-8 pt-8 md:max-w-3xl text-lg md:text-xl`}
              open>
              <CloseBtnIcon onClose={closeModal} className="absolute top-4 right-4" />
              {children}
            </dialog>
          </Overlay>
        </FocusLock>
      )}
    </>
  );
}
