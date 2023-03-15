import Image from "next/image";
import InfoRow from "@components/ui/info-row/InfoRow";

import ContactInfo from "./ContactInfo";
import { noInfo, socketTypeImages } from "domain/constants";
import MembershipInfo from "./MembershipInfo";
import { POIDetails } from "domain/api-types";

export default function ChargingPointInfo({ details }: { details: POIDetails }) {
  const {
    connection,
    paymentOptions,
    contactInfo,
    NumberOfChargingPoints = noInfo,
  } = details ?? {};

  const { connectionType, currentType } = connection;

  return (
    <div className="flex flex-wrap justify-between">
      <InfoRow title="Equipment Details">
        <div className="flex items-center flex-wrap justify-start">
          <figure className="mr-8">
            {socketTypeImages?.map(({ socketType, src }) => {
              if (socketType === connectionType) {
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
            <li className="font-bold">Number Of Stations/Bays: {NumberOfChargingPoints}</li>
            <li>{currentType}</li>
            <li>{connectionType}</li>
          </ul>
        </div>
      </InfoRow>
      <InfoRow title="Info">
        <ContactInfo contactInfo={contactInfo} />
      </InfoRow>
      <InfoRow title="Usage restriction">
        <MembershipInfo isMembershipRequired={paymentOptions?.IsAccessKeyRequired} />
      </InfoRow>
    </div>
  );
}
