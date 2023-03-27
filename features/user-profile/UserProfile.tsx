import Button from "@components/button/Button";
import UserIcon from "@components/ui/icons/UserIcon";
import { useAuthContext } from "@context/AuthContext";
import { btnUserProfileStyles } from "domain/constants";
import Image from "next/image";
import UserData from "./UserData";

export default function UserProfile() {
  const { user, userName = "" } = useAuthContext();

  const userProfilePhoto = user?.photoURL ? (
    <Image
      width={24}
      height={24}
      // change to user photo while logged in and imported
      src={user.photoURL}
      className="w-24 h-24 mb-3 rounded-full shadow-lg"
      alt="user photo"
    />
  ) : (
    <UserIcon size={100} fill="#f1b24a" />
  );

  function handleCheckbox() {
    console.log("a");
  }

  return (
    <div className="flex flex-col items-center pb-10">
      {userProfilePhoto}
      <h5 className="mb-1 text-xl font-medium text-gray-900">{userName}</h5>
      <div className="flex mt-4 space-x-3 md:mt-6">
        <Button className={btnUserProfileStyles}>asdasdasd</Button>
        <Button className={btnUserProfileStyles}>Btn</Button>
      </div>
      <UserData />
    </div>
  );
}
