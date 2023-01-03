// API DATA TYPES

type infoDataType = any;

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

export type MapPropsType = {
  userLocation: undefined | Coords;
  data: Array<DataType>;
};

export type ChildrenType = {
  children: React.ReactNode;
};

export type Coords = {
  lat: number;
  lng: number;
};

export type userLocation = Coords | undefined;

export type BoundingBox = undefined | null | Array<number>;

export type UserLocationProps = {
  userLocation: Coords | undefined;
};

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
  timestamp: number;
}
