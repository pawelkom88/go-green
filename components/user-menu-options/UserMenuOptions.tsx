import Button from "@components/ui/button/Button";
import ProfileIcon from "@components/ui/icons/ProfileIcon";
import SignOutIcon from "@components/ui/icons/SignOutIcon";

export default function UserMenuOptions({}) {
  return (
    <ul className="p-4 w-full border-r bg-primary-clr absolute rounded left-0 shadow mt-12 sm:mt-16 ">
      <li className="flex w-full justify-between hover:text-secondary-clr cursor-pointer items-center">
        <div className="flex items-center">
          <ProfileIcon size={25} fill="none" />
          <Button className="text-md ml-2">My Profile</Button>
        </div>
      </li>
      <li className="flex w-full justify-between hover:text-secondary-clr  cursor-pointer items-center mt-2">
        <div className="flex items-center">
          <SignOutIcon size={25} fill="none" />
          <Button className="text-md ml-2">Sign out</Button>
        </div>
      </li>
    </ul>
  );
}
