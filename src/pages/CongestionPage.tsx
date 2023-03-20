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
        tw`flex flex-col justify-between items-center w-full h-5/6 mb-20`,
        tw`tablet:my-20 h-[95%] gap-10`,
        tw`laptop:(flex flex-row justify-around items-center gap-20 h-5/6 my-0)`,
      ]}
    >
      <SubwayList line={line} subwayList={subwayList} />
      <MapContainer line={line} subwayList={subwayList} />
    </div>
  );
};

export default CongestionPage;
