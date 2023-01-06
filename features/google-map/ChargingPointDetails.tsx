import { useState } from "react";
import useCopyToClipboard from "@hooks/useCopyToClipboard";
import LocationDetails from "@components/location-details/LocationDetails";
import Comments from "@components/location-details/comments/Comments";
import Photos from "@components/location-details/photos/Photos";
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
  const [isOpen, setIsOpen] = useState(false);

  const destination = {
    lat: selectedPoint?.address.lat,
    lng: selectedPoint?.address.lng,
  };

  function handleClipboard() {
    copyToClipboard(shareLink);
  }

  const shareLink = handleLocation(userLocation, destination);
  console.log(isOpen);
  return (
    <>
      {isOpen && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex shadow-md gap-6 rounded-lg overflow-hidden divide-x w-full md:max-w-lg text-whiter bg-primary-clr divide-secondary-clr z-[60]">
          <div className="flex flex-1 flex-col p-4 border-l-8 border-secondary-clr text-md text-white">
            Link to Google maps has been copied to clipboard!
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="px-4 flex items-center text-xs uppercase tracking-wide text-secondary-clr">
            close
          </button>
        </div>
      )}
      <Modal onShowDetails={onShowDetails}>
        <Tabs onActiveTab={setActiveTab} activeTab={activeTab} />
        {activeTab === details.tabName && (
          <LocationDetails
            onCopy={handleClipboard}
            onClose={setIsOpen}
            direction={direction}
            chargingPointDetails={chargingPointDetails}
          />
        )}
        {activeTab === comments.tabName && <Comments details={comments.tabName} />}
        {activeTab === photos.tabName && <Photos details={photos.tabName} />}
      </Modal>
    </>
  );
}
