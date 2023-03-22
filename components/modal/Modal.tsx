import React, { useState } from "react";
import CloseBtnIcon from "../ui/icons/CloseBtnIcon";
import Overlay from "@components/modal/Overlay";
import Button from "@components/button/Button";
import FocusLock from "react-focus-lock";
import { ModalTypes } from "domain/types";

export default function Modal({ children, onModalClose, size }: ModalTypes) {
  const [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    onModalClose?.(false);
    setIsOpen(false);
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
              <Button onClick={closeModal}>
                <CloseBtnIcon size={25} className="absolute top-4 right-4" />
              </Button>
              {children}
            </dialog>
          </Overlay>
        </FocusLock>
      )}
    </>
  );
}
