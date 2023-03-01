import tw from 'twin.macro';
import useTime from '@/hooks/useTime';
import { useDayOfWeek } from '@/hooks';
import { getCongestion } from '@/query';
import { Clocks } from '@/types/subway';
import { Info, Skeleton } from '.';

const InfoContainer = ({ line, name }: { line: number; name: string }) => {
  const currentDay = useDayOfWeek(new Date());
  const congestion = getCongestion({ line })?.filter((item) => {
    return `${item.역명}역` === name && `${item.조사일자} === ${currentDay}`;
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
