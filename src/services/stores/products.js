import { create } from 'zustand'

export const useProductStore = create((set) => ({
  product: null,
  setProduct: (product) => set({ product }),
}))
