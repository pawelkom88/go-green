// import { UserLocationProps } from "types/types";
// API DATA TYPES

// change ?
type infoDataType = any;

export type CollectionObject = {
  id?: string;
  title: string;
  name: string;
  content: string;
  rating: number;
  avatar: string;
};

export type CommentDetails = {
  name: string;
  content: string;
  avatar: string;
  rating: number;
};

export type DataType = {
  id: number;
  address: {
    title: string;
    lat: number;
    lng: number;
    postCode: string;
    info: null | string;
  };
  connection: {
    connectionType: null | string;
    currentType: string;
    level: boolean;
  };
  info: {
    eMail: infoDataType;
    phone: infoDataType;
    website: infoDataType;
  };
  statusType: {
    ConnectionType: null | boolean;
  };
  cost: null | string;
  paymentOptions: {
    IsAccessKeyRequired: boolean;
    IsMembershipRequired: boolean;
    IsPayAtLocation: boolean;
  };
  NumberOfPoints: null | number;
};

export type ChargingPointDetailsType = {
  chargingPointDetails: DataType;
  direction: null | google.maps.DirectionsResult;
};

export type UserLocationType = undefined | Coords;

export type Coords = {
  lat: number;
  lng: number;
};

export type MapProps = {
  userLocation: UserLocationType;
  data: Array<DataType>;
};

export type BoundingBox = undefined | null | Array<number>;

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

export type ChildrenType = {
  children: React.ReactNode;
};

export type IconProps = {
  className?: string;
  size: number;
  fill?: string;

};

