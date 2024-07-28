export function formatDisplay(
  value: number,
  opts: Partial<{
    decimalToShow: number;
    locale: string;
    minimumDecimalToShow?: number;
  }>
) {
  const decimalToShow = opts.decimalToShow ?? 5;
  const formatter = new Intl.NumberFormat(opts.locale || 'en-US', {
    maximumFractionDigits: decimalToShow,
    minimumFractionDigits: opts?.minimumDecimalToShow ?? 0,
  });

  // if (value > 0 && value < Math.pow(10, -decimalToShow)) {
  //     return `< ${formatter.format(Math.pow(10, -decimalToShow))}`;
  // }

  return formatter.format(value);
}

export function floorNumber(value: number, decimal: number) {
  return Math.floor(value * Math.pow(10, decimal)) / Math.pow(10, decimal);
}
