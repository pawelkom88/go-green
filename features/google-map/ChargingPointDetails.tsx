import { useState } from "react";
import Toast from "@components/ui/toast/Toast";
import useCopyToClipboard from "@hooks/useCopyToClipboard";
import LocationDetails from "@components/location-details/LocationDetails";
import Comments from "@features/comments/Comment";
import ChargingPointPhotos from "@features/charging-point-photos/ChargingPointPhotos";
import Modal from "@components/modal/Modal";
import Tabs from "@components/ui/tabs/Tabs";
import { ChargingPointDetailsProps, Coords } from "domain/types";
import { handleLocation } from "helpers/helpers";
import { chargingPointTabNames } from "domain/constants";

const [details, comments, photos] = chargingPointTabNames;

export default function ChargingPointDetails({
  direction,
  selectedPoint,
  userLocation,
  chargingPointDetails,
  onShowDetails,
}: ChargingPointDetailsProps) {
  const [activeTab, setActiveTab] = useState<string>("Details");
  const [error, value, copyToClipboard] = useCopyToClipboard();

  const destination: Coords = {
    lat: selectedPoint?.AddressInfo.Latitude,
    lng: selectedPoint?.AddressInfo.Longitude,
  };

  const shareLink: string = handleLocation(userLocation, destination) ?? "";

  // function handleClipboard():void {
  //   copyToClipboard(shareLink);
  // }

  return (
    <>
      <Modal size="w-full h-full md:h-[90vh]" onModalClose={onShowDetails}>
        <Tabs onActiveTab={setActiveTab} activeTab={activeTab} />

        {activeTab === details.tabName && (
          <LocationDetails
            onCopy={() => copyToClipboard(shareLink)}
            direction={direction}
            chargingPointDetails={chargingPointDetails}
          />
        )}

        {activeTab === comments.tabName && (
          <Comments selectedPointId={selectedPoint.AddressInfo.ID || 0} />
        )}

        {activeTab === photos.tabName && <ChargingPointPhotos />}
      </Modal>

      {error && <Modal size="h-[300px] flex-center">{error}</Modal>}
      {value && <Toast>Link to Google Maps has been copied to clipboard !</Toast>}
    </>
  );
}
