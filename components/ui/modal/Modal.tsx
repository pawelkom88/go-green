import React, { useState, useEffect } from "react";
import CloseBtnIcon from "../icons/CloseBtnIcon";
import Overlay from "@components/ui/modal/Overlay";

type ModalTypes = {
  info: string;
};

export default function Modal({ info }: ModalTypes) {
  const [modalClose, setModalClose] = useState(false);

  function closeModal() {
    setModalClose(true);
  }

  /*
  set modal state to default after every change in onError state
*/
  useEffect(() => setModalClose(false), [info]);

  return (
    <>
      {!modalClose && (
        <Overlay onClose={closeModal}>
          <dialog
            className="min-h-[20vh] overflow-hidden rounded-lg bg-white shadow-xl sm:my-8 sm:w-full sm:max-w-lg text-center text-lg md:text-xl"
            open>
            <CloseBtnIcon onClose={closeModal} className="absolute top-4 right-4" />
            <p className="mt-14">{info}</p>
          </dialog>
        </Overlay>
      )}
    </>
  );
}
