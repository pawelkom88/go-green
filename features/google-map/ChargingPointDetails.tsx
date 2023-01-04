import { useState } from "react";
import LocationDetails from "@components/location-details/LocationDetails";
import Comments from "@components/location-details/comments/Comments";
import Photos from "@components/location-details/photos/Photos";
import Modal from "@components/ui/modal/Modal";
import Tabs from "@components/ui/tabs/Tabs";
import { chargingPointDetails } from "types/types";
import { chargingPointTabName } from "helpers/helpers";

interface chargingPointDetailsType extends chargingPointDetails {
  onShowDetails?: (val: boolean) => void;
}

export default function ChargingPointDetails({
  direction,
  chargingPointDetails,
  onShowDetails,
}: chargingPointDetailsType) {
  const [activeTab, setActiveTab] = useState("Details");

  const [details, comments, photos] = chargingPointTabName;

  return (
    <Modal onShowDetails={onShowDetails}>
      <Tabs onActiveTab={setActiveTab} activeTab={activeTab} />
      {activeTab === details.tabName && (
        <LocationDetails
          details={details.tabName}
          direction={direction}
          chargingPointDetails={chargingPointDetails}
        />
      )}
      {activeTab === comments.tabName && <Comments details={comments.tabName} />}
      {activeTab === photos.tabName && <Photos details={photos.tabName} />}
    </Modal>
  );
}
