import UserCredentials from "@components/login/login-modal/UserCredentials";
import Modal from "@components/modal/Modal";
import UserIcon from "@components/ui/icons/UserIcon";
import UserContainer from "@components/user-container/UserContainer";
import { useAuthContext } from "@context/AuthContext";
import UserProfile from "@features/user-profile/UserProfile";
import { MobileUserMenuProps } from "domain/types";

export default function MobileUserMenu({
  showUserCredentialModal,
  onHandleShowUserCredentialModal,
}: MobileUserMenuProps) {
  const { user } = useAuthContext();

  const showUserMenu = showUserCredentialModal && (
    <Modal
      onModalClose={() => onHandleShowUserCredentialModal(false)}
      size="w-full h-full md:h-3/4 flex-center">
      <UserContainer
        fallback={
          <UserCredentials onHandleShowUserCredentialModal={onHandleShowUserCredentialModal} />
        }>
        <UserProfile />
      </UserContainer>
    </Modal>
  );

  return (
    <>
      <div
        tabIndex={0}
        role="navigation"
        aria-label="Click to open mobile menu"
        onClick={() => onHandleShowUserCredentialModal(true)}
        className="w-12 h-12 bg-primary-clr rounded-full lg:hidden fixed bottom-4 left-2 flex-center z-30">
        <UserIcon size={50} fill="#f1b24a" />
      </div>
      {showUserMenu}
    </>
  );
}
