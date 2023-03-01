const getDayOfWeek = (date: Date | number) => {
  const weekdays = ['일요일', '평일', '평일', '평일', '평일', '평일', '토요일'];

  if (typeof date === 'number') {
    return weekdays[date];
  }

  const dayOfWeek = (date as Date).getDay();

  return weekdays[dayOfWeek];
};

export default getDayOfWeek;
