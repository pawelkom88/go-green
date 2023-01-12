import { useState } from "react";
import Button from "@components/ui/button/Button";
import ProfileIcon from "@components/ui/icons/ProfileIcon";
import SignOutIcon from "@components/ui/icons/SignOutIcon";
import Modal from "@components/ui/modal/Modal";

export default function UserMenuOptions() {
  const [openUserProfile, setOpenUserProfile] = useState(false);

  function signOut() {
    console.log("asd");
  }

  return (
    <>
      <ul className="p-4 w-full border-r bg-primary-clr absolute rounded left-0 shadow mt-12 sm:mt-16">
        <li className="flex w-full justify-between hover:text-secondary-clr cursor-pointer items-center">
          <Button onClick={() => setOpenUserProfile(true)} className="text-md flex">
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
      {openUserProfile && (
        <Modal size="w-full h-3/4" callback={() => setOpenUserProfile(false)}>
          <p>asd</p>
        </Modal>
      )}
    </>
  );
}
