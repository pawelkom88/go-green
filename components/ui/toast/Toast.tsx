import { useEffect } from "react";

type ToastProps = {
  onClose: (val: boolean) => void;
};

export default function Toast({ onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => onClose(false), 4000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex shadow-md gap-6 rounded-lg overflow-hidden divide-x w-full md:max-w-lg text-whiter bg-primary-clr divide-secondary-clr z-[60]">
      <div className="flex flex-1 flex-col p-4 border-l-8 border-secondary-clr text-md text-white">
        Link to Google maps has been copied to clipboard!
      </div>
      <button
        onClick={() => onClose(false)}
        className="px-4 font-bold flex items-center text-xs uppercase tracking-wide text-secondary-clr hover:bg-secondary-clr hover:text-primary-clr">
        close
      </button>
    </div>
  );
}
