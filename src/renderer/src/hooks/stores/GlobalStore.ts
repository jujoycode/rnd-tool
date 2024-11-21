import { create } from 'zustand'

interface GlobalStore {
  username: string
  usermail: string
  navIndex: number
  setUsername: (username: string) => void
  setUsermail: (usermail: string) => void
  setNavIndex: (index: number) => void
}

export const useGlobalStore = create<GlobalStore>((set) => ({
  // ========== Variables ==========
  username: 'Admin',
  usermail: 'admin@quintet.co.kr',
  navIndex: 0,

  // ========== Actions ==========
  setUsername: (username: string) => set({ username }),
  setUsermail: (usermail: string) => set({ usermail }),
  setNavIndex: (index: number) => set({ navIndex: index })
}))
