import { IconProps } from "domain/types";

export default function FolderIcon({ size, fill }: IconProps) {
  return (
    <svg width={size} fill={fill} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
    </svg>
  );
}
