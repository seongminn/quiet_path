import { mapOptions, mapStyle } from '@/config/mapConfig';
import { GoogleMapProps } from '@/types/map';
import { GoogleMap } from '@react-google-maps/api';
import { useCallback } from 'react';

const Map = ({ children, location, setMap }: GoogleMapProps) => {
  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);

    const customButton = document.createElement('button');

    customButton.style.backgroundColor = '#F16063';
    customButton.style.padding = '10px';
    customButton.style.margin = '10px';
    customButton.style.color = '#fff';
    customButton.style.fontSize = '16px';
    customButton.style.borderRadius = '2px';
    customButton.style.fontFamily = 'NSRoundBold';

    customButton.textContent = '현재 위치';
    customButton.type = 'button';
    customButton.addEventListener('click', () => {
      map.panTo(location);
    });

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(customButton);
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
      }}
    >
      {children}
    </GoogleMap>
  );
};

export default Map;
