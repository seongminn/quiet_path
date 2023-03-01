import tw from 'twin.macro';
import { useEffect, useState } from 'react';
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

  useEffect(() => {
    if (map) {
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
        map.panTo(initialLocation);
      });
      customButton.addEventListener('mouseover', () => {
        customButton.style.backgroundColor = '#00857A';
      });
      customButton.addEventListener('mouseout', () => {
        customButton.style.backgroundColor = '#00b890';
      });

      map.controls[google.maps.ControlPosition.TOP_LEFT].push(customButton);
    }
  }, [map, initialLocation]);

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
