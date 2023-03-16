import { Coords } from "domain/types";

export const noInfo: string = "Not available";

interface ContainerStyles {
  maxWidth: string;
  minHeight: string;
}

export const containerStyles: ContainerStyles = {
  maxWidth: "100%",
  minHeight: "100%",
};

export const londonCoords: Coords = {
  lat: 51.519977,
  lng: -0.128115,
};

interface ChargingPointTabNames {
  id: number;
  tabName: string;
}

export const chargingPointTabNames: ChargingPointTabNames[] = [
  { id: 1, tabName: "Details" },
  { id: 2, tabName: "Comments" },
  { id: 3, tabName: "Photos" },
];

type ButtonStyles = string;

export const signInBtnStyles: ButtonStyles =
  "block mx-auto bg-secondary-clr py-2 px-4 text-black font-bold text-sm hover:bg-primary-clr hover:text-secondary-clr";

export const loginBtnStyles: ButtonStyles =
  "w-full bg-white py-2 px-4 text-black border border-primary-clr rounded-lg";

export const submitBtnStyles: ButtonStyles =
  "bg-teriary-clr py-2 px-4 text-black font-bold hover:bg-white hover:text-primary-clr";

export const commentBtnStyles: ButtonStyles =
  "bg-primary-clr py-2 px-4 text-white font-bold hover:bg-secondary-clr hover:text-primary-clr text-sm";

export const disabledBtnStyles: ButtonStyles = "bg-gray-200 py-2 px-4 text-black font-bold text-sm";

export const FiltersBtnStyles =
  "w-full h-12 font-bold uppercase py-2 border-2 border-primary-clr hover:bg-secondary-clr";

export const btnUserProfileStyles: ButtonStyles =
  "inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700";

interface SocketTypeImages {
  socketType: string;
  src: string;
}

export const socketTypeImages: SocketTypeImages[] = [
  {
    socketType: "x",
    src: "/assets/connectors/type-1.webp",
  },
  {
    socketType: "IEC 62196-2 Type 2",
    src: "/assets/connectors/type-2.webp",
  },
  {
    socketType: "IEC 62196-3 Configuration FF",
    src: "/assets/connectors/ccs.webp",
  },
  {
    socketType: "x",
    src: "/assets/connectors/chademo.webp",
  },
];
