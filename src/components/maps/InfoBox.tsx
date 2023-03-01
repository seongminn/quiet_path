import { useDayOfWeek } from '@/hooks';
import useTime from '@/hooks/useTime';
import { getCongestion } from '@/query';
import tw from 'twin.macro';

const InfoBox = ({ line, name }: { line: number; name: string }) => {
  const currentDay = useDayOfWeek(new Date());
  const initial = useTime();
  const congestion = getCongestion({ line })?.filter((item) => {
    return `${item.역명}역` === name && `${item.조사일자} === ${currentDay}`;
  });

  if (!congestion) return null;

  const getColor = (cong: number) => {
    if (cong >= 40) return tw`text-error`;
    else if (cong >= 25) return tw`text-warning`;
    else return tw`text-primary`;
  };

  return (
    <div css={tw`bg-white w-full`}>
      <h6 css={tw`mb-5`}>{name}</h6>

      {congestion?.map((obj) => (
        <div
          key={`${obj.호선}${obj.역명}${obj.구분}`}
          css={[
            tw`text-14 font-Regular font-normal flex justify-between items-center mb-2 last:(mb-0)`,
          ]}
        >
          <span>{obj.구분}</span>
          <span css={getColor(Number(obj[initial]))}>{obj[initial]}</span>
        </div>
      ))}
    </div>
  );
};

export default InfoBox;
