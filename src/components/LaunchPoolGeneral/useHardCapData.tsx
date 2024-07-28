import { IDO_ABI } from 'abi/ido-abi';
import { TOKEN_CONTRACT } from 'util/constant';
import { useChainId, useContractReads } from 'wagmi';

export function useHardCapData() {
  const chainId = useChainId();
  const IDOContractName = TOKEN_CONTRACT[chainId].IDO_ADDRESS;

  const data = useContractReads({
    contracts: [
      {
        address: IDOContractName,
        abi: IDO_ABI,
        functionName: 'hardCap',
      },
      {
        address: IDOContractName,
        abi: IDO_ABI,
        functionName: 'allocation',
      },
      {
        address: IDOContractName,
        abi: IDO_ABI,
        functionName: 'hardCapPerUser',
      },
    ],
  });

  return data;
}
