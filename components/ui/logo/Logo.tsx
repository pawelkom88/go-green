import Image from "next/image";

export default function Logo() {
  return (
    <div className="min-h-max w-full flex-center">
      <Image src={"/assets/logo.png"} width={150} height={150} alt="d" />
    </div>
  );
}
