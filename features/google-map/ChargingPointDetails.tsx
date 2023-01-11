import Toast from "@components/ui/toast/Toast";
import { useState } from "react";
import useCopyToClipboard from "@hooks/useCopyToClipboard";
import LocationDetails from "@components/location-details/LocationDetails";
import Comments from "@features/comments/UserComments";
import Photos from "@features/photos/Photos";
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
  const [value, copyToClipboard] = useCopyToClipboard();
  const [openToast, setOpenToast] = useState(false);

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
            onClose={setOpenToast}
            direction={direction}
            chargingPointDetails={chargingPointDetails}
          />
        )}
        {activeTab === comments.tabName && <Comments />}
        {activeTab === photos.tabName && <Photos details={photos.tabName} />}
      </Modal>
      {openToast && <Toast onClose={setOpenToast} />}
    </>
  );
}
