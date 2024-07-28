export function getRemainingTime(diffTime: number) {
  const days = Math.floor(diffTime / (60 * 60 * 24));
  const hourly = Math.floor((diffTime % (60 * 60 * 24)) / (60 * 60));
  const mm = Math.floor((diffTime % (60 * 60)) / 60);
  const ss = Math.floor(diffTime % 60);

  return {
    d: `0${days}`.slice(-2),
    h: `0${hourly}`.slice(-2),
    m: `0${mm}`.slice(-2),
    ss: `0${ss}`.slice(-2),
  };
}
