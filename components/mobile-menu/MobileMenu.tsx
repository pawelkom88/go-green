import { useState } from "react";
import UserIcon from "@components/ui/icons/UserIcon";
import Modal from "@components/ui/modal/Modal";
import Login from "@components/login/Login";
import useToggle from "@hooks/useToggle";

export default function MobileMenu() {
  const { isShown, handleOnShow } = useToggle();

  return (
    <>
      <div
        onClick={() => handleOnShow(true)}
        className="w-12 h-12 bg-primary-clr rounded-full lg:hidden fixed bottom-4 left-2 flex-center z-10">
        <UserIcon fill="#f1b24a" />
      </div>
      {isShown && (
        <Modal callback={handleOnShow} size="w-full h-full md:h-1/2 flex-center">
          {isShown && <Login />}
        </Modal>
      )}
    </>
  );
}
