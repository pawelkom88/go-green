import Image from "next/image";

export default function Logo() {
  return (
    <div className="relative min-h-max w-full flex-center z-50 mt-12">
      <Image src={"/assets/logo.png"} width={180} height={180} alt="App logo" />
    </div>
  );
}
