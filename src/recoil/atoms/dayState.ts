import { useDayOfWeek } from '@/hooks';
import { InvestigatedDate } from '@/types/subway';
import { atom } from 'recoil';

const dayOfWeek = useDayOfWeek(new Date());

export const dayState = atom<InvestigatedDate>({
  key: 'DayState',
  default: dayOfWeek,
});
