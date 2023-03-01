import { useDayOfWeek } from '@/hooks';
import useTime from '@/hooks/useTime';
import { getCongestion } from '@/query';
import tw from 'twin.macro';
import Info from './Info';

const InfoContainer = ({ line, name }: { line: number; name: string }) => {
  const currentDay = useDayOfWeek(new Date());
  const congestion = getCongestion({ line })?.filter((item) => {
    return `${item.역명}역` === name && `${item.조사일자} === ${currentDay}`;
  });
  const initial = useTime();

  if (!congestion) return null;

  return (
    <div css={tw`bg-white w-full`}>
      <h6 css={tw`mb-5`}>{name}</h6>

      {congestion.map((obj) => (
        <Info
          key={`${line}${name}${obj.구분}`}
          classification={obj.구분}
          congestion={Number(obj[initial])}
        />
      ))}
    </div>
  );
};

export default InfoContainer;
