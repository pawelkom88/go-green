import { useEffect, useState } from "react";
import { Props } from "domain/types";
import Button from "../button/Button";

export default function Toast({ children }: Props) {
  const [openToast, setOpenToast] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setOpenToast(false), 4000);

    return () => clearTimeout(timer);
  }, [setOpenToast]);

  return (
    <>
      {openToast && (
        <div
          className={`${
            openToast ? "animate-start" : "animate-end"
          } absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex shadow-md gap-6 rounded-lg overflow-hidden divide-x w-full md:max-w-lg text-whiter bg-primary-clr divide-secondary-clr z-[60]`}>
          <div className="flex flex-1 flex-col p-4 border-l-8 border-secondary-clr text-md text-white">
            {children}
          </div>
          <Button
            onClick={() => setOpenToast(false)}
            className="px-4 font-bold flex items-center text-xs uppercase tracking-wide text-secondary-clr hover:bg-secondary-clr hover:text-primary-clr">
            close
          </Button>
        </div>
      )}
    </>
  );
}
