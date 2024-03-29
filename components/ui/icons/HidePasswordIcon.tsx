import { IconProps } from "domain/types";

export default function HidePasswordIcon({ size, className }: IconProps) {
  return (
    <svg
      role="img"
      className={className}
      width={size}
      aria-labelledby="Hide-password"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 33.86 29.47">
      <g data-name="Layer 2">
        <g data-name="Layer 1">
          <title id="Hide-password">Hide password</title>
          <path d="M16.93 5.46a15 15 0 0 1 13.57 8.47 14.78 14.78 0 0 1-3.71 4.8L29 20.9a18.11 18.11 0 0 0 4.9-7A18.24 18.24 0 0 0 11.33 3.26l2.54 2.54a15.5 15.5 0 0 1 3.06-.34Z" />
          <path d="m15.28 7.22 3.19 3.18 2 2 3.18 3.19A6.84 6.84 0 0 0 16.93 7a6.5 6.5 0 0 0-1.65.22zM1.55 2.19l4.13 4.12A18 18 0 0 0 0 13.93a18.19 18.19 0 0 0 23.58 10.28l5.26 5.26L31 27.3 3.72 0zM7.86 8.5l2.7 2.69a6.62 6.62 0 0 0-.56 2.7 6.88 6.88 0 0 0 9.57 6.35l.06.06 1.51 1.51a16 16 0 0 1-4.23.58 15.06 15.06 0 0 1-13.56-8.46A15.24 15.24 0 0 1 7.86 8.5z" />
        </g>
      </g>
    </svg>
  );
}
