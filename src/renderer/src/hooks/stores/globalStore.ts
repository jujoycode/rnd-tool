import { create } from 'zustand'
import type { GlobalStore } from '@renderer/types'

export const useGlobalStore = create<GlobalStore>((set) => ({
  /**
   * @desc Menu index
   * @usage @renderer/components/pages/Home.tsx, @renderer/components/organisms/Navbar.tsx
   */
  menuIndex: 0,
  setMenuIndex: (index) => set({ menuIndex: index }),
}))
