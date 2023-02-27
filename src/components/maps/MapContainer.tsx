import tw from 'twin.macro';
import { useGeolocation } from '@/hooks';
import { SubwayPosition } from '@/types/subway';
import { LoadScript } from '@react-google-maps/api';
import Marker from './Marker';
import { getLatLng } from '@/query';
import { useState } from 'react';
import Map from './Map';

const Wrapper = tw.div`
  min-w-[360px] h-full max-h-[90%] rounded-10
  shadow-gray-300 drop-shadow-lg
  flex-center

  laptop:max-w-[55%]

  mobile:(w-full max-w-[90%])
  `;

const Container = ({ line }: { line: number }) => {
  const { VITE_GOOGLE_API_KEY } = import.meta.env;
  const [location, setLocation] = useGeolocation();
  const subwayList: SubwayPosition[] = getLatLng({ line });
  const [map, setMap] = useState<google.maps.Map | null>(null);

  return (
    <Wrapper>
      <LoadScript googleMapsApiKey={VITE_GOOGLE_API_KEY}>
        <Map location={location} map={map} setMap={setMap}>
          {subwayList?.map(({ position, name }) => (
            <Marker
              position={position}
              name={name}
              key={name}
              line={line}
              setLocation={setLocation}
            />
          ))}
        </Map>
      </LoadScript>
    </Wrapper>
  );
};

export default Container;
