import { OperatorInfo } from "domain/api-types";
import { noInfo } from "domain/constants";

export default function ContactInfo({ operatorInfo }: { operatorInfo: OperatorInfo }) {
  const { ContactEmail, PhonePrimaryContact, WebsiteURL } = operatorInfo || noInfo;

  return (
    <ul className="text-sm md:text-md space-y-2">
      <li>
        <a className="underline" href={`mailto:${ContactEmail}`}>
          {ContactEmail}
        </a>
      </li>
      <li>
        <a className="underline" href={`tel:${PhonePrimaryContact}`}>
          {PhonePrimaryContact}
        </a>
      </li>
      <li>
        <a className="underline" href={WebsiteURL || ""}>
          {WebsiteURL}
        </a>
      </li>
    </ul>
  );
}
