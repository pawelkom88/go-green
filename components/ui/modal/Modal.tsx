import React, { useState } from "react";
// import hadleKeyPress from "helpers/helpers";
import CloseBtnIcon from "../icons/CloseBtnIcon";
import Overlay from "@components/ui/modal/Overlay";
import FocusLock from "react-focus-lock";

type ModalTypes = {
  children?: React.ReactNode;
  onShowDetails?: (val: boolean) => void;
};

export default function Modal({ children, onShowDetails }: ModalTypes) {
  const [isOpen, setIsopen] = useState(true);

  function closeModal() {
    onShowDetails?.(false);
    setIsopen(false);
  }

  return (
    <>
      {isOpen && (
        <FocusLock>
          <Overlay onClose={closeModal}>
            <dialog
              onClick={e => e.stopPropagation()}
              className="sm:h-full md:h-[845px] overflow-y-auto rounded-lg bg-white shadow-xl sm:my-8 pt-8 sm:w-full sm:max-w-2xl text-lg md:text-xl"
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
