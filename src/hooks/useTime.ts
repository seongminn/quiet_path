import { Clocks } from '@/types/subway';
import { useCallback, useMemo } from 'react';

const useTime = () => {
  const getTimeString = useCallback((time: number) => {
    return time.toString().padStart(2, '0');
  }, []);

  const now = useMemo(() => new Date(), []);
  let hour = now.getHours();
  let minute = now.getMinutes();

  if (minute >= 45) {
    minute = 0;
    hour++;
  } else if (minute >= 15) {
    minute = 30;
  } else {
    minute = 0;
  }

  const hourString = useMemo(() => getTimeString(hour), [getTimeString, hour]);
  const minuteString = useMemo(
    () => getTimeString(minute),
    [getTimeString, minute]
  );
  const currentTime = `${hourString}시${minuteString}분`;

  if (currentTime in Clocks) {
    // 현재 시간이 Clocks 타입에 속하는 경우
    return currentTime;
  } else {
    // 현재 시간이 Clocks 타입에 속하지 않는 경우
    return false;
  }
};

export default useTime;
