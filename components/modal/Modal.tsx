import Button from "@components/button/Button";
import Overlay from "@components/modal/Overlay";
import CloseBtnIcon from "@components/ui/icons/CloseBtnIcon";
import useKeyPress from "@hooks/useKeyPress";
import useToggle from "@hooks/useToggle";
import { ModalTypes } from "domain/types";
import { useEffect, useState } from "react";
import FocusLock from "react-focus-lock";

export default function Modal({ children, onModalClose, size }: ModalTypes) {
  const keyPressed = useKeyPress("Escape");
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (keyPressed) closeModal();
  }, [keyPressed]);

  function closeModal() {
    onModalClose?.(false);
    setIsOpen(false);
  }

  return (
    <>
      {isOpen && (
        <FocusLock>
          <Overlay blur="" onClose={closeModal}>
            <dialog
              onClick={e => e.stopPropagation()}
              className={`${size} overflow-y-auto bg-white md:max-w-3xl text-lg md:text-xl`}
              open>
              <Button aria="Close Modal" onClick={closeModal}>
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
