import { Coords } from "domain/types";

export function handleLocation(start: Coords, end: Coords): undefined | string {
  if (start == undefined) return;

  return `https://www.google.com/maps/dir/?api=1&origin=${start.lat},${start.lng}&destination=${end.lat},${end.lng}&travelmode=driving`;
}
