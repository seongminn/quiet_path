import { useEffect } from 'react';
import { Gnb } from '@/components/common/Gnb';
import { Outlet } from 'react-router-dom';
import tw from 'twin.macro';

const Wrapper = tw.div`h-screen flex-center`;

const MainSection = tw.section`
  w-full h-full px-20
  bg-white drop-shadow-lg
  flex items-center flex-row justify-between 
  foldable:(w-2/3 h-4/5 min-w-[280px] min-h-[500px] rounded-10)
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
