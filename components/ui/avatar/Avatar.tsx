import Image from "next/image";
import UserIcon from "@components/ui/icons/UserIcon";

type UserNameProps = {
  name?: string;
  src: string;
  onToggle?: () => void;
};

export default function Avatar({ name, src, onToggle }: UserNameProps) {
  console.log("Avatar renders");

  return (
    <div onClick={onToggle} className="flex-center">
      {/* CHANGE to uploaded photo - remember of type */}
      {false ? (
        <Image
          width={25}
          height={25}
          alt="User avatar image"
          src={src}
          className="w-8 h-8 rounded-md"
        />
      ) : (
        <UserIcon />
      )}

      <p className="text-text-clr text-base leading-4 ml-2">{name ? name : ""}</p>
    </div>
  );
}
