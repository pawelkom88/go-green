import Button from "@components/button/Button";
import Modal from "@components/modal/Modal";
import ProfileIcon from "@components/ui/icons/ProfileIcon";
import SignOutIcon from "@components/ui/icons/SignOutIcon";
import Spinner from "@components/ui/spinner/Spinner";
import Toast from "@components/ui/toast/Toast";
import UserProfile from "@features/user-profile/UserProfile";
import useLogout from "@hooks/useLogout";
import { LogOutMetrics } from "domain/types";
import { useState } from "react";
import LogOutMessagePopUp from "./LogOutMessagePopUp";

export default function UserMenuOptions() {
  const { logUserOut, loading, error } = useLogout();
  const [manageLogOut, setManageLogOut] = useState<LogOutMetrics>({
    openModal: false,
    showLogOutPopUpMessage: false,
  });

  function handleLogOut() {
    logUserOut();
  }

  const showUserProfile = manageLogOut.openModal && (
    <Modal
      size="w-full h-3/4"
      onModalClose={() => setManageLogOut({ ...manageLogOut, openModal: false })}>
      <UserProfile />
    </Modal>
  );

  const showLogOutWarningMessage = manageLogOut.showLogOutPopUpMessage && (
    <Modal
      size="w-full h-1/3"
      onModalClose={() =>
        setManageLogOut(manageLogOutState => ({
          ...manageLogOutState,
          showLogOutPopUpMessage: false,
        }))
      }>
      <LogOutMessagePopUp onHandleLogOut={handleLogOut} onManageLogOut={setManageLogOut} />
    </Modal>
  );



  return (
    <>
      {showLogOutWarningMessage}
      {loading ? (
        <Spinner />
      ) : (
        <ul className="p-4 w-full border-r bg-primary-clr absolute rounded left-0 shadow mt-12 sm:mt-16">
          <li className="flex w-full justify-between hover:text-secondary-clr cursor-pointer items-center">
            <Button
              onClick={() => setManageLogOut({ ...manageLogOut, openModal: true })}
              className="text-md flex">
              <ProfileIcon className="mr-[5px]" size={25} fill="none" />
              My Profile
            </Button>
          </li>
          <li className="flex w-full justify-between hover:text-secondary-clr  cursor-pointer items-center mt-2">
            <Button
              onClick={() => setManageLogOut({ ...manageLogOut, showLogOutPopUpMessage: true })}
              className="text-md flex">
              <SignOutIcon className="mr-[5px]" size={25} fill="none" />
              Sign out
            </Button>
          </li>
        </ul>
      )}
      {showUserProfile}
    </>
  );
}
