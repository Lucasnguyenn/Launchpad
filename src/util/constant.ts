import { ChainConfig, ContractOnChain } from './type';

export const TOKEN_CONTRACT: Record<number, ContractOnChain> = {
  11155111: {
    IDO_ADDRESS: '0xf37D202914bD0A6eB2a6224482B1Baf36e06fE16',
    TOKEN_ADDRESS: '0xD09ecD268Fdf930C86E0205a7642c6162e5748ce',
  },
  137: {
    IDO_ADDRESS: '0x',
    TOKEN_ADDRESS: '0x',
  },
};

export const CHAIN: Record<number, ChainConfig> = {
  11155111: {
    rpcUrl: 'https://sepolia.infura.io/v3/dea2c8c95a674dab87bbd16f7921caf2',
  },
  137: {
    rpcUrl: 'https://sepolia.infura.io/v3/dea2c8c95a674dab87bbd16f7921caf2',
  },
};

export const AppConstant = {
  NATIVE_TOKEN: {
    SYMBOL: 'MATIC',
    DECIMAL_TO_SHOW: 3,
    GAS_SUB: 0.5,
  },
  TOKEN_RAISE: {
    SYMBOL: 'TREK',
    DECIMAL_TO_SHOW: 5,
  },
};
