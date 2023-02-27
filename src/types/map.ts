export type Position = {
  lat: number;
  lng: number;
};

export type LocationType = {
  coordinates: Position;
};

export type Info = {
  name: string;
  position: Position;
  line: number;
  setLocation: React.Dispatch<React.SetStateAction<LocationType>>;
};
