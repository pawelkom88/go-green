import NoIcon from "@components/ui/icons/NoIcon";
import TickIcon from "@components/ui/icons/TickIcon";

export default function MembershipInfo({
  isMembershipRequired,
}: {
  isMembershipRequired: boolean;
}) {
  const AvailabilityIcon: JSX.Element = isMembershipRequired ? (
    <TickIcon size={30} fill="none" strokeClr="#f1b24a" />
  ) : (
    <NoIcon />
  );

  return (
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
  );
}
