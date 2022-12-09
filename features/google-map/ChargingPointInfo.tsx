import { InfoWindow } from "@react-google-maps/api";
import { DataType } from "types/types";

type ChargingPointInfoType = {
  selectedPoint: DataType;
  onCloseClick: (val: null) => void;
};

export default function ChargingPointInfo({ selectedPoint, onCloseClick }: ChargingPointInfoType) {
  return (
    <InfoWindow
      onCloseClick={() => {
        onCloseClick(null);
      }}
      position={{
        lat: selectedPoint?.address.lat,
        lng: selectedPoint?.address.lng,
      }}>
      <div>
        <h3 className="relative text-cyan-900 text-lg p-4 z-40">{selectedPoint.address.title}</h3>
      </div>
    </InfoWindow>
  );
}
