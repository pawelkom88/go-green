import InfoRow from "@components/ui/info-row/InfoRow";
import { ExtendedConnectionDetails, ExtendedPOIDetails } from "domain/api-types";
import { noInfo, socketTypeImages } from "domain/constants";
import Image from "next/image";
import ContactInfo from "./ContactInfo";
import MembershipInfo from "./MembershipInfo";

export default function ConnectionInfo({
  chargingPointDetails,
}: {
  chargingPointDetails: ExtendedPOIDetails;
}) {
  const { Connections, NumberOfPoints, OperatorInfo, UsageType } = chargingPointDetails;

  const ConnectionTypesWithoutDuplicates: ExtendedConnectionDetails[] = [
    ...new Map(
      Connections.map(connectionType => [connectionType.ConnectionType.FormalName, connectionType])
    ).values(),
  ];

  const connectorImage: JSX.Element[] = ConnectionTypesWithoutDuplicates.map(
    ({ ID, ConnectionType }) => {
      const connectionTypeName: string = ConnectionType.FormalName || "";
      const ConnectionTypeImage: string = ConnectionType.FormalName
        ? socketTypeImages[connectionTypeName].src
        : socketTypeImages.notAvailable.src;

      return (
        <Image
          key={ID}
          width={200}
          height={250}
          src={ConnectionTypeImage}
          alt={ConnectionType.FormalName || ""}
        />
      );
    }
  );

  return (
    <div className="flex flex-wrap justify-between">
      <InfoRow title="Equipment Details">
        <p className="text-md text-center my-4 font-bold">
          Number Of Stations / Bays: {NumberOfPoints ?? noInfo}
        </p>
        <div className="flex-center flex-wrap ">
          <figure className="mr-8 ">
            <div className="flex-center flex-wrap gap-4">{connectorImage}</div>
            <figcaption className="italic text-[.7rem] text-center mt-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.mdpi.com/energies/energies-12-03721/article_deploy/html/images/energies-12-03721-g003.png">
                faqs-plug-types
              </a>
            </figcaption>
          </figure>
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
