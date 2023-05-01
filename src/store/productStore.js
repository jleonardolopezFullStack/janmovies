import { create } from "zustand";

export const useProductStore = create((set, get) => ({
  stateProduct: "",

  hanldeStateProduct: (value) => {
    set((state) => ({
      stateProduct: value,
    }));
  },
}));
