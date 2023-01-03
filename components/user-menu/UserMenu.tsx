import { useState } from "react";
import UserMenuOptions from "@components/user-menu-options/UserMenuOptions";
import ChevronIcon from "@components/ui/icons/ChevronIcon";
import Avatar from "@components/ui/avatar/Avatar";
import Button from "@components/ui/button/Button";

export default function UserMenu() {
  const [showProfileMenu, setShowProfileMenu] = useState<boolean>(false);

  // dummy state
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  function toggleProfileMenu() {
    setShowProfileMenu(!showProfileMenu);
  }

  function login() {
    setIsLoggedIn(true);
  }

  return (
    <div className="hidden lg:flex mr-8 ml-auto">
      <div className="w-full">
        {isLoggedIn ? (
          <div
            aria-label="Open user menu"
            className="flex items-center relative cursor-pointer"
            onClick={toggleProfileMenu}>
            <div className="rounded-full">
              {showProfileMenu ? <UserMenuOptions /> : ""}
              <div className="mx-3">
                <Avatar src="file" name="User name" />
              </div>
            </div>
            <div tabIndex={0} onKeyDown={toggleProfileMenu}>
              <ChevronIcon />
            </div>
          </div>
        ) : (
          <Button
            onClick={login}
            className="bg-secondary-clr py-2 px-4 text-primary-clr font-bold hover:bg-white">
            Login
          </Button>
        )}
      </div>
    </div>
  );
}
