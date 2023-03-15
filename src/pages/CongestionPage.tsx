import { useRecoilValue } from 'recoil';
import { lineState } from '@/recoil/atoms/lineState';
import { MapContainer } from '@/components/maps';
import { SubwayList } from '@/components/subway';
import { getSubwayLocations } from '@/query';
import { SubwayLocationObj } from '@/types/subway';
import tw from 'twin.macro';

const CongestionPage = () => {
  const line = useRecoilValue(lineState);
  const subwayList: SubwayLocationObj[] = getSubwayLocations({ line });

  return (
    <div
      css={[
        tw`flex-stack w-full h-5/6 mt-70`,
        tw`tablet:mt-0`,
        tw`laptop:(flex flex-row justify-around items-center gap-20 w-full h-5/6)`,
      ]}
    >
      <SubwayList line={line} subwayList={subwayList} />
      <MapContainer line={line} subwayList={subwayList} />
    </div>
  );
};

export default CongestionPage;
