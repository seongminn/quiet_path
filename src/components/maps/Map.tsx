import { mapOptions, mapStyle } from '@/config/mapConfig';
import { GoogleMapProps } from '@/types/map';
import { GoogleMap } from '@react-google-maps/api';
import { useCallback } from 'react';

const Map = ({ children, location, setMap }: GoogleMapProps) => {
  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);

    const customButton = document.createElement('button');

    customButton.style.backgroundColor = '#00b890';
    customButton.style.boxShadow =
      '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)';
    customButton.style.padding = '10px';
    customButton.style.margin = '10px';
    customButton.style.color = '#fff';
    customButton.style.fontSize = '16px';
    customButton.style.outline = 'none';
    customButton.style.borderRadius = '2px';
    customButton.style.fontFamily = 'NSRoundBold';
    customButton.style.transition = 'all 0.15s ease-in-out';

    customButton.textContent = '현재 위치';
    customButton.type = 'button';
    customButton.addEventListener('click', () => {
      if (location) map.panTo(location);
      else alert('위치를 찾을 수 없습니다 !');
    });
    customButton.addEventListener('mouseover', () => {
      customButton.style.backgroundColor = '#00857A';
    });
    customButton.addEventListener('mouseout', () => {
      customButton.style.backgroundColor = '#00b890';
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
