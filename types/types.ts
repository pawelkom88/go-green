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
