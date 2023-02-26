import tw from 'twin.macro';
import { mapOptions, mapStyle } from '@/config/mapConfig';
import { useGeolocation } from '@/hook';
import { SubwayPosition } from '@/types/subway/Congestion';
import {
  LoadScript,
  GoogleMap,
  MarkerF,
  InfoBoxF,
} from '@react-google-maps/api';
import { useState } from 'react';

const Wrapper = tw.div`
max-w-[60%] min-w-[360px] h-full rounded-10
shadow-gray-300 drop-shadow-lg
  flex-center

  laptop:(w-2/3 max-w-[50%])

  mobile:(w-full)
  `;

const Map = ({ subwayList }: { subwayList: SubwayPosition[] }) => {
  const { VITE_GOOGLE_API_KEY } = import.meta.env;
  const { message, coordinates } = useGeolocation();
  const [isShown, toggleShown] = useState<boolean>(false);

  const handleToggle = () => {
    toggleShown((prev) => !prev);
  };

  return (
    <Wrapper>
      <LoadScript googleMapsApiKey={VITE_GOOGLE_API_KEY}>
        <GoogleMap
          zoom={14}
          center={coordinates}
          mapContainerStyle={mapStyle}
          options={{ mapTypeControl: false, styles: mapOptions }}
        >
          {subwayList?.map(({ position, name }) => (
            <MarkerF position={position} key={name} onClick={handleToggle}>
              {isShown && (
                <InfoBoxF onCloseClick={handleToggle}>
                  <div>hi</div>
                </InfoBoxF>
              )}
            </MarkerF>
          ))}
        </GoogleMap>
      </LoadScript>
    </Wrapper>
  );
};

export default Map;
