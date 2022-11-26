import Overlay from "@components/ui/overlay/Overlay";
import Avatar from "@components/ui/avatar/Avatar";
import CloseBtn from "@components/ui/icons/CloseBtn";
import Logo from "@components/ui/logo/Logo";
import SidebarItem from "@components/ui/sidebar/SidebarItem";

import { MobileMenuProps } from "@types/types";

export default function MobileMenu({ isShown, onToggle }: MobileMenuProps) {
  return (
    <>
      {isShown && <Overlay onToggle={onToggle} isShown={isShown} />}

      <div
        className={
          isShown
            ? "w-64 md:w-96 h-full absolute z-40  transform  translate-x-0 transition-transform"
            : "   w-64 md:w-96 h-full absolute z-40  transform -translate-x-full transition-transform"
        }
        id="mobile-nav">
        <div className="absolute z-40 sm:relative w-64 md:w-96 shadow pb-4 bg-gray-100 lg:hidden transition duration-150 ease-in-out h-full">
          <div className="flex flex-col justify-between h-full w-full">
            <div className="flex items-center justify-between px-8">
              <div className="h-16 w-full flex items-center">
                <Logo />
              </div>
              <div
                id="closeSideBar"
                className="flex items-center justify-center h-10 w-10"
                onClick={() => onToggle(!isShown)}>
                <CloseBtn />
              </div>
            </div>
            <ul className="h-full flex flex-col justify-center items-center py-6">
              <SidebarItem name="name" />
              <SidebarItem name="name" />
              <SidebarItem name="name" />
              <SidebarItem name="name" />
            </ul>
            <div className="w-full">
              <div className="border-t border-gray-300">
                <div className="w-full flex items-center justify-between px-6 pt-1">
                  <Avatar name="asd" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
