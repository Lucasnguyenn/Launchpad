import { FC } from 'react';
import { Container } from 'components/Container';
import styles from './Footer.module.scss';
import classNames from 'classnames';

import telephone from 'images/icon/icon-contact.svg';
import email from 'images/icon/icon-email.svg';
import location from 'images/icon/icon-location.svg';
import Unihub from 'images/logo/unihub.png';
import { helpfulLinkItem, infoItem, shortcutItem } from 'contants/common';
import { Text } from 'components/Text';
import Icon from 'components/Icon';

interface FooterProps {
  className?: string;
}

export const Footer: FC<FooterProps> = ({ className }) => {
  return (
    <footer className={classNames(styles.footer, className)}>
      <Container>
        <div className={styles.footer_main}>
          <div className={styles.logo_wrapper}>
            <div className="flex items-center gap-5">
              <img
                src={'/images/logo/hub-global-pixel.png'}
                alt="Footer logo"
                className="w-[62px] h-auto"
              />
              <Text
                type="heading3-semi-bold"
                className="text-neutral-10 uppercase"
              >
                HUB
              </Text>
            </div>
            <Text type="body2" className="text-white">
              © 2023
            </Text>
            <a href={'#'}>
              <Text className="underline text-white" type="body2">
                ABOUT US
              </Text>
            </a>
          </div>
          <div className={styles.info_wrapper}>
            <div className={styles.col}>
              <Text
                type="title1-semi-bold"
                font="montserratFont"
                className="text-white-70"
              >
                Shortcuts
              </Text>
              {shortcutItem.map((item, index) => (
                <a key={index} href={item.link}>
                  <Text type="body2">{item.label}</Text>
                </a>
              ))}
            </div>
            <div className={styles.col}>
              <Text
                type="title1-semi-bold"
                font="montserratFont"
                className="text-white-70"
              >
                Helpful links
              </Text>
              {helpfulLinkItem.map((item, index) => (
                <a key={index} href={item.link}>
                  <Text type="body2">{item.label}</Text>
                </a>
              ))}
            </div>
            <div className={styles.col}>
              <Text
                type="title1-semi-bold"
                font="montserratFont"
                className="text-white-70"
              >
                Contact
              </Text>
              <Text
                className="flex items-center gap-2 text-neutral-10"
                type="body2"
              >
                <Icon name="map-01" size={20} />
                {infoItem.location}
              </Text>
              <a href={`tel: ${infoItem.phone}`}>
                <Text
                  className="flex items-center gap-2 text-neutral-10"
                  type="body2"
                >
                  <Icon name="phone" className="text-white" />
                  <span>{infoItem.phone}</span>
                </Text>
              </a>

              <a href={`mailto: ${infoItem.email}`}>
                <Text
                  className="flex items-center gap-2 text-neutral-10"
                  type="body2"
                >
                  <Icon name="mail-05" />
                  {infoItem.email}
                </Text>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.extra}>
          <div className="flex gap-2 md:gap-4">
            <a href={'#'}>
              <Text type="body2" className="text-white-70">
                Private Policy
              </Text>
            </a>
            <Text type="body2" className="text-white-70">
              ·
            </Text>
            <a href={'#'}>
              <Text type="body2" className="text-white-70">
                Term of Conditions
              </Text>
            </a>
          </div>
          <Text type="body2" className="text-white-70">
            Reflect App, LLC. All rights reserved.
          </Text>
        </div>
      </Container>
    </footer>
  );
};
