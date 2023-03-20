import { useState } from "react";
import Toast from "@components/ui/toast/Toast";
import useCopyToClipboard from "@hooks/useCopyToClipboard";
import POIDetails from "@components/location-details/POIDetails";
import Comments from "@features/comments/Comment";
import POIPhotos from "@components/location-details/POI-photos/POIPhotos";
import Modal from "@components/modal/Modal";
import Tabs from "@components/ui/tabs/Tabs";
import { ChargingPointDetailsProps, Coords } from "domain/types";
import { handleLocation } from "helpers/helpers";
import { chargingPointTabNames } from "domain/constants";

const [details, comments, photos] = chargingPointTabNames;

export default function POIInfo({
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

  const showActiveTab = activeTab === comments.tabName && (
    <Comments selectedPointId={selectedPoint.AddressInfo.ID || 0} />
  );

  const showPOIDetails = activeTab === details.tabName && (
    <POIDetails
      onCopy={() => copyToClipboard(shareLink)}
      direction={direction}
      chargingPointDetails={chargingPointDetails}
    />
  );

  const showPOIPhotos = activeTab === photos.tabName && <POIPhotos />;

  const copyToClipboardErrorMsg = error && <Modal size="h-[300px] flex-center">{error}</Modal>;

  const copyToClipboardSuccessMsg = value && (
    <Toast>Link to Google Maps has been copied to clipboard !</Toast>
  );

  return (
    <>
      <Modal size="w-full h-full md:h-[90vh]" onModalClose={onShowDetails}>
        <Tabs onActiveTab={setActiveTab} activeTab={activeTab} />
        {showPOIDetails}
        {showActiveTab}
        {showPOIPhotos}
      </Modal>
      {copyToClipboardErrorMsg}
      {copyToClipboardSuccessMsg}
    </>
  );
}
