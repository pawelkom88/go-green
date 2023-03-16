import { Props } from "domain/types";

interface InfoRowProps extends Props {
  title: string;
}

export default function InfoRow({ title, children }: InfoRowProps) {
  return (
    <div className="w-full space-x-2 my-4">
      <h3 className="py-2">{title}</h3>
      {children}
    </div>
  );
}
