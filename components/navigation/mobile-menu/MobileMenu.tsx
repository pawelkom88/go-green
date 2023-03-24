import Login from "@components/login/Login";
import Modal from "@components/modal/Modal";
import UserIcon from "@components/ui/icons/UserIcon";
import useToggle from "@hooks/useToggle";

export default function MobileMenu() {
  const { isShown, handleOnShow } = useToggle();

  const showLoginModal = isShown && (
    <Modal onModalClose={handleOnShow} size="w-full h-full md:h-1/2 flex-center">
      {isShown && <Login />}
    </Modal>
  );

  return (
    <>
      <div
        onClick={() => handleOnShow(true)}
        className="w-12 h-12 bg-primary-clr rounded-full lg:hidden fixed bottom-4 left-2 flex-center">
        <UserIcon fill="#f1b24a" />
      </div>
      {showLoginModal}
    </>
  );
}
