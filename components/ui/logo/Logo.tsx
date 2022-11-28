import Image from "next/image";

export default function Logo() {
  console.log("Logo renders");

  return (
    <div className="min-h-max w-full flex-center">
      <Image src={"/assets/logo.png"} width={180} height={180} alt="App logo" />
    </div>
  );
}
