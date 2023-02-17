import { useState } from "react";
import UserIcon from "@components/ui/icons/UserIcon";
import Modal from "@components/ui/modal/Modal";
import Login from "@components/login/Login";

const isLoggedIn = false;

export default function MobileMenu() {
  const [openLoginMenu, setOpenLoginMenu] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpenLoginMenu(true)}
        className="w-12 h-12 bg-primary-clr rounded-full lg:hidden fixed bottom-4 left-2 flex-center z-10">
        <UserIcon fill="#f1b24a" />
      </div>
      {openLoginMenu && (
        <Modal callback={setOpenLoginMenu} size="w-full h-full md:h-1/2 flex-center">
          {isLoggedIn ? <p>asd</p> : <Login />}
        </Modal>
      )}
    </>
  );
}
