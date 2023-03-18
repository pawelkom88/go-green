import { Coords, SliderProps } from "domain/types";

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

export const FiltersBtnStyles = "w-36 h-12 font-bold uppercase py-2 hover:bg-secondary-clr";

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

interface ConnectorTypes {
  id: number;
  value: string;
  type: string;
}

export const connectorTypes: ConnectorTypes[] = [
  { id: 1, value: "1", type: "Type 1" },
  { id: 2, value: "", type: "Type2" },
  { id: 3, value: "3", type: "Type 3" },
];

export const sliderProps: SliderProps[] = [
  { id: 1, label: "Number of charging point on the map", min: "10", max: "200", value: "1" },
  { id: 2, label: "Distance in miles", min: "1", max: "100", value: "1" },
];
