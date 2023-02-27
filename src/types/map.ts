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

export type GoogleMapProps = {
  children: React.ReactNode;
  location: LocationType;
  map: google.maps.Map | null;
  setMap: React.Dispatch<React.SetStateAction<google.maps.Map | null>>;
};
