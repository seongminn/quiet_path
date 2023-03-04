import { SubwayLocation } from '@/types/subway';
import { InfoContainer } from '@/components/maps/infos';
import tw, { styled } from 'twin.macro';

const Container = styled.section([
  tw`flex flex-col justify-start items-start`,
  tw`min-w-[300px] h-5/6 rounded-10`,
]);

const List = tw.div`
  py-10 pr-20
  
  laptop:(w-[320px])
  mobile:(w-full max-w-[360px])
`;

const Category = styled.div<{ isActive: boolean }>(({ isActive }) => [
  tw`flex justify-center items-center`,
]);

const subways = [1, 2, 3, 4, 5, 6, 7, 8];

const SubwayList = ({
  line,
  setLine,
  subwayList,
}: {
  line: number;
  setLine: React.Dispatch<React.SetStateAction<number>>;
  subwayList: SubwayLocation[] | null;
}) => {
  const handleLine = (e: React.MouseEvent<HTMLSpanElement>) => {
    const nextLine = Number(e.currentTarget.textContent?.slice(0, 1));

    if (line === nextLine) return;
    setLine(nextLine);
  };

  return (
    <Container>
      <h4>{line}호선</h4>
      {/* <div css={[tw`h-full w-full rounded-5 mt-20`]}>
        {subways.map((subway) => (
          <List key={subway + '호선'} onClick={handleLine}>
            {subway}
          </List>
        ))}
      </div> */}
      <div
        css={[
          tw`flex-stack gap-20 h-full w-full pt-10 rounded-5 mt-20  overflow-y-scroll`,
        ]}
      >
        {subwayList?.map((item) => (
          <div
            css={tw`relative not-last:after:(content-[''] w-50 h-1 bg-gray-400 absolute bottom-[-10px] left-0)
          `}
          >
            <List key={item.name}>
              <InfoContainer line={line} name={item.name} />
            </List>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default SubwayList;
