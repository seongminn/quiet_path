import { fetcher } from '@/api/fetcher';
import { URLs } from '@/api/url';
import { QueryKey } from '@/query/queryKey';
import { useQuery } from 'react-query';

type LocationType = {
  name: string;
  lat: number;
  lng: number;
};

const getSubwayLocations = ({ line }: { line: number }) => {
  const PATH = `STATION_${line}`;
  const { data: locationData } = useQuery<LocationType[]>(
    [QueryKey.STATION, line],
    () => fetcher({ path: URLs[PATH] })
  );

  if (!locationData) return [];

  return locationData.map((location: LocationType) => ({
    name: `${location.name}역`,
    location: { lat: location.lat, lng: location.lng },
  }));
};

export default getSubwayLocations;
