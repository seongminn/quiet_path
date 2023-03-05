import { SubwayLocation } from '@/types/subway';
import { InfoContainer } from '@/components/maps/infos';
import tw, { styled } from 'twin.macro';
import SubwayName from './SubwayName';

const Container = styled.section([
  tw`flex flex-col justify-start items-start`,
  tw`min-w-[300px] max-w-[450px] w-full h-5/6 rounded-10`,
]);

const List = tw.div`
  py-10 pr-20
  
  laptop:(w-[320px])
  mobile:(w-full max-w-[360px])
`;

const SubwayList = ({
  line,
  setLine,
  subwayList,
}: {
  line: number;
  setLine: React.Dispatch<React.SetStateAction<number>>;
  subwayList: SubwayLocation[] | null;
}) => {
  return (
    <Container>
      <SubwayName line={line} setLine={setLine} />
      <div
        css={[
          tw`flex flex-col justify-start gap-20 h-full w-full pt-10 rounded-5 mt-20  overflow-y-scroll`,
        ]}
      >
        {subwayList?.map((item) => (
          <div
            key={`${line} + ${item.name}`}
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
