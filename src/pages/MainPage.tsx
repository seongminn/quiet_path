import { MapContainer } from '@/components/maps';
import { useState } from 'react';
import tw from 'twin.macro';

const Wrapper = tw.div`h-screen flex-center`;

const MainSection = tw.section`
  w-2/3 h-4/5 min-w-[440px] min-h-[500px] rounded-10 px-40
  bg-white drop-shadow-lg

  laptop:(flex items-center flex-row gap-40 justify-around)

  mobile:(flex flex-col-reverse justify-end items-center px-20)
`;

const SubwayList = tw.div`
  border-1 border-gray-400 rounded-5 
  bg-white drop-shadow-md

  laptop:(w-[320px])

  mobile:(w-full max-w-[360px])
`;

const MainPage = () => {
  const [line, setLine] = useState<number>(1);
  const handleLine = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLine(Number(e.target.value));
  };

  return (
    <Wrapper>
      <MainSection>
        <div>
          <input
            type='number'
            value={line}
            onChange={handleLine}
            max={8}
            min={1}
          />
          <SubwayList>여기</SubwayList>
        </div>
        <MapContainer line={line} />
      </MainSection>
    </Wrapper>
  );
};

export default MainPage;
