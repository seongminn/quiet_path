import { useQuery } from 'react-query';
import { QueryKey } from '@/query/queryKey';
import {
  RequestProps,
  ResponseProps,
  SubwayCongestionApi,
} from '@/types/subway';
import { fetcher } from '@/api/fetcher';
import { URLs } from '@/api/url';

const getCongestion = ({ line, investigatedDate }: RequestProps) => {
  const { data: congestionData } = useQuery<ResponseProps<SubwayCongestionApi>>(
    QueryKey.CONGESTION,
    () => fetcher({ path: URLs.CONGESTION })
  );

  return congestionData?.data.filter(
    (obj) => obj.호선 === line && obj.조사일자 === investigatedDate
  );
};

export default getCongestion;
