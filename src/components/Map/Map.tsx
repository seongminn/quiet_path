import { mapOptions, mapStyle } from '@/config/mapConfig';
import { useGeolocation } from '@/hook';
import { SubwayPosition } from '@/types/subway/Congestion';
import { LoadScript, GoogleMap, MarkerF } from '@react-google-maps/api';
import tw from 'twin.macro';

const { VITE_GOOGLE_API_KEY } = import.meta.env;

const Wrapper = tw.div`
  max-w-[60%] min-w-[360px] h-full rounded-10
  shadow-gray-300 drop-shadow-lg
  flex-center

  laptop:(w-2/3 max-w-[50%])

  mobile:(w-full)
`;

const Map = ({ subwayList }: { subwayList: SubwayPosition[] }) => {
  const { message, coordinates } = useGeolocation();

  return (
    <Wrapper>
      <LoadScript googleMapsApiKey={VITE_GOOGLE_API_KEY}>
        <GoogleMap
          zoom={14}
          center={coordinates}
          mapContainerStyle={mapStyle}
          options={{ mapTypeControl: false, styles: mapOptions }}
        >
          {subwayList?.map((item) => (
            <MarkerF position={item.position} key={item.name} />
          ))}
        </GoogleMap>
      </LoadScript>
    </Wrapper>
  );
};

export default Map;
