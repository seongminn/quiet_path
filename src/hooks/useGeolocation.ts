import { LocationType } from '@/types/map';
import { useEffect, useState } from 'react';

const useGeolocation = (): [
  LocationType,
  React.Dispatch<React.SetStateAction<LocationType>>
] => {
  const [location, setLocation] = useState<LocationType>({
    coordinates: {
      lat: 0,
      lng: 0,
    },
  });

  const onSuccess = (position: {
    coords: { latitude: number; longitude: number };
  }) => {
    setLocation({
      coordinates: {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      },
    });
  };

  const onError = () => {
    setLocation({
      coordinates: { lat: 37.56359, lng: 126.975407 },
    });
  };

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      onError();
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return [location, setLocation];
};

export default useGeolocation;
