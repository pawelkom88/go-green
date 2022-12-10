import Link from "next/link";
import { DataType } from "types/types";
import TickIcon from "@components/ui/icons/TickIcon";
import CloseBtnIcon from "@components/ui/icons/CloseBtnIcon";

type chargingPointDetailsType = {
  chargingPointDetails: DataType;
};

export default function ChargingPointDetails({ chargingPointDetails }: chargingPointDetailsType) {
  const { connection, paymentOptions, info } = chargingPointDetails;

  return (
    <div className="md:absolute left-[12rem] top-[1rem]">
      <table className="min-w-full table-auto">
        <thead className="justify-between">
          <tr className="bg-primary-clr">
            <th className="px-16 py-2">
              <span>Connection type</span>
            </th>
            <th className="px-16 py-2">
              <span>Payment options</span>
            </th>
            <th className="px-16 py-2">
              <span>Info</span>
            </th>
          </tr>
        </thead>

        <tbody className="bg-gray-100">
          <tr className="text-primary-clr bg-white border-2 border-gray-200">
            <td className="px-16 py-2">
              <span className="mr-8"> {connection.currentType}</span>
              <span>{connection.connectionType}</span>
            </td>

            <td className="px-8 py-2 flex flex-col">
              <span>
                Membership required: {paymentOptions.IsMembershipRequired ? <TickIcon /> : "X"}
              </span>
              <span>
                Access Key required: {paymentOptions.IsAccessKeyRequired ? <TickIcon /> : "X"}
              </span>
              <span>Pay at location: {paymentOptions.IsPayAtLocation ? <TickIcon /> : "X"}</span>
            </td>

            <td className="px-8 py-2 flex flex-col">
              <span>{info.eMail}</span>
              <span>{info.phone}</span>
              <span>
                <Link href="asd">{info.website}</Link>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
