import tw from 'twin.macro';
import { useEffect, useState } from 'react';
import { LoadScript } from '@react-google-maps/api';
import { useGeolocation, useMapPanning, useCustomButton } from '@/hooks';
import { SubwayLocationObj } from '@/types/subway';
import { Marker, Map } from '@/components/maps';

const Wrapper = tw.div`
  w-full h-full rounded-10 overflow-y-hidden
  shadow-gray-300 drop-shadow-lg
  flex-center flex-1
  
  laptop:max-w-[55%]
  `;

const MapContainer = ({
  line,
  subwayList,
}: {
  line: number;
  subwayList: SubwayLocationObj[] | null;
}) => {
  const { VITE_GOOGLE_API_KEY } = import.meta.env;
  const [initialLocation] = useGeolocation();
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const panTo = useMapPanning(map);

  useEffect(() => {
    if (map) {
      map.controls[google.maps.ControlPosition.TOP_LEFT].clear();

      const customButton = document.createElement('button');

      useCustomButton({
        map: map,
        location: initialLocation,
        element: customButton,
      });
    }
  }, [map, initialLocation]);

  return (
    <Wrapper>
      <LoadScript googleMapsApiKey={VITE_GOOGLE_API_KEY}>
        <Map location={initialLocation} setMap={setMap}>
          {subwayList?.map(({ location, name }) => (
            <Marker
              key={name + line}
              location={location}
              name={name}
              panTo={panTo}
            />
          ))}
        </Map>
      </LoadScript>
    </Wrapper>
  );
};

export default MapContainer;
