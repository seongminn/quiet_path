import { QueryClient } from 'react-query';

const getClient = (() => {
  let client: QueryClient | null = null;

  return () => {
    if (!client) {
      client = new QueryClient({
        defaultOptions: {
          queries: {
            cacheTime: 1000 * 60 * 60 * 24,
            staleTime: 1000,
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
          },
        },
      });
    }

    return client;
  };
})();

export default getClient;
