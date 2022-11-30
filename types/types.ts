// USE GEOLOCATION HOOK TYPES
export interface GeolocationType {
    code: number;
    message: string;
  }
  
  export interface PositionType {
    coords: {
      latitude: number;
      longitude: number;
    };
    timestamp: number;
  }
  
  export type GeolocationState = {
    lat: number;
    lng: number;
  };
  