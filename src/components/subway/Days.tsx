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
    <div tw='tablet:(flex-row) flex-stack mb-20' role='group'>
      <Button
        onClick={handleDays}
        type={days === '평일' ? 'primary' : 'default'}
        size='small'
        props={[tw`text-sm`]}
      >
        평일
      </Button>
      <Button
        onClick={handleDays}
        type={days === '토요일' ? 'primary' : 'default'}
        size='small'
        props={[tw`text-sm`]}
      >
        토요일
      </Button>
    </div>
  );
};

export default Days;
