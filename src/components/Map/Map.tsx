import { useGeolocation } from '@/hook';
import { LoadScript, GoogleMap } from '@react-google-maps/api';
import tw from 'twin.macro';

const { VITE_GOOGLE_API_KEY } = import.meta.env;
const Wrapper = tw.div`
  w-1/2 h-full 
  mx-auto my-0
  drop-shadow-lg 
  shadow-gray-300
`;

const Map = () => {
  const { message, coordinates } = useGeolocation();
  const mapStyle = {
    width: '100%',
    minHeight: '500px',
  };

  return (
    <Wrapper>
      <LoadScript googleMapsApiKey={VITE_GOOGLE_API_KEY}>
        <GoogleMap
          zoom={15}
          center={coordinates}
          mapContainerStyle={mapStyle}
        ></GoogleMap>
      </LoadScript>
    </Wrapper>
  );
};

export default Map;
