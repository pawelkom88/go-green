import Image from "next/image";
import InfoRow from "@components/ui/info-row/InfoRow";
import ContactInfo from "./ContactInfo";
import { socketTypeImages } from "domain/constants";
import MembershipInfo from "./MembershipInfo";
import { ExtendedPOIDetails } from "domain/api-types";

export default function ChargingPointInfo({
  chargingPointDetails,
}: {
  chargingPointDetails: ExtendedPOIDetails;
}) {
  const { Connections, NumberOfPoints, OperatorInfo, UsageType } = chargingPointDetails || {};

  const [{ ConnectionType, CurrentType }] = Connections;

  return (
    <div className="flex flex-wrap justify-between">
      <InfoRow title="Equipment Details">
        <div className="flex items-start flex-wrap justify-start">
          <figure className="mr-8">
            {socketTypeImages.map(({ socketType, src }) => {
              if (socketType === ConnectionType.FormalName) {
                return (
                  <Image key={socketType} width={120} height={120} src={src} alt={socketType} />
                );
              }
            })}
            <figcaption className="italic text-[.7rem]">
              <a href="https://wallbox.com/en_uk/faqs-plug-types">
                https://wallbox.com/en_uk/faqs-plug-types
              </a>
            </figcaption>
          </figure>
          <ul className="text-sm md:text-md space-y-2">
            <li className="font-bold">Number Of Stations/Bays: {NumberOfPoints}</li>
            <li>{ConnectionType.FormalName || ConnectionType.Title}</li>
            <li>{CurrentType?.Description}</li>
          </ul>
        </div>
      </InfoRow>
      <InfoRow title="Info">
        <ContactInfo operatorInfo={OperatorInfo!} />
      </InfoRow>
      <InfoRow title="Usage restriction">
        <MembershipInfo isMembershipRequired={UsageType?.IsAccessKeyRequired || false} />
      </InfoRow>
    </div>
  );
}
