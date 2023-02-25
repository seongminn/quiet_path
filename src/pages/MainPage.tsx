import Map from '@/components/Map/Map';
import { getCongestion, getLatLng } from '@/query';
import tw, { css } from 'twin.macro';

const MainPage = () => {
  // const lines = getLatLng({ line: 1 });
  // const subways = getCongestion({ line: 1 });

  return (
    <div>
      MAIN PAGE 입니다.
      <div>
        <Map />
      </div>
    </div>
  );
};

export default MainPage;
