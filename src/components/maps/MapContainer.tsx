import tw from 'twin.macro';
import { useEffect, useState } from 'react';
import { LoadScript } from '@react-google-maps/api';
import { useGeolocation, useMapPanning, useCustomButton } from '@/hooks';
import { SubwayLocationObj } from '@/types/subway';
import { Marker, Map } from '@/components/maps';
import { useSetRecoilState } from 'recoil';
import { subwayListState } from '@/recoil/atoms/subwayListState';
import useMediaQuery from '@/hooks/useMediaQuery';

const MapContainer = ({
  line,
  subwayList,
}: {
  line: number;
  subwayList: SubwayLocationObj[] | null;
}) => {
  const { VITE_GOOGLE_API_KEY } = import.meta.env;
  const matches = useMediaQuery('(max-width: 1350px)');
  const setClicked = useSetRecoilState(subwayListState);
  const [initialLocation] = useGeolocation();
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const panTo = useMapPanning(map);

  useEffect(() => {
    if (map) {
      map.controls[google.maps.ControlPosition.TOP_LEFT].clear();

      useCustomButton({
        map: map,
        onClick: () => map.panTo(initialLocation),
        element: document.createElement('button'),
        message: '현재 위치',
      });

      if (matches) {
        useCustomButton({
          map: map,
          onClick: () => setClicked((prev) => !prev),
          element: document.createElement('button'),
          message: '혼잡도 보기',
        });
      }
    }
  }, [map, initialLocation, matches]);

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

const Wrapper = tw.div`
  w-full h-full rounded-10 overflow-y-hidden
  shadow-gray-300 drop-shadow-lg
  flex-center flex-1
  
  laptop:max-w-[55%]
  `;

export default MapContainer;
