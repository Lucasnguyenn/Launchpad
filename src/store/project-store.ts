import { ProjectResponseType } from 'pages/LaunchpadExplore/type';
import { create } from 'zustand';

interface ProjectStore {
  data: ProjectResponseType;
  setProject: (data: ProjectResponseType) => void;
}

const useProjectStore = create<ProjectStore>((set) => ({
  data: {} as any,
  setProject: (data: ProjectResponseType) => {
    set(() => ({
      data,
    }));
  },
}));

export default useProjectStore;
