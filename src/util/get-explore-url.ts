const MUMBAI = 11155111;
const POLYGON = 137;

export function getExplorerUrl(chainId: number) {
  if (chainId === MUMBAI) {
    return 'https://mumbai.polygonscan.com/';
  }

  if (chainId === POLYGON) {
    return 'https://polygonscan.com/';
  }

  return 'https://polygonscan.com/';
}
