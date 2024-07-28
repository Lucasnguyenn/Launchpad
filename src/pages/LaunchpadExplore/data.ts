import useSWR from 'swr';
import { ProjectResponse } from './type';

// const baseUrl = 'https://gateway.simplymuch.vn';
const baseUrl = 'http://194.163.190.102:7070/api';

async function fetcher(url: string) {
  return fetch(url).then((res) => res.json());
}

export function useProjectData() {
  const data = useSWR<ProjectResponse>(
    `${baseUrl}/projects/TREK/detail`,
    fetcher
  );

  return {
    data: data.data,
  };
}
