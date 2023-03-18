import Button from "@components/button/Button";
import ProfileIcon from "@components/ui/icons/ProfileIcon";
import SignOutIcon from "@components/ui/icons/SignOutIcon";
import Modal from "@components/modal/Modal";
import UserProfile from "@features/user-profile/UserProfile";
import useToggle from "@hooks/useToggle";

export default function UserMenuOptions() {
  const { isShown, handleOnShow } = useToggle();

  const showUserProfile = isShown && (
    <Modal size="w-full h-3/4" onModalClose={() => handleOnShow(false)}>
      <UserProfile />
    </Modal>
  );

  function signOut() {
    console.log("asd");
  }

  return (
    <>
      <ul className="p-4 w-full border-r bg-primary-clr absolute rounded left-0 shadow mt-12 sm:mt-16">
        <li className="flex w-full justify-between hover:text-secondary-clr cursor-pointer items-center">
          <Button onClick={() => handleOnShow(true)} className="text-md flex">
            <ProfileIcon className="mr-[5px]" size={25} fill="none" />
            My Profile
          </Button>
        </li>
        <li className="flex w-full justify-between hover:text-secondary-clr  cursor-pointer items-center mt-2">
          <Button onClick={signOut} className="text-md flex">
            <SignOutIcon className="mr-[5px]" size={25} fill="none" />
            Sign out
          </Button>
        </li>
      </ul>
      {showUserProfile}
    </>
  );
}
