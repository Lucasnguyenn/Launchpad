import dayjs from 'dayjs';
import { useCallback, useEffect, useState } from 'react';
import useRefetchTimeLineStore from 'store/refetch-timeline';
import { getRemainingTime } from 'util/remaining-time';

interface CountDownProps {
  d: string | number;
  h: string | number;
  m: string | number;
  ss: string | number;
}

export function useRemainingTime({ timestamp }: { timestamp: number }) {
  const [diffTimestamp, setDiffTimestamp] = useState(0);
  const [remainingTime, setRemainingTime] = useState<CountDownProps>({
    d: '--',
    h: '--',
    m: '--',
    ss: '--',
  });

  const fetchTimestamp = useCallback(() => {
    setDiffTimestamp(0);
  }, []);

  useEffect(() => {
    fetchTimestamp();

    // const intervalId = setInterval(() => {
    //   fetchTimestamp();
    // }, TIME_TO_REFRETCH);

    // return () => clearInterval(intervalId);
  }, [fetchTimestamp]);

  const setRetch = useRefetchTimeLineStore((state) => state.setRetch);
  useEffect(() => {
    const interval = setInterval(() => {
      const diffTime = timestamp - (dayjs.utc().unix() + diffTimestamp);

      if (diffTime <= 0) {
        setRetch();
        clearInterval(interval);
        return setRemainingTime({
          d: '00',
          h: '00',
          m: '00',
          ss: '00',
        });
      }

      const time = getRemainingTime(diffTime);

      setRemainingTime(time);
    }, 1000);

    return () => clearInterval(interval);
  }, [diffTimestamp, setRetch, timestamp]);

  return remainingTime;
}
