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
    .map((item: any) => ({
      name: `${item.역명}역`,
      position: { lat: Number(item.위도), lng: Number(item.경도) },
    }));
};

export default getLatLng;
