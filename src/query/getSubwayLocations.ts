import { fetcher } from '@/api/fetcher';
import { URLs } from '@/api/url';
import { QueryKey } from '@/query/queryKey';
import { SubwayLocation } from '@/types/subway';
import { useQuery } from 'react-query';

const getSubwayLocations = ({ line }: { line: number }) => {
  const PATH = `STATION_${line}`;
  const { data: locationData } = useQuery<SubwayLocation[]>(
    [QueryKey.STATION, line],
    () => fetcher({ path: URLs[PATH] })
  );

  if (!locationData) return [];

  return locationData.map(({ name, location }) => ({
    name: `${name}역`,
    location: location,
  }));
};

export default getSubwayLocations;
