import { useEffect } from 'react';
import { Gnb } from '@/components/common/Gnb';
import tw from 'twin.macro';
import { Outlet } from 'react-router-dom';

const Wrapper = tw.div`h-screen flex-center`;

const MainSection = tw.section`
  w-full h-4/5 min-w-[280px] min-h-[500px] rounded-10 pr-40
  bg-white drop-shadow-lg
  flex items-center flex-row justify-between 
  px-40
  foldable:(w-2/3)
`;

const MainPage = () => {
  useEffect(() => {
    document.title = '누리길 | 조용한 귀가를 누리길';
  }, []);

  return (
    <Wrapper>
      <MainSection>
        <Gnb />
        <Outlet />
      </MainSection>
    </Wrapper>
  );
};

export default MainPage;
