export interface ILatLon {
  latitude: number;
  longitude: number;
}

export interface ILocationISS {
  timestamp?: number;
  iss_position?: ILatLon;
}

export type MyContextType = {
  setActiveISSId: (id: number | undefined) => void;
  setSavedLocations: (list: ILocationISS[]) => void;
  activeISSId: number | undefined;
  savedLocations: ILocationISS[];
};
