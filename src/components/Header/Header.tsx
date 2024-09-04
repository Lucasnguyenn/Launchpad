import { useCallback, useEffect, useState } from 'react';

import { Web3Button, Web3NetworkSwitch } from '@web3modal/react';
import { motion, useAnimate } from 'framer-motion';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useAccount, useConnect } from 'wagmi';
import { useAccountModal, useConnectModal } from '@rainbow-me/rainbowkit';
import classNames from 'classnames';

import styles from './Header.module.scss';

import { Container } from 'components/Container';
import { Text } from 'components/Text';
import { Button } from 'components/Button';
import { navigatorItem } from 'contants/common';
import Icon from 'components/Icon';

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
  const [isOpen, setIsOpen] = useState(false);
  //   const windowDimensions = window.innerWidth;
  const [currentAddress, setCurrentAddress] = useState('');
  const { address, isConnected } = useAccount();
  const [status, setStatus] = useState('');

  const { openAccountModal } = useAccountModal();
  const { openConnectModal } = useConnectModal();
  const { error, isLoading } = useConnect();

  useEffect(() => {
    setCurrentAddress(address ?? '');
  }, [address]);

  useEffect(() => {
    if (isConnected) {
      setStatus('success');
    }

    if (error) {
      setStatus('error');
    }

    setTimeout(() => {
      setStatus('');
    }, 2000);
  }, [isConnected, error]);

  const scope = useMenuAnimation(isOpen);

  const handleClick = useCallback(
    (e: any) => {
      const isInUse = scope.current.contains(e.target);

      if (isInUse) {
        return;
      }

      setIsOpen(false);
    },
    [scope]
  );

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  }, [handleClick, scope]);

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
                src={'images/logo/hub-global-pixel.png'}
                alt="Main logo"
                className="cursor-pointer h-12 w-auto"
              />
              <Text type="heading3-bold" className="uppercase text-white">
                HUB
              </Text>
            </a>

            <div className={classNames(styles.menu, 'max-lg:!hidden')}>
              {navigatorItem.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.link}
                  className={classNames(styles.link, {
                    [styles.active]: location.pathname == item.link,
                  })}
                >
                  <Text type="heading6-bold">{item.label}</Text>
                </NavLink>
              ))}
            </div>

            <div className="flex items-center gap-5 max-lg:hidden">
              <Button type="outlined" size="medium" className="!px-10">
                Polygon
              </Button>
              {currentAddress ? (
                <Button type="primary" size="medium" onClick={openAccountModal}>
                  {currentAddress.slice(0, 2)}...{currentAddress.slice(-4)}
                </Button>
              ) : (
                <Button type="primary" size="medium" onClick={openConnectModal}>
                  Connect Wallet
                </Button>
              )}
            </div>

            {/* menu mobile */}
            <div className="lg:hidden relative" ref={scope}>
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className="text-[15px] leading-5 px-3 py-2 md:py-3 rounded-full  flex flex-row items-center gap-2"
              >
                <Icon className="xl:hidden block text-white" name="menu-01" />
              </motion.button>

              <ul
                className="fixed right-0 left-0 top-[60px] bg-black p-6 rounded-2xl z-30 flex flex-col gap-2"
                style={{
                  clipPath: 'inset(0% 0% 100% 100% round 10px)',
                }}
              >
                {/* <li className="md:hidden block text-base text-grey6 mb-4">Menu</li> */}
                {navigatorItem.map((item) => {
                  return (
                    <li key={item.link}>
                      <Link
                        to={item.link}
                        className="lg:hidden w-full inline-block text-[20px] leading-[24px] text-[#9A9A9A]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
                <div className="flex items-center gap-5">
                  <Button type="outlined" size="medium" className="!px-10">
                    Polygon
                  </Button>
                  {currentAddress ? (
                    <Button
                      type="primary"
                      size="medium"
                      onClick={openAccountModal}
                    >
                      {currentAddress.slice(0, 2)}...{currentAddress.slice(-4)}
                    </Button>
                  ) : (
                    <Button
                      type="primary"
                      size="medium"
                      onClick={openConnectModal}
                    >
                      Connect Wallet
                    </Button>
                  )}
                </div>
              </ul>
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
