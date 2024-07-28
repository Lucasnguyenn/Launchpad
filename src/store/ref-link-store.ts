import { create } from 'zustand';

interface RefLinkStoreType {
  reflink: string;
  walletRefInfo: {
    projectId: number;
    userId: string;
    refCode: string;
  };
  setWalletRefInfo: (data: any) => void;
  setReflink: (url: string) => void;
}

const useRefLinkStore = create<RefLinkStoreType>((set) => ({
  reflink: '',
  walletRefInfo: {
    projectId: 0,
    userId: '',
    refCode: '',
  },
  setReflink: (url) => set((state) => ({ reflink: url })),
  setWalletRefInfo: (data) => set((state) => ({ walletRefInfo: data })),
}));

export default useRefLinkStore;
