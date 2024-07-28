import { Web3Button, Web3NetworkSwitch } from '@web3modal/react';
import cx from 'classnames';
import { motion, useAnimate } from 'framer-motion';
import logo from 'images/avatar/logo_hub_dex.png';
import { useCallback, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAccount, useConnect } from 'wagmi';
import { NavBarMenuData } from './data';
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from '@material-tailwind/react';
import { useAccountModal, useConnectModal } from '@rainbow-me/rainbowkit';

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
  const [isOpen, setIsOpen] = useState(false);
  const windowDimensions = window.innerWidth;
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

  useEffect(() => {
    const interval = setInterval(() => {
      const elementNN = document
        .getElementById('networkSwitch')
        ?.shadowRoot?.querySelector('w3m-button-big');

      const elementButton = elementNN?.shadowRoot?.querySelector('button');
      const elementImage = elementNN?.querySelector('w3m-network-image');

      if (elementButton && elementImage) {
        elementButton.style.height = windowDimensions <= 768 ? '38px' : '42px';
        elementButton.style.backgroundColor = '#1E1E1E';
        elementButton.style.borderRadius = '12px';
        elementButton.style.padding = '17px 32px';
        elementButton.style.minWidth = '167px';
        elementImage.style.height = '0px';
        elementImage.style.width = '6px';
        elementImage.style.marginRight = '0px';

        return clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [address, windowDimensions]);

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
    <header
      id="header"
      className="relative md:h-[120px] px-4 md:px-[48px] bg-black flex-between gap-[12px] xl:gap-[66px]"
    >
      <Link to="/" className="h-[76px] aspect-[197/76]">
        <img src={logo} alt="IMG" className="w-full h-full" />
      </Link>

      {/* Main menu */}
      <ul className="hidden xl:flex items-center justify-start gap-[12px] xl:gap-[17px] flex-1">
        {NavBarMenuData.map((item) => {
          return (
            <li
              key={item.id}
              className="h-[56px] md:px-[20px] flex justify-center items-center"
            >
              <NavLink
                to={item.path}
                className={({ isActive }) => {
                  return cx(
                    'text-[20px] font-normal font-cabin leading-[24px] text-transparent16 hover:text-transparent17 transition-all',
                    {
                      'text-transparent17': isActive,
                    }
                  );
                }}
              >
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div className="flex gap-4 lg:min-w-[200px] lg:justify-end">
        {currentAddress ? (
          <div className="flex gap-4 lg:justify-end">
            <Button
              variant="outlined"
              color="white"
              className="rounded-full uppercase text-[10px] py-2 px-3 lg:py-2 lg:px-5"
              onClick={openAccountModal}
              onResize={() => {}}
              onResizeCapture={() => {}}
            >
              {currentAddress.slice(0, 2)}...{currentAddress.slice(-4)}
            </Button>
          </div>
        ) : (
          <Button
            variant="outlined"
            color="white"
            className="rounded-full text-[10px] py-2 px-3 lg:py-2 lg:px-5"
            onClick={openConnectModal}
            onResize={() => {}}
            onResizeCapture={() => {}}
          >
            Connect Wallet
          </Button>
        )}
      </div>

      {/* menu mobile */}
      <div className="xl:hidden relative" ref={scope}>
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="text-[15px] leading-5 text-black px-3 py-2 md:py-3 rounded-full bg-gray9 flex flex-row items-center gap-2"
        >
          <p className="xl:hidden block text-white">Menu</p>
        </motion.button>

        <ul
          className="absolute right-0 top-[56px] bg-[cornsilk] p-6 rounded-2xl min-w-[320px] z-30 flex flex-col gap-2"
          style={{
            clipPath: 'inset(0% 0% 100% 100% round 10px)',
          }}
        >
          {/* <li className="md:hidden block text-base text-grey6 mb-4">Menu</li> */}
          {NavBarMenuData.map((item) => {
            return (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className="md:hidden w-full inline-block text-[20px] leading-[24px] text-[#9A9A9A]"
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
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
