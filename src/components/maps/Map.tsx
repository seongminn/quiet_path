import tw from 'twin.macro';
import { mapOptions, mapStyle } from '@/config/mapConfig';
import { useGeolocation } from '@/hook';
import { SubwayPosition } from '@/types/subway';
import { LoadScript, GoogleMap } from '@react-google-maps/api';
import Marker from './Marker';
import { getLatLng } from '@/query';

const Wrapper = tw.div`
  min-w-[360px] h-full max-h-[90%] rounded-10
  shadow-gray-300 drop-shadow-lg
  flex-center

  laptop:max-w-[55%]

  mobile:(w-full max-w-[90%])
  `;

const Map = ({ line }: { line: number }) => {
  const { VITE_GOOGLE_API_KEY } = import.meta.env;
  const { message, coordinates } = useGeolocation();
  const subwayList: SubwayPosition[] = getLatLng({ line });

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
            <Marker position={position} name={name} key={name} line={line} />
          ))}
        </GoogleMap>
      </LoadScript>
    </Wrapper>
  );
};

export default Map;
