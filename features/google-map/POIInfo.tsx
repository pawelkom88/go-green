import ErrorMessage from "@components/error-message/ErrorMessage";
import POIPhotos from "@components/location-details/POI-photos/POIPhotos";
import POIDetails from "@components/location-details/POIDetails";
import Modal from "@components/modal/Modal";
import Tabs from "@components/ui/tabs/Tabs";
import Toast from "@components/ui/toast/Toast";
import Comments from "@features/comments/Comment";
import useCopyToClipboard from "@hooks/useCopyToClipboard";
import { chargingPointTabNames } from "domain/constants";
import { ChargingPointDetailsProps, Coords } from "domain/types";
import { handleLocation } from "helpers/helpers";
import { useState } from "react";

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

  const copyToClipboardSuccessMsg = value && (
    <Toast position="bottom-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      Link to Google Maps has been copied to clipboard !
    </Toast>
  );

  return (
    <>
      <Modal size="w-full h-full md:h-[90vh]" onModalClose={onShowDetails}>
        <Tabs onActiveTab={setActiveTab} activeTab={activeTab} />
        {showPOIDetails}
        {showActiveTab}
        {showPOIPhotos}
      </Modal>
      <ErrorMessage error={error} />
      {copyToClipboardSuccessMsg}
    </>
  );
}
