import { POIDetails } from './../domain/api-types';
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
// API DATA TYPES

// change ?
type infoDataType = any;

export interface CollectionObject {
  id?: string;
  content: string;
  rating: number;
  title: string;
  timestamp: Timestamp;
  userName: string;
}

// export interface RawData {
//   AddressInfo: {
//     id: number;
//     address: {
//       title: string;
//       lat: number;
//       lng: number;
//       postCode: string;
//       info: null | string;
//     };
//   };
//   Connections: {
//     connectionType: null | string;
//     currentType: string;
//     level: boolean;
//   };
//   OperatorInfo: {
//     eMail: infoDataType;
//     phone: infoDataType;
//     website: infoDataType;
//   };
//   StatusType: {
//     ConnectionType: null | boolean;
//   };
//   UsageCost: null;
//   UsageType: {
//     IsAccessKeyRequired: boolean;
//     IsMembershipRequired: boolean;
//     IsPayAtLocation: boolean;
//   };
//   GeneralComments: string;
//   NumberOfPoints: null | number;
// }

//   statusType: {
//     ConnectionType: null | boolean;
//   };
//   cost: null | string;
//   paymentOptions: {
//     IsAccessKeyRequired: boolean;
//     IsMembershipRequired: boolean;
//     IsPayAtLocation: boolean;
//   };
//   NumberOfChargingPoints: null | number;
// }

export type ChargingPointDetails = {
  chargingPointDetails: POIDetails;
  direction: null | google.maps.DirectionsResult;
};

export type ChargingPointAddress = {
  title: string;
  lat: number;
  lng: number;
  postCode: string;
  info: string;
};

export type UserLocationType = undefined | Coords;

export type Coords = {
  lat: number;
  lng: number;
};

export type MapProps = {
  data: RawData[] | undefined;
};

export type BoundingBox = undefined | null | number[];

// USE GEOLOCATION HOOK TYPES
export interface GeolocationType {
  code: number;
  message: string;
  info?: {
    status: string;
  };
}

export interface PositionType {
  coords: {
    latitude: number;
    longitude: number;
  };
}

// UNIVERSAL TYPES

export type FiltersProps = {
  onRadiusChange: (val: number) => void;
};

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

export type ChargingPointDetailsProps = {
  chargingPointDetails: POIDetails;
  userLocation: UserLocationType;
  selectedPoint: POIDetails;
  direction: null | google.maps.DirectionsResult;
  onShowDetails?: (val: boolean) => void;
};

export type ChargingPointInfoType = {
  selectedPoint: POIDetails;
  userLocation: UserLocationType;
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

// LOGIN - SIGNUP TYPES

export interface HasAccountProps extends Props {
  action: string;
  onLogin: () => void;
}
