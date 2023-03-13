import { dayState } from '@/recoil/atoms/dayState';
import { useRecoilState } from 'recoil';
import tw from 'twin.macro';
import Button from '@/components/common/Button/Button';

const Days = () => {
  const [days, setDays] = useRecoilState(dayState);
  const handleDays = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!e.currentTarget.textContent) return;

    setDays(e.currentTarget.textContent);
  };

  return (
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
  );
};

export default Days;
