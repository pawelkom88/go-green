import Image from "next/image";

type UserNameProps = {
  name: string;
};

export default function Avatar({ name }: UserNameProps) {
  return (
    <div className="flex-center">
      <Image
        width={25}
        height={25}
        alt="profile-pic"
        src={"/assets/logo.png"}
        className="w-8 h-8 rounded-md"
      />
      <p className="md:text-xl text-gray-800 text-base leading-4 ml-2">{name}</p>
    </div>
  );
}
