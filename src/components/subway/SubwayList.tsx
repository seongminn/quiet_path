import { SubwayLocationObj } from '@/types/subway';
import { InfoContainer } from '@/components/maps/infos';
import tw, { styled } from 'twin.macro';
import SubwayName from './SubwayName';
import Button from '../common/Button/Button';
import { useRecoilState } from 'recoil';
import { dayState } from '@/recoil/atoms/dayState';

const Container = styled.section([
  tw`mobile:(w-full h-auto)`,
  tw`laptop:(flex flex-col justify-start items-start min-w-[150px] max-w-[450px] w-full h-full rounded-10 mr-40 pr-20)`,
]);

const List = tw.div`
  py-10 pr-40 w-full
`;

const SubwayList = ({
  line,
  subwayList,
}: {
  line: number;
  subwayList: SubwayLocationObj[] | null;
}) => {
  const [days, setDays] = useRecoilState(dayState);
  const handleDays = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!e.currentTarget.textContent) return;

    setDays(e.currentTarget.textContent);
  };

  return (
    <Container>
      <div css={tw`flex justify-between items-center w-full`}>
        <SubwayName />
        <div tw='inline-flex' role='group'>
          <Button
            onClick={handleDays}
            type={days === '평일' ? 'primary' : 'default'}
            size='small'
            props={[tw`text-14 mb-20`]}
          >
            평일
          </Button>
          <Button
            onClick={handleDays}
            type={days === '토요일' ? 'primary' : 'default'}
            size='small'
            props={[tw`text-14 mb-20`]}
          >
            토요일
          </Button>
        </div>
      </div>
      <div
        css={[
          tw`flex flex-col justify-start overflow-y-scroll`,
          tw`mobile:(hidden)`,
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
