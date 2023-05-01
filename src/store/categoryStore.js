import { create } from "zustand";

export const useCategoryStore = create((set, get) => ({
  stateCategory: "",

  hanldeStateCategory: (value) => {
    set((state) => ({
      stateCategory: value,
    }));
  },
}));
