import { IconProps } from "domain/types";

export default function LocationIcon({ size, fill }: IconProps) {
  return (
    <svg
      width={size}
      className="cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill={fill}
      tabIndex={0}
      aria-label="Locate me">
      <path d="M30,15H27A11,11,0,0,0,17,5.05V2a1,1,0,0,0-2,0V5.05A11,11,0,0,0,5.05,15H2a1,1,0,0,0,0,2H5.05A11,11,0,0,0,15,27V30a1,1,0,0,0,2,0V27A11,11,0,0,0,27,17H30a1,1,0,0,0,0-2Zm-5.06,0h-3A6,6,0,0,0,17,10.09v-3A9,9,0,0,1,24.94,15ZM16,20a4,4,0,1,1,4-4A4,4,0,0,1,16,20ZM15,7.06v3A6,6,0,0,0,10.09,15h-3A9,9,0,0,1,15,7.06ZM7.06,17h3A6,6,0,0,0,15,21.91v3A9,9,0,0,1,7.06,17ZM17,24.94v-3A6,6,0,0,0,21.91,17h3A9,9,0,0,1,17,24.94Z" />
    </svg>
  );
}
