import { create } from "zustand";

export const usePackStore = create((set) => ({
  statePack: {
    name: "",
    category: "",
    product: [],
    background: "",
    price: 0,
    discount: 0,
    idStripe: "",
  },
  stateProduct: [],
  handleStatePackName: (name) => {
    set((state) => ({
      statePack: { ...state.statePack, name },
    }));
  },
  handleStatePackCategory: (category) => {
    set((state) => ({
      statePack: { ...state.statePack, category },
    }));
  },
  /*   handleStatePackProduct: (product) => {
    set((state) => ({
      statePack: { ...state.statePack, product },
    }));
  }, */
  handleStatePackBackground: (background) => {
    set((state) => ({
      statePack: { ...state.statePack, background },
    }));
  },
  handleStatePackPrice: (price) => {
    set((state) => ({
      statePack: { ...state.statePack, price },
    }));
  },
  handleStatePackDiscount: (discount) => {
    set((state) => ({
      statePack: { ...state.statePack, discount },
    }));
  },
  handleStatePackArrayProduct: (product) => {
    set((state) => ({
      //statePack: { ...state.statePack, product: [...product, product] },
      stateProduct: [...state.stateProduct, product],
    }));
  },
  handleStatePackIdStripe: (idStripe) => {
    set((state) => ({
      statePack: { ...state.statePack, idStripe },
    }));
  },
}));
