import Button from "@components/button/Button";
import LogOutMessagePopUp from "@components/logout-message/LogOutMessagePopUp";
import Modal from "@components/modal/Modal";
import UserIcon from "@components/ui/icons/UserIcon";
import { useAuthContext } from "@context/AuthContext";
import useLogout from "@hooks/useLogout";
import usePopout from "@hooks/usePopout";
import { btnUserProfileStyles, commentBtnStyles } from "domain/constants";
import Image from "next/image";
import Link from "next/link";
import FavouritePOI from "./FavouritePOI";

export default function UserProfile() {
  const { logUserOut } = useLogout();
  const { manageLogOut, setManageLogOut } = usePopout();
  const { user, userName } = useAuthContext();
  const userProfilePhoto = user?.photoURL ? (
    <Image
      width={24}
      height={24}
      // change to user photo while logged in and imported
      src={user.photoURL}
      className="w-24 h-24 mb-3 rounded-full shadow-lg"
      alt="user photo"
    />
  ) : (
    <UserIcon size={100} fill="#f1b24a" />
  );

  const showLogOutWarningMessage = manageLogOut.showLogOutPopUpMessage && (
    <Modal
      size="w-[90%] h-1/3"
      onModalClose={() =>
        setManageLogOut(manageLogOutState => ({
          ...manageLogOutState,
          showLogOutPopUpMessage: false,
        }))
      }>
      <LogOutMessagePopUp onHandleLogOut={logUserOut} onManageLogOut={setManageLogOut} />
    </Modal>
  );

  function handleCheckbox() {
    console.log("a");
  }

  return (
    <>
      <div className="w-full flex flex-col items-center pb-10">
        {userProfilePhoto}
        <h5 className="mb-1 text-xl font-medium text-gray-900">Hi {userName} !</h5>
        <div className="flex mt-4 space-x-3 md:mt-6">
          <Link href="/settings" className={`${btnUserProfileStyles} hover:text-white`}>
            Account settings
          </Link>
          <Button
            onClick={() => setManageLogOut({ ...manageLogOut, showLogOutPopUpMessage: true })}
            className={`${commentBtnStyles} lg:hidden`}>
            Log out
          </Button>
        </div>
        {/* // if exists show them */}
        <FavouritePOI />
      </div>
      {showLogOutWarningMessage}
    </>
  );
}
