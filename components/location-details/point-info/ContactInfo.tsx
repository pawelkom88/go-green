import { noInfo } from "domain/constants";
import { ContactInfoProps } from "types/types";

export default function ContactInfo({ contactInfo }: { contactInfo: ContactInfoProps }) {
  const { eMail, phone, website } = contactInfo || noInfo;

  return (
    <ul className="text-sm md:text-md space-y-2">
      <li>
        <a className="underline" href={`mailto:${eMail}`}>
          {eMail}
        </a>
      </li>
      <li>
        <a className="underline" href={`tel:${phone}`}>
          {phone}
        </a>
      </li>
      <li>
        <a className="underline" href={website}>
          {website}
        </a>
      </li>
    </ul>
  );
}
