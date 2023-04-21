import { AuthError, Coords, InitialFiltersState, SliderProps } from "domain/types";

export const noInfo: string = "Not available";

// type FormActions = "Log in" | "Sign in" | "Sign up";
export const defaultAuthErrorState: AuthError = { occured: null, message: "" };
interface FormActions {
  signUp: string;
  signIn: string;
  logIn: string;
}

export const formActions: FormActions = {
  signUp: "Sign up",
  signIn: "Sign in",
  logIn: "Log in",
};

export const initialFilters: InitialFiltersState = {
  connectorType: "",
  maxResults: "",
  distance: false,
  membership: false,
  // applyFilters ?????
};

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

interface PhotoUploadActions {
  addComment: string;
  uploadPhoto: string;
}

export const errorMsgStyles = "border-b-4 border-warning-clr";

export const photoUploadActions: PhotoUploadActions = {
  addComment: "Log in to add comments",
  uploadPhoto: "Log in to upload images",
};

export const toastAuthenticationStyles =
  "text-white top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-warning-clr";

export const toastPosition: string = "top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2";

type ButtonStyles = string;

export const signInBtnStyles: ButtonStyles =
  "block mx-auto bg-secondary-clr py-2 px-4 text-black font-bold text-sm hover:bg-primary-clr hover:text-secondary-clr";

export const loginInputStyles: ButtonStyles =
  "w-full bg-white py-2 px-4 text-black border border-primary-clr rounded-lg border-b-4";

export const submitBtnStyles: ButtonStyles =
  "bg-teriary-clr py-2 px-4 text-black font-bold hover:bg-white hover:text-primary-clr";

export const commentBtnStyles: ButtonStyles =
  "bg-primary-clr py-2 px-4 text-white font-bold hover:bg-secondary-clr hover:text-primary-clr text-sm";

export const disabledBtnStyles: ButtonStyles = "bg-gray-200 py-2 px-4 text-black font-bold text-sm";

export const FiltersBtnStyles = "w-36 h-12 font-bold uppercase py-2 hover:bg-secondary-clr";

export const btnUserProfileStyles: ButtonStyles =
  "px-4 py-2 text-sm font-medium text-center bg-white border border-gray-300 hover:bg-primary-clr hover:text-white hover:border-primary-clr";

interface SocketTypeImages {
  [key: string]: {
    id: number;
    src: string;
  };
}

export const socketTypeImages: SocketTypeImages = {
  "SAE J1772-2009": { id: 1, src: "/assets/connectors/type-1.webp" },
  "IEC 62196-2 Type 2": { id: 2, src: "/assets/connectors/Type-2.webp" },
  "IEC 62196-2": { id: 3, src: "/assets/connectors/Type-2.webp" },
  "IEC 62196-3 Configuration FF": { id: 4, src: "/assets/connectors/type-1.webp" },
  "IEC 62196-3 Configuration AA": { id: 5, src: "/assets/connectors/chademo.webp" },
  Tesla: { id: 6, src: "/assets/connectors/tesla.webp" },
  "BS1363 / Type G": { id: 7, src: "/assets/connectors/GB-T.webp" },
  notAvailable: {
    id: 7,
    src: "/assets/connectors/not-available.webp",
  },
};

interface ConnectorTypes {
  id: number;
  value: string;
  type: string;
}

export const connectorTypes: ConnectorTypes[] = [
  { id: 1, value: "0", type: "SAE J1772-2009" },
  { id: 2, value: "1", type: "IEC 62196-2 Type 2" }, // or IEC 62196-2
  { id: 3, value: "2", type: "IEC 62196-3 Configuration FF" },
  { id: 4, value: "3", type: "IEC 62196-3 Configuration AA" },
  { id: 5, value: "4", type: "Tesla" },
  { id: 6, value: "5", type: "BS1363 / Type G" },
];

export const sliderProps: SliderProps[] = [
  { id: 1, name: "maxResults", label: "Number of results", min: "10", max: "200" },
  { id: 2, name: "distance", label: "Distance in miles", min: ".5", max: "10" },
];

interface filtersCheckbox {
  id: number;
  label: string;
  name: string;
}

export const filtersCheckbox: filtersCheckbox[] = [
  { id: 1, label: "Is membership required", name: "membership" },
  { id: 2, label: "nearest point - use provided distance", name: "distance" },
  { id: 3, label: "Is membership required", name: "xxx" },
];
