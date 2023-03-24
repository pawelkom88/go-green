import Button from "@components/button/Button";
import Avatar from "@components/ui/avatar/Avatar";
import ChevronIcon from "@components/ui/icons/ChevronIcon";
import UserMenuOptions from "@components/user-menu-options/UserMenuOptions";
import useToggle from "@hooks/useToggle";

export default function UserMenu() {
  const { isShown, handleOnShow } = useToggle();

  const showUserMenu = isShown && <UserMenuOptions />;

  function toggleProfileMenu() {
    handleOnShow(!isShown);
  }

  return (
    <>
      <div className="hidden min-w-[10rem] lg:flex mr-4 ml-auto">
        <div className="w-full flex items-center justify-between relative cursor-pointer">
          <div className="rounded-full">
            {showUserMenu}
            <div className="mx-3">
              <Avatar src="file" name="User name" />
            </div>
          </div>
          <Button onClick={toggleProfileMenu}>
            <ChevronIcon size={20} fill="#f1b24a" />
          </Button>
        </div>
      </div>
    </>
  );
}
