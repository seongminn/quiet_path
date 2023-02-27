import { Location } from '@/types/map';

const useMapPanning = (map: google.maps.Map | null) => {
  const panToLocation = (location: Location) => {
    if (!map) {
      return;
    }

    map.panTo(location);
  };

  return (location: Location) => {
    panToLocation(location);
  };
};

export default useMapPanning;
