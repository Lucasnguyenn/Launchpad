import { create } from 'zustand';

interface RefetchState {
  refetch: boolean;
  setRetch: () => void;
}

const useRefetchTimeLineStore = create<RefetchState>((set) => ({
  refetch: false,
  setRetch: () => set((state) => ({ refetch: !state.refetch })),
}));

export default useRefetchTimeLineStore;
