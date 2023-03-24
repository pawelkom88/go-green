import Image from "next/image";

interface LogoProps {
  className?: string;
  src: string;
  width: number;
  height: number;
}

export default function Logo({ width, height, src, className }: LogoProps) {
  return (
    <div className={className}>
      <Image src={src} width={width} height={height} alt="App logo" />
    </div>
  );
}
