import { useEffect } from 'react';
import { Gnb } from '@/components/common/Gnb';
import { Outlet } from 'react-router-dom';
import tw from 'twin.macro';

const Wrapper = tw.div`h-screen flex-center fixed overflow-hidden tablet:(static)`;

const MainSection = tw.section`
  relative
  overflow-y-scroll [-webkit-overflow-scrolling: touch]
  w-screen h-screen px-20
  bg-gray-300 drop-shadow-lg
  flex items-center flex-col justify-center
  tablet:(flex-row justify-between bg-white w-2/3 h-4/5 min-w-[280px] min-h-[500px] rounded-10)
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
