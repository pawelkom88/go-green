import * as turf from "@turf/turf";
import { Coords } from "domain/types";
import { useEffect, useState } from "react";

export default function useBoundingBox(currentLocation: Coords | undefined, radius: number) {
  const [boundingBoxPolygon = [], setBoundingBoxPolygon] = useState<turf.BBox>();

  useEffect(() => {
    if (!currentLocation) return;

    const { lat, lng } = currentLocation;

    /*
      Create a buffer (radius = distance in km) around the given lat and lng and get the bounding box of the buffer.
      */

    const p = turf.point([lat, lng]);
    const buffer = turf.buffer(p, radius, { units: "kilometers" });
    const bbox = turf.bbox(buffer);
    const polygon = turf.bboxPolygon(bbox);
    setBoundingBoxPolygon(polygon.bbox);
  }, [currentLocation, radius]);

  return { boundingBoxPolygon };
}
