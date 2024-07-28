export function renderShortAddress(address, chars = 4) {
  if (!address) {
    return address;
  }

  if (address.length < 4) {
    return address;
  }

  return `${address.slice(0, chars)}...${address.slice(
    address.length - chars
  )}`;
}

export const formatAddress = (rawAddress: string) => {
  return renderShortAddress(rawAddress).toLowerCase();
};
