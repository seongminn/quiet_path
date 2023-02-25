import { getCongestion, getLatLng } from '@/query';

const MainPage = () => {
  const lines = getLatLng({ line: 1 });
  const subways = getCongestion({ line: 1 });

  return <div>MAIN PAGE 입니다.</div>;
};

export default MainPage;
