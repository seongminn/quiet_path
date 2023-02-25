import { fetcher } from '@/api/fetcher';
import { URLs } from '@/api/url';
import { QueryKey } from '@/query/queryKey';
import { useQuery } from 'react-query';

const getLatLng = ({ line }: { line: number }) => {
  const { data: latLngData } = useQuery(QueryKey.LAT_LNG, () =>
    fetcher({ path: URLs.LAT_LNG, page: 1, perPage: 2000 })
  );

  return latLngData?.data
    .filter((obj: any) => obj.호선 === line)
    .map((item: any) => [`${item.역명}역`, item.위도, item.경도]);
};

export default getLatLng;