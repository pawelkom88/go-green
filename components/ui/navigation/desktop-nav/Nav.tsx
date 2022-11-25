import { useState } from "react";
import Image from "next/image";
import SearchIcon from "@components/ui/icons/SearchIcon";
import ProfileIcon from "@components/ui/icons/ProfileIcon";
import HamburgerIcon from "@components/ui/icons/HamburgerIcon";
import SignOutIcon from "@components/ui/icons/SignOutIcon";
import Chevron from "@components/ui/icons/Chevron";
import Avatar from "@components/ui/avatar/Avatar";

type MobileMenuProps = {
  isShown: boolean;
  onToggle: (state: boolean) => void;
};

export default function Nav({ isShown, onToggle }: MobileMenuProps) {
  const [profile, setProfile] = useState(false);

  return (
    <nav className="h-16 flex items-center lg:items-stretch justify-end lg:justify-between bg-white shadow relative z-10">
      <div className="hidden lg:flex w-full pr-6">
        <div className="w-1/2 h-full hidden lg:flex items-center pl-6 pr-24">
          <div className="relative w-full">
            <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
              <SearchIcon />
            </div>
            <input
              className="border border-gray-100 focus:outline-none focus:border-indigo-700 rounded w-full text-sm text-gray-500 bg-gray-100 pl-12 py-2"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="w-1/2 hidden lg:flex">
          <div className="w-full flex items-center pl-8 justify-end">
            <div
              className="flex items-center relative cursor-pointer"
              onClick={() => setProfile(!profile)}>
              <div className="rounded-full">
                {profile ? (
                  <ul className="p-2 w-full border-r bg-white absolute rounded left-0 shadow mt-12 sm:mt-16 ">
                    <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center">
                      <div className="flex items-center">
                        <ProfileIcon />
                        <span className="text-sm ml-2">My Profile</span>
                      </div>
                    </li>
                    <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mt-2">
                      <div className="flex items-center">
                        <SignOutIcon />
                        <span className="text-sm ml-2">Sign out</span>
                      </div>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
                <div className="mx-3">
                  <Avatar name="asd" />
                </div>
              </div>
              <div className="cursor-pointer text-gray-600">
                <Chevron />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="text-gray-600 mr-8 visible lg:hidden relative"
        onClick={() => onToggle(!isShown)}>
        {isShown ? " " : <HamburgerIcon />}
      </div>
    </nav>
  );
}
