import { useCallback, useMemo } from 'react';

const useTime = () => {
  const getTimeString = useCallback((time: number) => {
    return time.toString().padStart(2, '0');
    // return ('0' + time).slice(-2); 뭐가 더 효율적일까?
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

  return `${hourString}시${minuteString}분`;
};

export default useTime;
