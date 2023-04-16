import { FieldValue, Timestamp } from "@firebase/firestore-types";
import { ExtendedPOIDetails } from "domain/api-types";
import { Auth, User, UserCredential } from "firebase/auth";
import { Dispatch, FormEvent, SetStateAction } from "react";
import { POIDetails } from "./api-types";

export interface LogOutMetrics {
  openModal: boolean;
  showLogOutPopUpMessage: boolean;
}

export interface MobileUserMenuProps {
  showUserCredentialModal: boolean;
  onHandleShowUserCredentialModal: GenericFunction<boolean>;
}

export interface AuthError {
  occured: boolean;
  message: string;
}

export interface AuthErrorMessage {
  email: string;
  password: string;
  auth: string;
}

export interface LogOutMessageProps {
  onManageLogOut: Dispatch<SetStateAction<LogOutMetrics>>;
  onHandleLogOut: () => void;
}

export interface ToastProps extends Props {
  styles: string;
}

export interface FilterContextActions {
  type: string | boolean;
  payload?: string | boolean;
}

export interface AuthContextActions {
  type: string;
  payload?: null | User;
}

export interface Coords {
  lat: number;
  lng: number;
}

export interface FiltersActions {
  connectorType: string;
  maxResults: string;
  distance: string | boolean;
  membership: string | boolean;
}
export interface AuthActions {
  login: string;
  logout: string;
  authIsReady: string;
}

export type InitialFiltersState = FiltersActions;

export type SetFilters = Dispatch<FilterContextActions>;

export interface FilterCheckboxProps extends Props {
  name: string;
}

export interface FiltersProps extends Props {
  onApplyFilters: (e: FormEvent<HTMLFormElement>) => void;
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
  name: string;
  label: string;
  min: string;
  max: string;
}

export interface MarkerProps {
  userLocation: Coords;
  onSetSelectedPoint: (val: ExtendedPOIDetails) => void;
  onSetDirection: (val: google.maps.DirectionsResult) => void;
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
  children?: React.ReactNode;
}

export interface IconProps {
  className?: string;
  size: number;
  fill?: string;
}

export interface OverlayType extends Props {
  onClose?: () => void;
  blur: string;
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
  userName: string | undefined;
  dispatch: Dispatch<AuthContextActions>;
  authIsReady: boolean;
}

// ask !!
export type GenericFunction<T = boolean> = ((val: T) => void) | (() => void);

// FORM COMPONENT
export interface FormProps extends Props {
  action: string;
  method: (auth: Auth, email: string, password: string) => Promise<UserCredential>;
  onModalClose: GenericFunction<boolean>;
}

export interface UserDetails {
  email: string;
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
