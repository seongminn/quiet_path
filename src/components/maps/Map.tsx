import { mapOptions, mapStyle } from '@/config/mapConfig';
import { GoogleMapProps } from '@/types/map';
import { GoogleMap } from '@react-google-maps/api';
import { useCallback } from 'react';

const Map = ({ children, location, setMap }: GoogleMapProps) => {
  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  return (
    <GoogleMap
      onLoad={onLoad}
      zoom={14}
      center={location}
      mapContainerStyle={mapStyle}
      options={{
        mapTypeControl: false,
        styles: mapOptions,
        gestureHandling: 'greedy',
      }}
    >
      {children}
    </GoogleMap>
  );
};

export default Map;
