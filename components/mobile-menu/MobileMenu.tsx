import { useState } from "react";
import UserIcon from "@components/ui/icons/UserIcon";
import Modal from "@components/ui/modal/Modal";
import Login from "@features/login/Login";

const isLoggedIn = false;

export default function MobileMenu() {
  const [openLoginMenu, setOpenLoginMenu] = useState(false);

  return (
    <>
      <footer
        onClick={() => setOpenLoginMenu(true)}
        className="lg:hidden fixed bottom-4 left-2 min-h-[2rem] flex-center z-10">
        <UserIcon size={50} fill="#164a41" />
      </footer>
      {openLoginMenu && (
        <Modal callback={setOpenLoginMenu} size="w-full h-full md:h-1/2 flex-center">
          {isLoggedIn ? <p>asd</p> : <Login />}
        </Modal>
      )}
    </>
  );
}
