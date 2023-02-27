import { LocationType } from '@/types/map';

export function useMapPanning(map: google.maps.Map | null) {
  const panToLocation = (location: LocationType) => {
    if (!map) {
      return;
    }

    const latLng = location;

    map.panTo(latLng.coordinates);
  };

  return (location: LocationType) => {
    panToLocation(location);
  };
}
