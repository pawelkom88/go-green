import Image from "next/image";
import { ChildrenType, CommentDetails } from "types/types";

interface CommentBodyProps extends ChildrenType {
  domNode: any;
  details: CommentDetails;
}

export default function CommentBody({ children, domNode, details }: CommentBodyProps) {
  return (
    <article
      ref={domNode}
      className="border border-teriary-clr p-6 mb-6 text-base bg-white rounded-lg mt-8">
      <footer className="relative flex justify-between items-center mb-2">
        <div className="flex items-center">
          <Image
            width={6}
            height={6}
            className="mr-2 w-6 h-6 rounded-full"
            src="/assets/charger-station.svg"
            alt={details.name}
          />
          <p className="mr-3 text-sm text-dark-text-clr font-bold">{details.name}</p>
          <p className="text-sm text-gray-600">
            <time dateTime="2022-02-08" title="February 8th, 2022">
              add timestamp from firebase
            </time>
          </p>
        </div>
        {children}
      </footer>
      <p className="text-gray-800">{details.content}</p>
    </article>
  );
}
