import { useState } from "react";

import Button from "@components/ui/button/Button";
import Modal from "@components/ui/modal/Modal";

import Login from "@components/login/Login";
import { signInBtnStyles } from "@helpers/helpers";

export default function LoginModal() {
  const [isLoggedIn, setIsLoggedIn] = useState<null | boolean>(false);

  return (
    <>
      <Button
        onClick={() => setIsLoggedIn(true)}
        className={`${signInBtnStyles} hover:bg-white hover:text-primary-clr mr-4 ml-auto hidden lg:block`}>
        LOG IN
      </Button>
      {isLoggedIn && (
        <Modal size="w-full h-2/3 flex-center" callback={() => setIsLoggedIn(false)}>
          <Login />
        </Modal>
      )}
    </>
  );
}
