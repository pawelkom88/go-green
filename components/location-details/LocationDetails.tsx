import { useState } from "react";
import Image from "next/image";
import TickIcon from "@components/ui/icons/TickIcon";
import NoIcon from "@components/ui/icons/NoIcon";
import Button from "@components/ui/button/Button";
import InfoRow from "@components/ui/info-row/InfoRow";
import { ChargingPointDetailsType } from "types/types";
import { socketTypeImageSrc } from "@helpers/helpers";

interface LocationDetailsProps extends ChargingPointDetailsType {
  onClose: (val: boolean) => void;
  onCopy: (val: string) => void;
}
const noInfo = "Not available";

export default function LocationDetails({
  onCopy,
  onClose,
  direction,
  chargingPointDetails,
}: LocationDetailsProps) {
  const [isFavourite, setIsFavourite] = useState(false);

  const { distance, duration } = direction?.routes[0].legs[0] ?? {};

  const { connection, paymentOptions, info, address } = chargingPointDetails ?? {};

  const AvailabilityIcon = paymentOptions?.IsAccessKeyRequired ? (
    <TickIcon strokeClr="#f1b24a" />
  ) : (
    <NoIcon />
  );

  function handleFavourites() {
    setIsFavourite(!isFavourite);
  }
  return (
    <div className="flex flex-col rounded-lg shadow-mdtext-primary-clr p-2">
      <h2 className="mb-1 text-xl font-semibold text-center p-2">{address.title}</h2>
      <div className="flex-center space-x-4">
        <span
          onClick={() => {
            onCopy;
            onClose(true);
          }}
          title="Copy to clipboard"
          className="p-2 text-center cursor-pointer">
          <svg fill="#f1b24a" width={33} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M404 344a75.9 75.9 0 0 0-60.208 29.7l-163.923-93.036a75.693 75.693 0 0 0 0-49.328L343.792 138.3a75.937 75.937 0 1 0-13.776-28.976L163.3 203.946a76 76 0 1 0 0 104.108l166.717 94.623A75.991 75.991 0 1 0 404 344Zm0-296a44 44 0 1 1-44 44 44.049 44.049 0 0 1 44-44ZM108 300a44 44 0 1 1 44-44 44.049 44.049 0 0 1-44 44Zm296 164a44 44 0 1 1 44-44 44.049 44.049 0 0 1-44 44Z" />
          </svg>
        </span>
        <Button
          onClick={handleFavourites}
          title={isFavourite ? "Remove from favourites" : "Add to favourites "}
          className="p-2">
          {isFavourite ? (
            <svg
              width={35}
              fill="#9dc88d"
              viewBox="-64 0 512 512"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z" />
            </svg>
          ) : (
            <svg
              width={35}
              fill="#9dc88d"
              viewBox="-64 0 512 512"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z" />
            </svg>
          )}
        </Button>
      </div>

      <div className="flex-center flex-col mb-4 text-sm">
        <span className="py-2 px-2">Distance: {distance?.text}</span>
        <span className="py-2 px-2">Estimate Travel Time: {duration?.text}</span>
      </div>
      <div className="flex flex-wrap justify-between">
        <InfoRow title="Equipment Details">
          <div className="flex items-center flex-wrap justify-start">
            <figure className="mr-8">
              {socketTypeImageSrc?.map(({ type, src }) => {
                if (type === connection?.connectionType) {
                  return <Image key={type} width={120} height={120} src={src} alt={type} />;
                }
              })}

              <figcaption className="italic text-[.7rem]">
                <a href="https://wallbox.com/en_uk/faqs-plug-types">
                  https://wallbox.com/en_uk/faqs-plug-types
                </a>
              </figcaption>
            </figure>
            <ul className="text-sm md:text-md space-y-2">
              <li className="font-bold">Number Of Stations/Bays:</li>
              <li>{connection?.currentType}</li>
              <li>{connection?.connectionType}</li>
            </ul>
          </div>
        </InfoRow>
        <InfoRow title="Info">
          <ul className="text-sm md:text-md space-y-2">
            <li>
              <a className="underline" href={`mailto:${info?.eMail}`}>
                {info?.eMail || noInfo}
              </a>
            </li>
            <li>
              <a className="underline" href={`tel:${info?.phone}`}>
                {info?.phone || noInfo}
              </a>
            </li>
            <li>
              <a className="underline" href={info?.website}>
                {info?.website || noInfo}
              </a>
            </li>
          </ul>
        </InfoRow>
        <InfoRow title="Usage restriction">
          <ul>
            <li className="flex items-center text-sm md:text-md">
              <span>Membership required:</span>
              {AvailabilityIcon}
            </li>
            <li className="flex items-center text-sm md:text-md">
              <span>Access Key required:</span>
              {AvailabilityIcon}
            </li>
            <li className="flex items-center text-sm md:text-md">
              <span>Pay at location:</span>
              {AvailabilityIcon}
            </li>
          </ul>
        </InfoRow>
      </div>
    </div>
  );
}
