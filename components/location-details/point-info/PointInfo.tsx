import Image from "next/image";
import InfoRow from "@components/ui/info-row/InfoRow";
import TickIcon from "@components/ui/icons/TickIcon";
import NoIcon from "@components/ui/icons/NoIcon";
import { socketTypeImageSrc } from "@helpers/helpers";
import { DataType } from "types/types";

type PointInfoProps = {
  details: DataType;
};

function getIcon(condition: boolean) {
  return condition ? <TickIcon size={30} fill="none" strokeClr="#f1b24a" /> : <NoIcon />;
}

const noInfo = "Not available";

export default function PointInfo({ details }: PointInfoProps) {
  const { connection, paymentOptions, info, NumberOfPoints } = details ?? {};

  const AvailabilityIcon = getIcon(paymentOptions?.IsAccessKeyRequired);

  return (
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
            <li className="font-bold">Number Of Stations/Bays: {NumberOfPoints ?? noInfo}</li>
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
  );
}
