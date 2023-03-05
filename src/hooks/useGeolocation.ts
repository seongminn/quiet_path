import { Location } from '@/types/map';
import { useEffect, useState } from 'react';

const useGeolocation = (): [
  Location,
  React.Dispatch<React.SetStateAction<Location>>
] => {
  const [location, setLocation] = useState<Location>({
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          console.log('위치를 파악하는 데에 실패했어요 !');
          setLocation({ lat: 37.56359, lng: 126.975407 });
        }
      );
    } else {
      console.log('위치 정보 사용을 거부했어요 !');
      setLocation({ lat: 37.56359, lng: 126.975407 });
    }
  }, []);

  return [location, setLocation];
};

export default useGeolocation;
