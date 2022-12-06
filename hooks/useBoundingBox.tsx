import * as turf from "@turf/turf";
import { userLocation, BoundingBox } from "types/types";

export default function useBoundingBox(currentLocation: userLocation, radius: number) {
  let boundingBoxPolygon: BoundingBox;

  if (currentLocation) {
    const { lat, lng } = currentLocation;

    /*
 Create a buffer (radius = distance in miles) around the given lat and lng and get the bounding box of the buffer.
*/

    const p = turf?.point([lat, lng]);
    const buffer = turf?.buffer(p, radius, { units: "miles" });
    const bbox = turf?.bbox(buffer);
    const polygon = turf?.bboxPolygon(bbox);
    boundingBoxPolygon = polygon.bbox;
  }

  return { boundingBoxPolygon };
}
