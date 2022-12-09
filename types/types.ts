// API DATA TYPES

type infoDataType = null | undefined | string;

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
};

// UNIVERSAL TYPES
export type ChildrenType = {
  children: React.ReactNode;
};

export type Coords = {
  lat: number;
  lng: number;
};

export type userLocation = Coords | undefined;

export type BoundingBox = undefined | Array<number>;

export type UserLocationProps = {
  userLocation: Coords | undefined;
};

// USE GEOLOCATION HOOK TYPES
export interface GeolocationType {
  code: number;
  message: string;
  onError?: {
    status: string;
  };
}

export interface PositionType {
  coords: {
    latitude: number;
    longitude: number;
  };
  timestamp: number;
}
