import { Web3Button, Web3NetworkSwitch } from '@web3modal/react';
import cx from 'classnames';
import { motion, useAnimate } from 'framer-motion';
import logo from 'images/avatar/logo_hub_dex.png';
import { useCallback, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useAccount, useConnect } from 'wagmi';
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from '@material-tailwind/react';
import { useAccountModal, useConnectModal } from '@rainbow-me/rainbowkit';
import classNames from 'classnames';

import styles from './Header.module.scss';
import { Container } from 'components/Container';

import Unihub from 'images/logo/unihub.png';
import { Text } from 'components/Text';
import { navigatorItem } from 'contants/common';

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      'ul',
      {
        clipPath: isOpen
          ? 'inset(0% 0% 0% 0% round 10px)'
          : 'inset(0% 0% 100% 100% round 10px)',
      },
      {
        type: 'spring',
        bounce: 0,
        duration: 0.5,
      }
    );
  }, [animate, isOpen]);

  return scope;
}

export function HeaderComponent() {
    const location = useLocation();
  //   const [isOpen, setIsOpen] = useState(false);
  //   const windowDimensions = window.innerWidth;
  //   const [currentAddress, setCurrentAddress] = useState('');
  //   const { address, isConnected } = useAccount();
  //   const [status, setStatus] = useState('');

  //   const { openAccountModal } = useAccountModal();
  //   const { openConnectModal } = useConnectModal();
  //   const { error, isLoading } = useConnect();

  //   useEffect(() => {
  //     setCurrentAddress(address ?? '');
  //   }, [address]);

  //   useEffect(() => {
  //     if (isConnected) {
  //       setStatus('success');
  //     }

  //     if (error) {
  //       setStatus('error');
  //     }

  //     setTimeout(() => {
  //       setStatus('');
  //     }, 2000);
  //   }, [isConnected, error]);

  //   const scope = useMenuAnimation(isOpen);

  //   const handleClick = useCallback(
  //     (e: any) => {
  //       const isInUse = scope.current.contains(e.target);

  //       if (isInUse) {
  //         return;
  //       }

  //       setIsOpen(false);
  //     },
  //     [scope]
  //   );

  //   useEffect(() => {
  //     document.addEventListener('click', handleClick);

  //     return () => document.removeEventListener('click', handleClick);
  //   }, [handleClick, scope]);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       const elementNN = document
  //         .getElementById('networkSwitch')
  //         ?.shadowRoot?.querySelector('w3m-button-big');

  //       const elementButton = elementNN?.shadowRoot?.querySelector('button');
  //       const elementImage = elementNN?.querySelector('w3m-network-image');

  //       if (elementButton && elementImage) {
  //         elementButton.style.height = windowDimensions <= 768 ? '38px' : '42px';
  //         elementButton.style.backgroundColor = '#1E1E1E';
  //         elementButton.style.borderRadius = '12px';
  //         elementButton.style.padding = '17px 32px';
  //         elementButton.style.minWidth = '167px';
  //         elementImage.style.height = '0px';
  //         elementImage.style.width = '6px';
  //         elementImage.style.marginRight = '0px';

  //         return clearInterval(interval);
  //       }
  //     }, 20);

  //     return () => clearInterval(interval);
  //   }, [address, windowDimensions]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const elm = document.querySelector('.web3button');
  //     const button = elm?.querySelector('w3m-core-button');
  //     const elementButton =
  //       button?.shadowRoot?.querySelector('w3m-connect-button');
  //     const elementButton2 =
  //       elementButton?.shadowRoot?.querySelector('w3m-button-big');
  //     const butt = elementButton2?.shadowRoot?.querySelector('button');

  //     if (butt) {
  //       butt.style.height = '58px';
  //       butt.style.minWidth = '167px';
  //     }

  //     return clearInterval(interval);
  //   }, 50);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <header id="header" className={styles.head}>
      <Container>
        <div className={styles.header_wrapper}>
          <div className={styles.header}>
            <a title="logo" href={'/'} className="flex items-center gap-2">
              <img
                src={Unihub}
                alt="Main logo"
                className="cursor-pointer h-12 w-auto"
              />
              <Text type="heading3-bold" className="uppercase text-white">
                HUB
              </Text>
            </a>

            <div className={styles.menu}>
              {navigatorItem.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className={classNames(styles.link, {
                    [styles.active]: location.pathname == item.link,
                  })}
                >
                  <Text type='heading6-bold'>
                    {item.label}
                  </Text>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

export function Header() {
  // const { pathname } = useLocation();

  // if (pathname === '/hub-ido') {
  //   return <></>;
  // }

  return <HeaderComponent />;
}
