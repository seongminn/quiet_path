import { useGeolocation } from '@/hook';
import { LoadScript, GoogleMap } from '@react-google-maps/api';
import tw from 'twin.macro';

const { VITE_GOOGLE_API_KEY } = import.meta.env;
const Wrapper = tw.div`
  w-2/3 max-w-[60%] h-full mx-auto my-0 rounded-10
  shadow-gray-300 drop-shadow-lg
  flex justify-center items-center
`;

const Map = () => {
  const { message, coordinates } = useGeolocation();
  const mapStyle = {
    width: '100%',
    height: '85%',
    borderRadius: '5px',
  };

  return (
    <Wrapper>
      <LoadScript googleMapsApiKey={VITE_GOOGLE_API_KEY}>
        <GoogleMap
          zoom={14}
          center={coordinates}
          mapContainerStyle={mapStyle}
          options={{ mapTypeControl: false }}
        ></GoogleMap>
      </LoadScript>
    </Wrapper>
  );
};

export default Map;
