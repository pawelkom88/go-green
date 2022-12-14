import { useEffect, useState } from "react";
import * as turf from "@turf/turf";
import { Coords, BoundingBox } from "types/types";

export default function useBoundingBox(currentLocation: Coords, radius: number) {
  const [boundingBoxPolygon, setBoundingBoxPolygon] = useState<BoundingBox>(null);

  useEffect(() => {
    if (!currentLocation) return;

    const { lat, lng } = currentLocation;

    /*
      Create a buffer (radius = distance in miles) around the given lat and lng and get the bounding box of the buffer.
      */

    const p = turf?.point([lat, lng]);
    const buffer = turf?.buffer(p, radius, { units: "miles" });
    const bbox = turf?.bbox(buffer);
    const polygon = turf?.bboxPolygon(bbox);
    setBoundingBoxPolygon(polygon.bbox);
  }, [currentLocation, radius]);

  return { boundingBoxPolygon };
}
