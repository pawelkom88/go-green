import useToggle from "@hooks/useToggle";
import Button from "@components/button/Button";
import Modal from "@components/modal/Modal";
import Login from "@components/login/Login";
import { signInBtnStyles } from "domain/constants";

export default function LoginModal() {
  const { isShown, handleOnShow } = useToggle();

  const showLoginModal = isShown && (
    <Modal size="w-full h-2/3 flex-center" onModalClose={() => handleOnShow(false)}>
      <Login />
    </Modal>
  );

  return (
    <>
      <Button
        onClick={() => handleOnShow(true)}
        className={`${signInBtnStyles} hover:bg-white hover:text-primary-clr mr-4 ml-auto hidden lg:block`}>
        LOG IN
      </Button>
      {showLoginModal}
    </>
  );
}
