import { create } from "zustand";

export const useProductStore = create((set, get) => ({
  stateProduct: "",

  hanldeStateProduct: (value) => {
    set((state) => ({
      //count: state.count + value,
      stateProduct: value,
    }));
  },
  /*     hanldeStateProductList: (value) => {
      set((state) => ({
        //count: state.count + value,
        stateProductList: [...state.stateProductList, value],
      }));
    }, */
}));
