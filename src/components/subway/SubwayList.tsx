import { SubwayLocationObj } from '@/types/subway';
import { InfoContainer } from '@/components/maps/infos';
import tw, { styled } from 'twin.macro';
import { SubwayName, Days } from '.';

const Container = styled.section([
  tw`w-full h-auto`,
  tw`laptop:(flex flex-col justify-start items-start min-w-[150px] max-w-[350px] w-full h-full rounded-10 mx-20)`,
]);

const List = tw.div`
  py-10 pr-20 w-full
`;

const SubwayList = ({
  line,
  subwayList,
}: {
  line: number;
  subwayList: SubwayLocationObj[] | null;
}) => {
  return (
    <Container>
      <div css={tw`flex justify-between items-center w-full`}>
        <SubwayName />
        <Days />
      </div>
      <div
        css={[
          tw`flex flex-col justify-start`,
          tw`overflow-y-scroll hidden`,
          tw`laptop:(flex flex-col justify-start gap-20 h-full w-full pt-10 rounded-5 mt-20)`,
        ]}
      >
        {subwayList?.map((item) => (
          <div
            key={`${line} + ${item.name}`}
            css={tw`relative not-last:after:(content-[''] w-50 h-1 bg-gray-400 absolute bottom-[-10px] left-0)
          `}
          >
            <List key={item.name}>
              <InfoContainer name={item.name} />
            </List>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default SubwayList;
