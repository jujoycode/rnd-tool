import { create } from 'zustand'
import type { WorkStore } from '@renderer/types/store'

export const useWorkStore = create<WorkStore>((set) => ({
  progress: 0,
  eventLogs: [],

  setProgress: (progress) => set({ progress }),
  setEventLogs: (eventLogs) => set({ eventLogs }),
}))
