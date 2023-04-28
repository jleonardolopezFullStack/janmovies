import { create } from "zustand";

export const useCategoryStore = create((set, get) => ({
  stateCategory: "",

  hanldeStateCategory: (value) => {
    set((state) => ({
      //count: state.count + value,
      stateCategory: value,
    }));
  },
  /*     hanldeStateCategoryList: (value) => {
      set((state) => ({
        //count: state.count + value,
        stateCategoryList: [...state.stateCategoryList, value],
      }));
    }, */
}));
