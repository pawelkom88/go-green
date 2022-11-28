import { useState } from "react";
import UserMenuOptions from "@components/user-menu-options/UserMenuOptions";
import ChevronIcon from "@components/ui/icons/ChevronIcon";
import Avatar from "@components/ui/avatar/Avatar";

export default function UserMenu() {
  const [showProfileMenu, setShowProfileMenu] = useState<boolean>(false);

  function toggleProfileMenu() {
    setShowProfileMenu(!showProfileMenu);
  }
  console.log("UserMenu renders");
  return (
    <div className="w-1/4 hidden lg:flex mr-8">
      <div className="w-full flex items-center pl-8 justify-end">
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
          {/* ENTER */}
          <div tabIndex={0} onKeyDown={toggleProfileMenu}>
            <ChevronIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
