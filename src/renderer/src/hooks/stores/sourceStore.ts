import { create } from "zustand";
import type { SourceStore } from "@renderer/types";

export const useSourceStore = create<SourceStore>((set) => ({
  // 공통 상태
  operation: null,
  source: null,
  drawerOpened: false,

  // 소스별 상태
  sourceConfig: {
    lambda: {
      version: 'v2',
      installPackages: false,
      installType: 'all',
      selectedRepos: [],
    },
    ecs: {},
    framework: {},
    application: {},
    studio: {},
  },

  // 액션
  setOperation: (operation) => set({ operation }),

  setSource: (source) => set({ source }),

  setDrawerOpened: (isOpen) => set({ drawerOpened: isOpen }),

  updateSourceConfig: (sourceType, config) =>
    set((state) => ({
      sourceConfig: {
        ...state.sourceConfig,
        [sourceType]: { ...state.sourceConfig[sourceType], ...config }
      }
    })),

  resetSourceConfig: (sourceType) =>
    set((state) => ({
      sourceConfig: {
        ...state.sourceConfig,
        [sourceType]: {} // 또는 초기값으로 리셋
      }
    }))
}));