import { useEffect, useState } from 'react';

type LocationType = {
  message?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
};

const useGeolocation = () => {
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

  const onError = ({ message }: { message: string }) => {
    setLocation({
      message,
      coordinates: { lat: 37.56359, lng: 126.975407 },
    });
  };

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      onError({
        message: '기본 위치로 이동합니다 !',
      });
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);

    console.log(location);
  }, []);

  return location;
};

export default useGeolocation;
