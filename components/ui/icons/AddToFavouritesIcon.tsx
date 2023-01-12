import { IconProps } from "types/types";

export default function AddToFavouritesIcon({ size, fill }: IconProps) {
  return (
    <svg width={size} fill={fill} viewBox="-64 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z" />
    </svg>
  );
}
