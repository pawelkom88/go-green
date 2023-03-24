import Button from "@components/button/Button";
import Overlay from "@components/modal/Overlay";
import CloseBtnIcon from "@components/ui/icons/CloseBtnIcon";
import { ModalTypes } from "domain/types";
import { useState } from "react";
import FocusLock from "react-focus-lock";

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
