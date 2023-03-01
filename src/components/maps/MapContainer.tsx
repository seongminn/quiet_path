import tw from 'twin.macro';
import { useState } from 'react';
import { LoadScript } from '@react-google-maps/api';
import { useGeolocation, useMapPanning } from '@/hooks';
import { SubwayLocation } from '@/types/subway';
import { getSubwayLocations } from '@/query';
import { Marker, Map } from '@/components/maps';

const Wrapper = tw.div`
  min-w-[360px] h-full max-h-[90%] rounded-10
  shadow-gray-300 drop-shadow-lg
  flex-center

  laptop:max-w-[55%]

  mobile:(w-full max-w-[90%])
  `;

const MapContainer = ({ line }: { line: number }) => {
  const { VITE_GOOGLE_API_KEY } = import.meta.env;
  const [initialLocation] = useGeolocation();
  const subwayList: SubwayLocation[] = getSubwayLocations({ line });
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const panTo = useMapPanning(map);

  return (
    <Wrapper>
      <LoadScript googleMapsApiKey={VITE_GOOGLE_API_KEY}>
        <Map location={initialLocation} setMap={setMap}>
          {subwayList?.map(({ location, name }) => (
            <Marker
              key={name}
              location={location}
              name={name}
              line={line}
              panTo={panTo}
            />
          ))}
        </Map>
      </LoadScript>
    </Wrapper>
  );
};

export default MapContainer;
