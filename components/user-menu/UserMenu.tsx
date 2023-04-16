import Button from "@components/button/Button";
import Avatar from "@components/ui/avatar/Avatar";
import ChevronIcon from "@components/ui/icons/ChevronIcon";
import UserMenuOptions from "@components/user-menu-options/UserMenuOptions";
import { useAuthContext } from "@context/AuthContext";
import useClickOutside from "@hooks/useClickOutside";
import useToggle from "@hooks/useToggle";

export default function UserMenu() {
  const { isShown: showUserMenuDropdown, handleOnShow: handleUserMenuDropdown } = useToggle();
  const { userName } = useAuthContext();
  const showProfileMenu = showUserMenuDropdown && <UserMenuOptions />;
  const activeDomNode = useClickOutside(() => handleUserMenuDropdown(false));

  return (
    <>
      <div ref={activeDomNode} className="hidden min-w-[10rem] lg:flex mr-4 ml-auto">
        <div className="w-full flex items-center justify-between relative cursor-pointer">
          <div className="rounded-full">
            {showProfileMenu}
            <div className="mx-3">
              <Avatar src="file" name={userName} />
            </div>
          </div>
          <Button onClick={() => handleUserMenuDropdown(!showUserMenuDropdown)}>
            <ChevronIcon size={20} fill="#f1b24a" />
          </Button>
        </div>
      </div>
    </>
  );
}
