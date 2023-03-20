import { useState } from "react";
import AddedToFavouritesIcon from "@components/ui/icons/AddedToFavouritesIcon";
import AddToFavouritesIcon from "@components/ui/icons/AddToFavouritesIcon";
import ShareIcon from "@components/ui/icons/ShareIcon";
import Button from "@components/button/Button";
import ConnectionInfo from "./point-info/ConnectionInfo";
import Toast from "@components/ui/toast/Toast";
import { LocationDetailsProps } from "domain/types";
import { POIDetails as POI_Details} from "domain/api-types";

export default function POIDetails({
  onCopy,
  direction,
  chargingPointDetails,
}: LocationDetailsProps) {
  const [favourites, setFavourites] = useState<POI_Details[]>([]);
  const [addedToFavorites, setAddedToFavourites] = useState<boolean>(false);

  const { distance, duration } = direction?.routes[0].legs[0] || {};

  const { AddressInfo } = chargingPointDetails || {};

  // use data from firebase and check if its added
  const IsAddedToFavoritesIcon = addedToFavorites ? (
    <AddToFavouritesIcon size={35} fill="#9dc88d" />
  ) : (
    <AddedToFavouritesIcon size={35} fill="#9dc88d" />
  );

  function addToFavorite(chargingPoint: POI_Details): void {
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
          {AddressInfo.Title == "null" ? "Unknown" : AddressInfo.Title}
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
        <ConnectionInfo chargingPointDetails={chargingPointDetails}></ConnectionInfo>
      </div>
      {addedToFavorites && <Toast>{AddressInfo.Title} has been added to favourites.</Toast>}
    </>
  );
}