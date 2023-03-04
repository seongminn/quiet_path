import { SubwayLocation } from '@/types/subway';
import { InfoContainer } from '@/components/maps/infos';
import tw, { css, styled } from 'twin.macro';
import colorConverter from '@/lib/colorConverter';

const Container = styled.section([
  tw`flex flex-col justify-start items-start`,
  tw`min-w-[300px] max-w-[450px] w-full h-5/6 rounded-10`,
]);

const SubwayName = styled.h4<{ name: string }>(({ name }) => [
  css({
    color: colorConverter[`${name}`],
  }),
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
      <SubwayName name={`${line}호선`}>{line}호선</SubwayName>
      {/* <div css={[tw`h-full w-full rounded-5 mt-20`]}>
        {subways.map((subway) => (
          <List key={subway + '호선'} onClick={handleLine}>
            {subway}
          </List>
        ))}
      </div> */}
      <div
        css={[
          tw`flex flex-col justify-start gap-20 h-full w-full pt-10 rounded-5 mt-20  overflow-y-scroll`,
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
