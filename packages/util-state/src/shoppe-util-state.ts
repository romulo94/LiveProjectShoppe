import create from "zustand";
import { combine } from "zustand/middleware";

type CartProperties = {
  counter: number;
  access_token?: string;
  refresh_token?: string;
};

type CartMethods = {
  increment: () => void;
  decrement: () => void;
};

const store = combine<CartProperties, CartMethods>(
  {
    counter: 100,
  },
  (set) => ({
    increment() {
      set((state) => {
        return {
          counter: ++state.counter,
        };
      });
    },
    decrement() {
      set((state) => {
        return {
          counter: --state.counter,
        };
      });
    },
  })
);

export const useStore = create(store);
