import UserMenuOptions from "@components/user-menu-options/UserMenuOptions";
import ChevronIcon from "@components/ui/icons/ChevronIcon";
import Avatar from "@components/ui/avatar/Avatar";
import Button from "@components/ui/button/Button";
import useToggle from "@hooks/useToggle";

export default function UserMenu() {
  const { isShown, handleOnShow } = useToggle();

  function toggleProfileMenu() {
    handleOnShow(!isShown);
  }

  return (
    <>
      <div className="hidden min-w-[10rem] lg:flex mr-4 ml-auto">
        <div className="w-full flex items-center justify-between relative cursor-pointer">
          <div className="rounded-full">
            {isShown && <UserMenuOptions />}
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
