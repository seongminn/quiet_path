import tw from 'twin.macro';
import { useDayOfWeek, useTime } from '@/hooks';
import { useRecoilValue } from 'recoil';
import { getCongestion } from '@/query';
import { Info, Skeleton } from '.';
import { dayState } from '@/recoil/atoms/dayState';
import { lineState } from '@/recoil/atoms/lineState';

const InfoContainer = ({ name }: { name: string }) => {
  const line = useRecoilValue(lineState);
  const days = useRecoilValue(dayState);
  const congestion = getCongestion({
    line,
    investigatedDate: days,
  })?.filter((item) => {
    return `${item.역명}` === name.split('(')[0];
  });
  const initial = useTime();

  if (!congestion) return <Skeleton />;

  return (
    <div css={tw`bg-white w-full`}>
      <h6 css={tw`mb-5`}>{name}</h6>
      {!initial ? (
        <span css={tw`text-14 font-Regular font-normal text-gray-600`}>
          지금은 운행 시간이 아니에요 !
        </span>
      ) : (
        congestion.map((obj) => (
          <Info
            key={`${line}${name}${obj.구분}`}
            classification={obj.구분}
            congestion={Number(obj[initial])}
          />
        ))
      )}
    </div>
  );
};

export default InfoContainer;
