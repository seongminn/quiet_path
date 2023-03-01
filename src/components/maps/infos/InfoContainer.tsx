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

  if (!congestion)
    return (
      <div css={tw`bg-white w-full animate-pulse`}>
        <div css={tw`h-15 w-1/2 rounded-2 bg-gray-400 mb-5`}></div>
        <div css={tw`flex justify-between items-center mb-2`}>
          <span css={tw`h-8 w-full rounded-2 bg-gray-400`}></span>
          {/* <span css={tw`h-8 w-3/12 rounded-2 bg-gray-400`}></span> */}
        </div>
        <div css={tw`flex justify-between items-center mb-2`}>
          <span css={tw`h-8 w-8/12 rounded-2 bg-gray-400`}></span>
          <span css={tw`h-8 w-3/12 rounded-2 bg-gray-400`}></span>
        </div>
      </div>
    );

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
