const padZero = (time: number) => {
  return time.toString().padStart(2, '0');
  // return ('0' + time).slice(-2); 뭐가 더 효율적일까?
};

const useTime = () => {
  const date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();

  if (minute >= 45) {
    minute = 0;
    hour++;
  } else if (minute >= 15) {
    minute = 30;
  } else {
    minute = 0;
  }

  return `${padZero(hour)}시${padZero(minute)}분`;
};

export default useTime;
