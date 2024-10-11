import { create } from 'zustand'

export const useModalStore = create((set) => ({
  currentModal: null,
  setCurrentModal: (currentModal) => set({ currentModal }),
}))
