import UserMenuOptions from "@components/user-menu-options/UserMenuOptions";
import { useState } from "react";

import Chevron from "@components/ui/icons/Chevron";
import Avatar from "@components/ui/avatar/Avatar";

export default function UserMenu() {
  const [showProfileMenu, setShowProfileMenu] = useState<boolean>(false);

  function toggleProfileMenu() {
    setShowProfileMenu(!showProfileMenu);
  }

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
              <Avatar name="asd" />
            </div>
          </div>
          {/* ENTER */}
          <div tabIndex={0} onKeyDown={toggleProfileMenu} className="cursor-pointer text-gray-600">
            <Chevron />
          </div>
        </div>
      </div>
    </div>
  );
}
