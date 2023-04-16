import Button from "@components/button/Button";
import { ToastProps } from "domain/types";
import { useEffect, useState } from "react";

const defaultToastStyles = "bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2";

export default function Toast({ children, styles = defaultToastStyles }: ToastProps) {
  const [openToast, setOpenToast] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setOpenToast(false), 4000);

    return () => clearTimeout(timer);
  }, [setOpenToast]);

  return (
    <>
      {openToast && (
        <div
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          className={`${openToast ? "animate-start" : "animate-end"} 
          absolute flex shadow-md gap-6 rounded-lg overflow-hidden divide-x w-3/4 md:max-w-lg bg-white divide-secondary-clr z-[60] ${styles}`}>
          <div className="flex flex-1 flex-col p-4 border-l-8 border-secondary-clr text-sm text-primary-clr">
            {children}
          </div>
          <Button
            onClick={() => setOpenToast(false)}
            className="px-4 font-bold flex items-center text-xs uppercase tracking-wide text-primary-clr hover:bg-secondary-clr hover:text-primary-clr">
            close
          </Button>
        </div>
      )}
    </>
  );
}
