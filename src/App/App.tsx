import 'styles/tailwind.css';
import 'styles/globals.scss';
import '../styles/icons.scss';

import '@rainbow-me/rainbowkit/styles.css';
import { MainPageDetail } from 'components/MainPageDetail/MainPage';
import { ScrollToTop } from 'components/ScrollToTop';
import iconClose from 'images/icon/close_line.svg';
import { Launchpad } from 'pages/LaunchpadExplore/Launchpad';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SWRConfig } from 'swr';

import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header';
import { Project } from 'pages/Project';
import {
  metaMaskWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';
import {
  connectorsForWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import Ecosystem from 'pages/Ecosystem/Ecosystem';
import HomePage from 'pages/Home/Home';
import LaunchpadDetail from 'pages/LaunchPadDetail/LaunchpadDetail';
import ProjectDetail from 'pages/ProjectDetail';
const projectId = '602b708df5872c6c542b65d09d7b990e';

const supportedChain = [sepolia];

const { chains, publicClient } = configureChains(
  [...supportedChain],
  [publicProvider()]
);
const wallets =
  process.env.NEXT_PUBLIC_NODE_ENV === 'production'
    ? [
        walletConnectWallet({
          chains,
          projectId: projectId,
        }),
      ]
    : process.env.NEXT_PUBLIC_NODE_ENV === 'staging'
    ? [
        walletConnectWallet({
          chains,
          projectId: projectId,
        }),
      ]
    : [
        walletConnectWallet({
          chains,
          projectId: projectId,
        }),
        metaMaskWallet({
          chains,
          projectId: projectId,
        }),
      ];

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: wallets,
  },
]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

function MainPageRedirect() {
  return (
    <ScrollToTop>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/hub-ido" element={<MainPageDetail />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/launchpad" element={<Launchpad />} />
        <Route path="/launchpad/:slug" element={<LaunchpadDetail />} />
        <Route path="/about" element={<Ecosystem />} />
      </Routes>
    </ScrollToTop>
  );
}

export default function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <SWRConfig>
          <BrowserRouter>
            <Header />
            <MainPageRedirect />
            <Footer />

            <ToastContainer
              // transition={bounce}
              position="top-center"
              // autoClose={false}
              hideProgressBar
              newestOnTop={false}
              closeOnClick={false}
              draggable={false}
              pauseOnHover
              style={{ width: '350px' }}
              closeButton={({ closeToast }) => {
                return (
                  <button
                    onClick={closeToast}
                    className="oke flex-shrink-0 mt-[5px]"
                  >
                    <img src={iconClose} alt="IMG" />
                  </button>
                );
              }}
            />
          </BrowserRouter>
        </SWRConfig>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
