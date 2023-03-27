import LoginModal from "@components/login/login-modal/LoginModal";
import Modal from "@components/modal/Modal";
import UserIcon from "@components/ui/icons/UserIcon";
import { useAuthContext } from "@context/AuthContext";
import UserProfile from "@features/user-profile/UserProfile";
import useToggle from "@hooks/useToggle";

export default function MobileMenu() {
  const { user } = useAuthContext();
  const { isShown, handleOnShow } = useToggle();

  const showLoginModal = isShown && (
    <Modal onModalClose={handleOnShow} size="w-full h-full md:h-1/2 flex-center">
      {!user && <LoginModal />}
      {user && <UserProfile />}
    </Modal>
  );

  return (
    <>
      <div
        onClick={() => handleOnShow(true)}
        className="w-12 h-12 bg-primary-clr rounded-full lg:hidden fixed bottom-4 left-2 flex-center">
        <UserIcon size={50} fill="#f1b24a" />
      </div>
      {showLoginModal}
    </>
  );
}
