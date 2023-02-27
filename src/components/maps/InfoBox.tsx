import { getCongestion } from '@/query';
import tw from 'twin.macro';

const InfoBox = ({ line, name }: { line: number; name: string }) => {
  const congestion = getCongestion({ line })?.filter((item) => {
    return `${item.역명}역` === name;
  });

  return (
    <div css={tw`bg-white w-200 text-16 border-primary border-2`}>
      {congestion?.map((item) => (
        <div key={`${item.호선}${item.역명}${item.구분}`}>
          <p>{item.구분}</p>
          <p>{item.역명}</p>
          <p>{item['6시00분']}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoBox;
