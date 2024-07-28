import { useEffect, useState } from 'react';

export function useStakers() {
  const [stakers, setStakers] = useState({
    stakeRatio: 0,
    totalStakeAmount: 0,
  });

  useEffect(() => {
    setStakers({
      stakeRatio: 0,
      totalStakeAmount: 0,
    });
  }, []);

  return stakers;
}
