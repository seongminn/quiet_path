import { InfoProps } from '@/types/subway';
import tw from 'twin.macro';

const Info = ({ classification, congestion }: InfoProps) => {
  const getColor = (cong: number) => {
    if (cong >= 40) return tw`text-error`;
    else if (cong >= 25) return tw`text-warning`;
    else return tw`text-primary`;
  };

  // if (!congestion)
  //   return (
  //     <div css={styles}>
  //       <span>지금은 운행 시간이 아니에요 !</span>
  //     </div>
  //   );

  return (
    <div css={styles}>
      <span>{classification}</span>
      <span css={getColor(congestion)}>{congestion.toFixed(1)}%</span>
    </div>
  );
};

export default Info;

const styles = [
  tw`text-14 font-Regular font-normal flex justify-between items-center mb-2 last:(mb-0)`,
];
