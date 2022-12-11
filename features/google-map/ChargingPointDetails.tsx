import { DataType } from "types/types";
import TickIcon from "@components/ui/icons/TickIcon";
import CloseBtnIcon from "@components/ui/icons/CloseBtnIcon";
import NoIcon from "@components/ui/icons/NoIcon";

type DirectionsResult = google.maps.DirectionsResult;

type chargingPointDetailsType = {
  chargingPointDetails: DataType;
  onShowDetails: (val: boolean) => void;
  direction: null | DirectionsResult;
};

export default function ChargingPointDetails({
  direction,
  chargingPointDetails,
  onShowDetails,
}: chargingPointDetailsType) {
  const { connection, paymentOptions, info } = chargingPointDetails || {};
  const { distance, duration, start_location, end_location } = direction?.routes[0].legs[0] || {};
  const AvailabilityIcons = paymentOptions?.IsAccessKeyRequired ? (
    <TickIcon strokeClr="#f1b24a" />
  ) : (
    <NoIcon />
  );

  const noInfo = "Not available";

  console.log(direction?.routes[0].legs[0]);

  return (
    <>
      <table className="absolute left-0 right-0 mx-0 text-md bg-primary-clr border-4 border-teriary-clr z-50">
        <CloseBtnIcon className="absolute right-2 top-2" onClose={() => onShowDetails(false)} />
        <thead className="bg-white text-primary-clr">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium">Connection type</th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium">Payment options</th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium">Info</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="whitespace-nowrap px-4 py-2 font-medium flex-center flex-col">
              <span className="mr-8"> {connection?.currentType}</span>
              <span>{connection?.connectionType}</span>
            </td>
            <td className="whitespace-nowrap px-4 py-2">
              <span className="flex-center">Membership required: {AvailabilityIcons}</span>
              <span className="flex-center">Access Key required: {AvailabilityIcons}</span>
              <span className="flex-center">Pay at location: {AvailabilityIcons}</span>
            </td>
            <td className="whitespace-nowrap px-4 py-2 flex-center flex-col">
              <span>
                <a href={`mailto:${info?.eMail}`}>{info?.eMail || noInfo}</a>
              </span>
              <span>
                <a href={`tel:${info?.phone}`}>{info?.phone || noInfo}</a>
              </span>
              <span>
                <a href={info?.website}>{info?.website || noInfo}</a>
              </span>
            </td>
          </tr>
          <tr>
            <td>{distance?.text}</td>
            <td>{duration?.text}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
