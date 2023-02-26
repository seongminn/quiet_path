import Map from '@/components/Map/Map';
import { getCongestion, getLatLng } from '@/query';
import tw, { css } from 'twin.macro';

const Wrapper = tw.div`h-screen flex-center`;

const Container = tw.section`
  w-2/3 h-4/5 min-w-[440px] min-h-[500px] rounded-10
  bg-white drop-shadow-lg
  px-40

  laptop:(flex items-center flex-row gap-40 justify-around)

  mobile:(flex flex-col-reverse gap-20 items-center px-20)
`;

const SubwayList = tw.div`
  border-1 border-gray-400 rounded-5 
  bg-white drop-shadow-md

  laptop:(w-[320px])

  mobile:(w-full max-w-[360px])
`;

const MainPage = () => {
  const subwayList = getLatLng({ line: 1 });

  return (
    <Wrapper>
      <Container>
        <SubwayList>여기</SubwayList>
        <Map subwayList={subwayList} />
      </Container>
    </Wrapper>
  );
};

export default MainPage;
