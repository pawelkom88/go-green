import Image from "next/image";
import Button from "@components/button/Button";
import { btnUserProfileStyles } from "domain/constants";
import UserData from "./UserData";

export default function UserProfile() {
  function handleCheckbox() {
    console.log("a");
  }

  return (
    <div className="flex flex-col items-center pb-10">
      <Image
        width={24}
        height={24}
        src="/assets/electric-car.svg"
        className="w-24 h-24 mb-3 rounded-full shadow-lg"
        alt="user photo"
      />
      <h5 className="mb-1 text-xl font-medium text-gray-900">User Name</h5>
      <div className="flex mt-4 space-x-3 md:mt-6">
        <Button className={btnUserProfileStyles}>asdasdasd</Button>
        <Button className={btnUserProfileStyles}>Btn</Button>
      </div>
      <UserData />
    </div>
  );
}
