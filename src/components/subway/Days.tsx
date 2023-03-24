import { dayState } from '@/recoil/atoms/dayState';
import { useRecoilState } from 'recoil';
import tw, { styled } from 'twin.macro';
import Button from '@/components/common/Button/Button';

const Days = () => {
  const [days, setDays] = useRecoilState(dayState);
  const handleDays = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!e.currentTarget.textContent) return;

    setDays(e.currentTarget.textContent);
  };

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

const Wrapper = styled.div([tw`tablet:(flex-row) flex-stack tablet:mb-20`]);

export default Days;
