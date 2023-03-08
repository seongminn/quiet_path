import { fetcher } from '@/api/fetcher';
import { URLs } from '@/api/url';
import { QueryKey } from '@/query/queryKey';
import {
  ResponseProps,
  SubwayLocationApi,
  SubwayLocationObj,
} from '@/types/subway';
import { useQuery } from 'react-query';

const getSubwayLocations = ({
  line,
}: {
  line: number;
}): SubwayLocationObj[] => {
  const PATH = `STATION_${line}`;
  const { data: locationData } = useQuery<ResponseProps<SubwayLocationApi>>(
    [QueryKey.STATION, line],
    () => fetcher({ path: URLs[PATH] })
  );

  if (!locationData) return [];

  return locationData.data
    .filter((data) => data.철도운영기관명 === '서울교통공사')
    .map(({ 역명, 위도, 경도 }) => ({
      name: `${역명}`,
      location: { lat: Number(위도), lng: Number(경도) },
    }));
};

export default getSubwayLocations;
