import { MapContainer } from '@/components/maps';
import { useEffect, useMemo, useState } from 'react';
import { SubwayList } from '@/components/subway';
import { Gnb } from '@/components/common/Gnb';
import tw from 'twin.macro';
import { getSubwayLocations } from '@/query';
import { SubwayLocation } from '@/types/subway';

const Wrapper = tw.div`h-screen flex-center`;

const MainSection = tw.section`
  w-2/3 h-4/5 min-w-[440px] min-h-[500px] rounded-10 pr-40
  bg-white drop-shadow-lg

  laptop:(flex items-center flex-row gap-40 justify-between)
  mobile:(flex flex-col-reverse justify-end items-center pr-20)
`;

const MainPage = () => {
  const [line, setLine] = useState<number>(1);
  const subwayList: SubwayLocation[] = getSubwayLocations({ line });

  return (
    <Wrapper>
      <MainSection>
        <Gnb />
        <div css={tw`flex justify-around items-center w-full h-5/6`}>
          <SubwayList line={line} setLine={setLine} subwayList={subwayList} />
          <MapContainer line={line} subwayList={subwayList} />
        </div>
      </MainSection>
    </Wrapper>
  );
};

export default MainPage;
