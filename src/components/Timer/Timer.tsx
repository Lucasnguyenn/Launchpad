import { FC } from 'react';
import styles from './index.module.scss';
import { Text } from 'components/Text';
import { useTimer } from 'react-timer-hook';
import classNames from 'classnames';
import { dateConvert } from 'util/utils';

interface TimerProps {
  date?: string;
  time?: string;
  className?: string;
  isExpired?: boolean;
}

const Timer: FC<TimerProps> = ({
  date,
  time,
  className,
  isExpired = false,
}) => {
  const deadline = dateConvert(date, time);
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: deadline,
  });

  return (
    <div className={classNames(styles.timer, className)}>
      <div className={styles.item_wrapper}>
        <div className={styles.number_wrapper}>
          <Text className={styles.item}>{Math.floor(days / 10)}</Text>
          <Text className={styles.item}>{days % 10}</Text>
        </div>
        <Text>Days</Text>
      </div>
      <div className={styles.item_wrapper}>
        <div className={styles.number_wrapper}>
          <Text className={styles.item}>{Math.floor(hours / 10)}</Text>
          <Text className={styles.item}>{hours % 10}</Text>
        </div>
        <Text>Hours</Text>
      </div>
      <div className={styles.item_wrapper}>
        <div className={styles.number_wrapper}>
          <Text className={styles.item}>{Math.floor(minutes / 10)}</Text>
          <Text className={styles.item}>{minutes % 10}</Text>
        </div>
        <Text>Minutes</Text>
      </div>
      <div className={styles.item_wrapper}>
        <div className={styles.number_wrapper}>
          <Text className={styles.item}>{Math.floor(seconds / 10)}</Text>
          <Text className={styles.item}>{seconds % 10}</Text>
        </div>
        <Text>Seconds</Text>
      </div>
    </div>
  );
};

export default Timer;
