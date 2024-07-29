import useSWR from 'swr';
import { useAccount } from 'wagmi';
import { baseUrl } from './api';

interface WalletItemType {
  amount: number;
  userId: string;
}

function fetcher(url) {
  return fetch(url).then((res) => res.json());
}

export function useReferralLink(chainId: number) {
  const { address } = useAccount();

  const data = useSWR<{ data: WalletItemType[] }>(
    `${baseUrl}/api/user-projects/TREK/referrer/${address}?chainId=${chainId}`,
    fetcher
  );

  return data;
}
