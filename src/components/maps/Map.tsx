import tw from 'twin.macro';
import { mapOptions, mapStyle } from '@/config/mapConfig';
import { useGeolocation } from '@/hooks';
import { SubwayPosition } from '@/types/subway';
import { LoadScript, GoogleMap } from '@react-google-maps/api';
import Marker from './Marker';
import { getLatLng } from '@/query';
import { useCallback, useState } from 'react';
import { useMapPanning } from '@/hooks/useMapPanning';

const Wrapper = tw.div`
  min-w-[360px] h-full max-h-[90%] rounded-10
  shadow-gray-300 drop-shadow-lg
  flex-center

  laptop:max-w-[55%]

  mobile:(w-full max-w-[90%])
  `;

const Map = ({ line }: { line: number }) => {
  const { VITE_GOOGLE_API_KEY } = import.meta.env;
  const [location, setLocation] = useGeolocation();
  const subwayList: SubwayPosition[] = getLatLng({ line });
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const panTo = useMapPanning(map);
  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  return (
    <Wrapper>
      <LoadScript googleMapsApiKey={VITE_GOOGLE_API_KEY}>
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
        >
          {subwayList?.map(({ position, name }) => (
            <Marker
              position={position}
              name={name}
              key={name}
              line={line}
              setLocation={setLocation}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </Wrapper>
  );
};

export default Map;
