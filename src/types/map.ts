export type Location = {
  lat: number;
  lng: number;
};

export type Marker = {
  name: string;
  location: Location;
  line: number;
  panTo: (location: Location) => void;
};

export type GoogleMapProps = {
  children: React.ReactNode;
  location: Location;
  setMap: React.Dispatch<React.SetStateAction<google.maps.Map | null>>;
};
