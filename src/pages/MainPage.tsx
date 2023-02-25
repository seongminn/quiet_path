import Map from '@/components/Map/Map';
import { getCongestion, getLatLng } from '@/query';
import tw, { css } from 'twin.macro';

const MainPage = () => {
  // const lines = getLatLng({ line: 1 });
  // const subways = getCongestion({ line: 1 });

  return (
    <div css={tw`h-screen flex justify-center items-center`}>
      <div
        css={tw`bg-white w-2/3 h-4/5 min-h-[500px] rounded-10 drop-shadow-lg px-40 mx-auto my-0 flex justify-center items-center gap-40`}
      >
        <div
          css={tw`bg-white min-w-[40%] border-1 border-gray-400 rounded-5 drop-shadow-md`}
        >
          여기
        </div>
        <Map />
      </div>
    </div>
  );
};

export default MainPage;
