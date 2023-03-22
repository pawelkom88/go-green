import { ExtendedPOIDetails } from "domain/api-types";
import { POIDetails } from "./api-types";
import { Timestamp, FieldValue } from "@firebase/firestore-types";
import { Dispatch } from "react";
import {
  Auth,
  UserCredential,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

export interface Actions {
  type: string;
  payload?: string;
}

export interface Coords {
  lat: number;
  lng: number;
}

export interface FiltersActions {
  connectorType: string;
  maxResults: string;
  distance: string;
  reset: string;
}
export interface AuthActions {
  login: string;
  logout: string;
  authIsReady: string;
}

export interface InitialFilters {
  // memberShipRequired: string;
  connectorType: string;
  maxResults: string;
  distance: string;
}

export interface FiltersProps {
  children?: React.ReactNode;
  setFilters: Dispatch<Actions>;
}

// USE GEOLOCATION HOOK TYPES
export interface LocationError {
  code: number;
  message: string;
  info?: {
    status: string;
  };
}

export interface UserPositionCoords {
  coords: {
    latitude: number;
    longitude: number;
  };
}
export type MaxResult = number;

export interface SliderProps {
  id: number;
  label: string;
  min: string;
  max: string;
}

export interface MarkerProps {
  userLocation: Coords;
  onSetSelectedPoint: (val: ExtendedPOIDetails) => void;
  onSetDirection: (val: google.maps.DirectionsResult) => void;
  // maxResults: MaxResult;
  filters: InitialFilters;
}

export interface HasAccountProps extends Props {
  action: string;
  onLogin: () => void;
}

export interface LocationDetailsProps extends ChargingPointDetails {
  onCopy: () => void;
}

export interface ButtonType extends Props {
  className?: string;
  title?: string;
  type?: "submit" | "button";
  disabled?: boolean;
  onClick?: () => void | (() => boolean);
}

export interface MaxResults {
  maxResults: MaxResult;
  onSetNumberOfFetchedPOI: (val: number) => void;
}

export interface ModalTypes extends Props {
  onModalClose?: (val: boolean) => void;
  size: string;
}

export interface Props {
  children: React.ReactNode;
}

export interface IconProps {
  className?: string;
  size: number;
  fill?: string;
}

export interface OverlayType extends Props {
  onClose: () => void;
}

export interface PhotoUpload {
  lastModified: number;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}

export interface AddCommentProps {
  onAddComment: (val: boolean) => void;
  selectedPointId: number;
}

export interface CommentSettingsProsp {
  commentId: string | undefined;
  showCommentSettings: boolean;
  handleCommentSettings: (val: boolean) => void;
}

export type CommentActionProps = {
  commentId?: string;
  idRequired: boolean;
  onModalClose: (val: boolean) => void;
  selectedPointId?: number;
};

export interface UserComment {
  userName: string;
  title: string;
  rating: number;
  content: string | undefined;
  timestamp: FieldValue;
}

export type ChargingPointDetails = {
  chargingPointDetails: ExtendedPOIDetails;
  direction: null | google.maps.DirectionsResult;
};

export interface ChargingPointDetailsProps extends ChargingPointDetails {
  userLocation: Coords;
  selectedPoint: POIDetails;
  onShowDetails?: (val: boolean) => void;
}

export type ChargingPointInfoProps = {
  selectedPoint: POIDetails;
  userLocation: Coords;
  onCloseClick: (val: null) => void;
  onShowDetails: (val: boolean) => void;
};

// FIREBASE
export interface AuthContextModel {
  user: User | null;
  // auth: Auth;
  // signIn: (email: string, password: string) => Promise<UserCredential>
  // signUp: (email: string, password: string) => Promise<UserCredential>
  // sendPasswordResetEmail?: (email: string) => Promise<void>
  dispatch: Dispatch<any>;
}
// FORM COMPONENT
export interface FormProps extends Props {
  action?: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface UserDetails {
  userName: string;
  password: string;
}

export interface ContactInfoProps {
  eMail: string;
  phone: string;
  website: string;
}

export interface Comment {
  id?: string;
  content: string;
  rating: number;
  title: string;
  timestamp: Timestamp;
  userName: string;
}

// LOGIN - SIGNUP TYPES
