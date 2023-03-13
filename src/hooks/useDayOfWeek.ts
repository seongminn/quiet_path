import { useMemo } from 'react';

const getDayOfWeek = (date: Date) => {
  const weekdays = useMemo(
    () => ['일요일', '평일', '평일', '평일', '평일', '평일', '토요일'],
    []
  );
  const dayOfWeek = (date as Date).getDay();

  return weekdays[dayOfWeek];
};

export default getDayOfWeek;
