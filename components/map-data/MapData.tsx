import React from "react";
import useFetch from "@hooks/useFetch";
import { UserLocationProps } from "types/types";
import useBoundingBox from "@hooks/useBoundingBox";
import Map from "@components/map/Map";

export default function MapData({ userLocation }: UserLocationProps) {
  const { boundingBoxPolygon } = useBoundingBox(userLocation, 2);
  const { data } = useFetch(boundingBoxPolygon);

  // data transformation
  console.log(data);

  // const chargingPoints = data?.map(location => location.AddressInfo);

  return <Map userLocation={userLocation} />;
}
