import { useState } from "react";
import UserMenuOptions from "@components/user-menu-options/UserMenuOptions";
import Modal from "@components/ui/modal/Modal";
import ChevronIcon from "@components/ui/icons/ChevronIcon";
import Avatar from "@components/ui/avatar/Avatar";
import Button from "@components/ui/button/Button";
import Login from "@features/login/Login";

export default function UserMenu() {
  const [showProfileMenu, setShowProfileMenu] = useState<boolean>(false);

  // dummy state - change name on more descriptive
  const [isLoggedIn, setIsLoggedIn] = useState<null | boolean>(null);

  function toggleProfileMenu() {
    setShowProfileMenu(!showProfileMenu);
  }

  function login() {
    setIsLoggedIn(false);
  }

  return (
    <>
      <div className="hidden min-w-[10rem] lg:flex mr-4 ml-auto">
        {!isLoggedIn ? (
          <div className="w-full flex items-center justify-between relative cursor-pointer">
            <div className="rounded-full">
              {showProfileMenu && <UserMenuOptions />}
              <div className="mx-3">
                <Avatar src="file" name="User name" />
              </div>
            </div>
            <Button onClick={toggleProfileMenu}>
              <ChevronIcon size={20} fill="#f1b24a" />
            </Button>
          </div>
        ) : (
          <Button
            // open modal
            onClick={login}
            className="bg-secondary-clr py-2 px-4 text-primary-clr font-bold hover:bg-white">
            Login
          </Button>
        )}
      </div>

      {isLoggedIn === false && (
        <Modal size="w-full h-1/2 flex-center" callback={() => setIsLoggedIn(null)}>
          <Login />
        </Modal>
      )}
    </>
  );
}
