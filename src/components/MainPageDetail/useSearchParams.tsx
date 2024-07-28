import { baseUrl } from 'components/LaunchPoolAffilitate/api';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import useRefLinkStore from 'store/ref-link-store';
import { useAccount } from 'wagmi';

/**
 * UseSearchParamData
 * Direction and get referral link ido
 *
 */

export function useSearchParamsData() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { setReflink, setWalletRefInfo } = useRefLinkStore((state) => ({
    setReflink: state.setReflink,
    setWalletRefInfo: state.setWalletRefInfo,
  }));

  const refCode = Object.fromEntries([...searchParams]).refCode;
  const { address } = useAccount();
  useEffect(() => {
    if (!refCode) {
      return;
    }

    setReflink(refCode);

    // fetch api:
    fetch(`${baseUrl}/api/user-projects?refCode=${refCode}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.success) {
          if (
            !data.data ||
            data.data.userId.toLowerCase() === address?.toLowerCase()
          ) {
            searchParams.delete('refCode');
            setSearchParams(searchParams);
            return;
          }

          setSearchParams({ refId: data.data.userId });
          setWalletRefInfo(data.data);
        }
      })
      .catch((error) => console.log('Error', error));
  }, [
    address,
    refCode,
    searchParams,
    setReflink,
    setSearchParams,
    setWalletRefInfo,
  ]);
}
