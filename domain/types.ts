import { ExtendedPOIDetails } from "domain/api-types";
import { POIDetails } from "./api-types";
import { Timestamp } from "@firebase/firestore-types";
import { Dispatch } from "react";
import {
  Auth,
  UserCredential,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

export type Coords = {
  lat: number;
  lng: number;
};

// USE GEOLOCATION HOOK TYPES
export interface GeolocationType {
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

export interface MarkerProps {
  userLocation: Coords;
  onSetSelectedPoint: (val: ExtendedPOIDetails) => void;
  onSetDirection: (val: google.maps.DirectionsResult) => void;
  maxResults: number;
}

export interface MaxResults {
  maxResults: number;
}

export interface SetMaxResults {
  onSetDisplayedPoints: (val: number) => void;
}

export type Props = {
  children: React.ReactNode;
};

export type IconProps = {
  className?: string;
  size: number;
  fill?: string;
};

export type uploadType = {
  lastModified: number;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
};

export type CommentActionProps = {
  commentId?: string;
  idRequired: boolean;
  callback: (val: boolean) => void;
  selectedPointId?: number;
};

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

export interface CollectionObject {
  id?: string;
  content: string;
  rating: number;
  title: string;
  timestamp: Timestamp;
  userName: string;
}

// LOGIN - SIGNUP TYPES

export interface HasAccountProps extends Props {
  action: string;
  onLogin: () => void;
}
