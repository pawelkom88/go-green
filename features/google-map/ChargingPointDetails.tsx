import { useState } from "react";
import Toast from "@components/ui/toast/Toast";
import useCopyToClipboard from "@hooks/useCopyToClipboard";
import LocationDetails from "@components/location-details/LocationDetails";
import Comments from "@features/comments/UserComments";
import Photos from "@features/charging-point-photos/CharginPointPhotos";
import Modal from "@components/ui/modal/Modal";
import Tabs from "@components/ui/tabs/Tabs";
import { UserLocationType, DataType } from "types/types";
import { chargingPointTabName, handleLocation } from "helpers/helpers";

type ChargingPointDetailsProps = {
  chargingPointDetails: DataType;
  userLocation: UserLocationType;
  selectedPoint: DataType;
  direction: null | google.maps.DirectionsResult;
  onShowDetails?: (val: boolean) => void;
};
const [details, comments, photos] = chargingPointTabName;

export default function ChargingPointDetails({
  direction,
  selectedPoint,
  userLocation,
  chargingPointDetails,
  onShowDetails,
}: ChargingPointDetailsProps) {
  const [activeTab, setActiveTab] = useState("Details");
  const [error, value, copyToClipboard] = useCopyToClipboard();

  const destination = {
    lat: selectedPoint?.address.lat,
    lng: selectedPoint?.address.lng,
  };

  const shareLink = handleLocation(userLocation, destination);

  function handleClipboard() {
    copyToClipboard(shareLink);
  }

  return (
    <>
      <Modal size="w-full h-full md:h-[90vh]" callback={onShowDetails}>
        <Tabs onActiveTab={setActiveTab} activeTab={activeTab} />
        {activeTab === details.tabName && (
          <LocationDetails
            onCopy={handleClipboard}
            direction={direction}
            chargingPointDetails={chargingPointDetails}
          />
        )}
        {activeTab === comments.tabName && <Comments />}
        {activeTab === photos.tabName && <Photos details={photos.tabName} />}
      </Modal>
      {error && <Modal size="h-[300px] flex-center">{error}</Modal>}
      {value && <Toast>Link to Google Maps has been copied to clipboard !</Toast>}
    </>
  );
}
