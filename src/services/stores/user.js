import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useUserStore = create(
  persist(
    (set, get) => ({
      name: null,
      email: null,
      setData: (name, email) => set({ name, email }),
    }),
    {
      name: 'userData',
    }
  )
)
