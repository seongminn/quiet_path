import axios from 'axios';

const { VITE_API_KEY, VITE_BASE_URL } = import.meta.env;

export const fetcher = async ({ path }: { path: string }) => {
  const URL = `${VITE_BASE_URL}${path}?page=${1}&perPage=${1000}&serviceKey=${VITE_API_KEY}`;

  try {
    const { data } = await axios.get(URL);

    return data;
  } catch (err) {
    console.error(err);
  }
};
