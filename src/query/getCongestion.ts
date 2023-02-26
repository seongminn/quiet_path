import { useQuery } from 'react-query';
import { QueryKey } from '@/query/queryKey';
import { RequestProps, ResponseProps } from '@/types/subway';
import { fetcher } from '@/api/fetcher';
import { URLs } from '@/api/url';

const getCongestion = ({ line, investigatedDate = '평일' }: RequestProps) => {
  const { data: congestionData } = useQuery<ResponseProps>(
    QueryKey.CONGESTION,
    () => fetcher({ path: URLs.CONGESTION, page: 1, perPage: 2000 })
  );

  return congestionData?.data.filter(
    (obj) => obj.호선 === line && obj.조사일자 === investigatedDate
  );
};

export default getCongestion;
