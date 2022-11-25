import Image from "next/image";

export default function Logo() {
  return (
    <div className="min-h-max w-full flex items-center px-8 pt-2 ">
      <Image src={"/assets/logo.png"} width={150} height={150} alt="d" />
    </div>
  );
}
