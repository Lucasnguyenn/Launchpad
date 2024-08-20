import { Container } from 'components/Container';
import { Text } from 'components/Text';
import classNames from 'classnames';
import styles from './index.module.scss';
import LaunchpadItem from './LaunchpadItem';

export function Launchpad() {
  return (
    <div className={classNames(styles.background_image, 'py-[80px]')}>
      <Container>
        <Text
          type="heading2-bold"
          element="h2"
          className="text-white text-center text-glow uppercase"
        >
          Launchpad
        </Text>

        <div>
          <LaunchpadItem />
        </div>
      </Container>
    </div>
  );
}
