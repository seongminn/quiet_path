import { InfoProps } from '@/types/subway';
import { useEffect, useState } from 'react';
import tw from 'twin.macro';

const Info = ({ classification, congestion }: InfoProps) => {
  const [message, setMessage] = useState<string>();
  const getColor = (cong: number) => {
    if (cong >= 40) return tw`text-error`;
    else if (cong >= 25) return tw`text-warning`;
    else return tw`text-primary`;
  };

  useEffect(() => {
    const data = Number((congestion / 34).toFixed(1));
    let parseMessage;

    if (data < 0.8) {
      parseMessage = `승객 수가 좌석 수보다 ${data}배 적어요 !`;
    } else if (data >= 0.8 && data <= 1.2) {
      parseMessage = `승객 수가 좌석 수와 거의 일치해요 !`;
    } else {
      parseMessage = `승객 수가 좌석 수보다 ${data}배 많아요 !`;
    }

    setMessage(parseMessage);
  }, [congestion, setMessage]);

  return (
    <div css={styles}>
      <span>{classification}</span>
      <span css={getColor(congestion)}>{message}</span>
    </div>
  );
};

export default Info;

const styles = [
  tw`text-14 font-Regular font-normal flex justify-between items-center mb-2 last:(mb-0)`,
];
