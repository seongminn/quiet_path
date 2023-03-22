import { SubwayLocationObj } from '@/types/subway';
import { InfoContainer } from '@/components/maps/infos';
import tw, { styled } from 'twin.macro';
import { SubwayName, Days } from '.';
import { useRecoilState, useRecoilValue } from 'recoil';
import { subwayListState } from '@/recoil/atoms/subwayListState';

const Container = styled.section([
  tw`w-full h-auto`,
  tw`laptop:(flex flex-col justify-start items-start min-w-[150px] max-w-[350px] w-full h-full rounded-10 mx-20)`,
]);

const List = tw.div`
py-10 pr-20 w-full not-last:(mb-20)
relative not-last:after:(content-[''] w-50 h-1 bg-gray-400 absolute bottom-[-10px] left-0)
laptop:(first-of-type:pt-0 last-of-type:pb-0)
`;

const SubwayList = ({
  line,
  subwayList,
}: {
  line: number;
  subwayList: SubwayLocationObj[] | null;
}) => {
  const [clicked, setClicked] = useRecoilState(subwayListState);
  return (
    <Container>
      <div css={tw`flex justify-between items-center w-full`}>
        <SubwayName />
        <Days />
      </div>
      <div
        css={[
          tw`flex flex-col justify-start`,
          tw`scrollbar scrollbar-thumb-gray-600 scrollbar-w-4 scrollbar-thumb-rounded-2 scrollbar-track-transparent`,
          tw`absolute transition-all w-full bottom-0 left-0 rounded-t-10 z-30`,

          clicked ? tw`bg-white h-[600px]` : tw`h-50 opacity-[0.01]`,

          tw`laptop:(static flex flex-col justify-start gap-20 h-full w-full rounded-5 opacity-100 overflow-y-scroll mt-10)`,
        ]}
      >
        <div
          tw='py-25 h-50 cursor-pointer hover:bg-gray-100 laptop:hidden'
          data-drawer-toggle='drawer-swipe'
          onClick={() => setClicked((prev) => !prev)}
        >
          <span tw='absolute w-30 h-4 -translate-x-1/2 bg-gray-400 rounded-lg top-10 left-1/2 dark:bg-gray-600'></span>
        </div>
        <div
          css={tw`overflow-y-scroll scrollbar scrollbar-thumb-gray-600 scrollbar-w-4 scrollbar-thumb-rounded-2 scrollbar-track-transparent px-20 laptop:pl-0`}
        >
          {subwayList?.map((item) => (
            <List key={line + item.name}>
              <InfoContainer name={item.name} />
            </List>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default SubwayList;
