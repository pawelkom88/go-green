import React, { useState } from "react";
import CloseBtnIcon from "../icons/CloseBtnIcon";
import Overlay from "@components/ui/modal/Overlay";

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
        <Overlay onClose={closeModal}>
          <dialog
            className="min-h-[20vh] overflow-hidden rounded-lg bg-white shadow-xl sm:my-8 sm:w-full sm:max-w-lg text-center text-lg md:text-xl"
            open>
            <CloseBtnIcon onClose={closeModal} className="absolute top-4 right-4" />
            <p className="mt-14">{children}</p>
          </dialog>
        </Overlay>
      )}
    </>
  );
}
