import { MapContainer } from '@/components/maps';
import { useEffect, useState } from 'react';
import { SubwayList } from '@/components/subway';
import { Gnb } from '@/components/common/Gnb';
import tw from 'twin.macro';
import { getSubwayLocations } from '@/query';
import { SubwayLocationObj } from '@/types/subway';

const Wrapper = tw.div`h-screen flex-center`;

const MainSection = tw.section`
  w-2/3 h-4/5 min-w-[440px] min-h-[500px] rounded-10 pr-40
  bg-white drop-shadow-lg
  flex items-center flex-row justify-between 

  mobile:(px-40)
`;

const MainPage = () => {
  const [line, setLine] = useState<number>(1);
  const subwayList: SubwayLocationObj[] = getSubwayLocations({ line });

  useEffect(() => {
    document.title = '누리길 | 조용한 귀가를 누리길';
  }, []);

  return (
    <Wrapper>
      <MainSection>
        <Gnb />
        <div
          css={[
            tw`mobile:(flex-stack w-full h-5/6)`,
            tw`laptop:(flex flex-row justify-around items-center gap-20 w-full h-5/6)`,
          ]}
        >
          <SubwayList line={line} setLine={setLine} subwayList={subwayList} />
          <MapContainer line={line} subwayList={subwayList} />
        </div>
      </MainSection>
    </Wrapper>
  );
};

export default MainPage;
