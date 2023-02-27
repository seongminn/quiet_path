import { mapOptions, mapStyle } from '@/config/mapConfig';
import { useMapPanning } from '@/hooks/useMapPanning';
import { GoogleMapProps, LocationType, Position } from '@/types/map';
import { GoogleMap } from '@react-google-maps/api';
import { useCallback, useEffect } from 'react';

const Map = ({ children, location, map, setMap }: GoogleMapProps) => {
  const panTo = useMapPanning(map);
  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);
  // const onBoundsChanged = (location: LocationType) => {
  //   if (map) {
  //     const bound = map.getBounds();

  //     map.fitBounds(bound!);
  //     map.
  //   }
  // };

  return (
    <GoogleMap
      onLoad={onLoad}
      zoom={14}
      center={location.coordinates}
      mapContainerStyle={mapStyle}
      options={{
        mapTypeControl: false,
        styles: mapOptions,
      }}
      onCenterChanged={() => panTo(location)}
      // onBoundsChanged={() => onBoundsChanged(location)}
    >
      {children}
    </GoogleMap>
  );
};

export default Map;
