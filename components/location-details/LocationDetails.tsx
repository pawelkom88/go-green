import { useState } from "react";
import AddedToFavouritesIcon from "@components/ui/icons/AddedToFavouritesIcon";
import AddToFavouritesIcon from "@components/ui/icons/AddToFavouritesIcon";
import ShareIcon from "@components/ui/icons/ShareIcon";
import Button from "@components/ui/button/Button";
import ChargingPointInfo from "./point-info/ChargingPointInfo";
import Toast from "@components/ui/toast/Toast";
import { ChargingPointDetails } from "domain/types";
import { POIDetails } from "domain/api-types";

interface LocationDetailsProps extends ChargingPointDetails {
  onCopy: () => void;
}

export default function LocationDetails({
  onCopy,
  direction,
  chargingPointDetails,
}: LocationDetailsProps) {
  const [favourites, setFavourites] = useState<POIDetails[]>([]);
  const [addedToFavorites, setAddedToFavourites] = useState<boolean>(false);

  const { distance, duration } = direction?.routes[0].legs[0] || {};

  const { AddressInfo } = chargingPointDetails || {};

  // use data from firebase and check if its added
  const IsAddedToFavoritesIcon = addedToFavorites ? (
    <AddToFavouritesIcon size={35} fill="#9dc88d" />
  ) : (
    <AddedToFavouritesIcon size={35} fill="#9dc88d" />
  );

  function addToFavorite(chargingPoint: POIDetails): void {
    if (!favourites.includes(chargingPoint)) {
      setFavourites([...favourites, chargingPoint]);
      setAddedToFavourites(true);
    }
    // send to firebase
  }

  return (
    <>
      <div className="flex flex-col rounded-lg text-primary-clr p-2">
        <h2 className="mb-1 text-xl font-semibold text-center p-2">
          {AddressInfo.Title || "Unknown"}
        </h2>
        <div className="flex-center space-x-4">
          <Button
            className="p-2"
            title="Copy to clipboard"
            onClick={() => {
              onCopy();
            }}>
            <ShareIcon size={33} fill="#f1b24a" />
          </Button>
          <Button onClick={() => addToFavorite(chargingPointDetails)} className="p-2">
            {IsAddedToFavoritesIcon}
          </Button>
        </div>
        <div className="flex-center flex-col mb-4 text-sm">
          <span className="py-2 px-2">Distance: {distance?.text}</span>
          <span className="py-2 px-2">Estimated Travel Time: {duration?.text}</span>
        </div>
        <ChargingPointInfo chargingPointDetails={chargingPointDetails}></ChargingPointInfo>
      </div>
      {addedToFavorites && <Toast>{AddressInfo.Title} has been added to favourites.</Toast>}
    </>
  );
}
