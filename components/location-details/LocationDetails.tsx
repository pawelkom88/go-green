import { useState } from "react";
import AddedToFavouritesIcon from "@components/ui/icons/AddedToFavouritesIcon";
import AddToFavouritesIcon from "@components/ui/icons/AddToFavouritesIcon";
import ShareIcon from "@components/ui/icons/ShareIcon";
import Button from "@components/ui/button/Button";
import PointInfo from "./point-info/PointInfo";
import { ChargingPointDetailsType } from "types/types";

interface LocationDetailsProps extends ChargingPointDetailsType {
  onClose: (val: boolean) => void;
  onCopy: () => void;
}

export default function LocationDetails({
  onCopy,
  onClose,
  direction,
  chargingPointDetails,
}: LocationDetailsProps) {
  const [addToFavourites, setAddToFavourites] = useState(false);

  const { distance, duration } = direction?.routes[0].legs[0] ?? {};

  const { address } = chargingPointDetails ?? {};

  function handleFavourites() {
    setAddToFavourites(!addToFavourites);
  }
  return (
    <div className="flex flex-col rounded-lg text-primary-clr p-2">
      <h2 className="mb-1 text-xl font-semibold text-center p-2">{address.title}</h2>
      <div className="flex-center space-x-4">
        <Button
          className="p-2"
          title="Copy to clipboard"
          onClick={() => {
            onClose(true);
            onCopy();
          }}>
          <ShareIcon size={33} fill="#f1b24a" />
        </Button>
        <Button
          onClick={handleFavourites}
          title={addToFavourites ? "Remove from favourites" : "Add to favourites "}
          className="p-2">
          {addToFavourites ? (
            <AddToFavouritesIcon size={35} fill="#9dc88d" />
          ) : (
            <AddedToFavouritesIcon size={35} fill="#9dc88d" />
          )}
        </Button>
      </div>
      <div className="flex-center flex-col mb-4 text-sm">
        <span className="py-2 px-2">Distance: {distance?.text}</span>
        <span className="py-2 px-2">Estimated Travel Time: {duration?.text}</span>
      </div>
      <PointInfo details={chargingPointDetails}></PointInfo>
    </div>
  );
}
