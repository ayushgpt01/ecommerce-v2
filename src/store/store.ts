import { Product } from "@/types/interfaces";
import { create, StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";

type CartItem = Product & {
  quantity: number;
};

export interface CartSlice {
  isCartOpen: boolean;
  cart: CartItem[];
  toggleCart: (open?: boolean) => void;
  addItem: (item: CartItem) => void;
  removeItem: (itemId: number, quantity?: number) => void;
}

const createCartSlice: StateCreator<CartSlice, [], []> = (set) => ({
  cart: [],
  isCartOpen: false,
  addItem: (item) =>
    set((state) => {
      const existing = state.cart.find((i) => i.id === item.id);
      if (existing) {
        return {
          cart: state.cart.map((i) =>
            i.id === item.id
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          ),
        };
      }
      return { cart: [...state.cart, item] };
    }),
  toggleCart: (open) =>
    set((state) => ({ isCartOpen: open ?? !state.isCartOpen })),
  removeItem: (id, quantity) =>
    set((state) => {
      const existing = state.cart.find((i) => i.id === id);
      if (existing && quantity && quantity < existing.quantity) {
        return {
          cart: state.cart.map((i) =>
            i.id === id ? { ...i, quantity: i.quantity - quantity } : i
          ),
        };
      }

      return {
        cart: existing ? state.cart.filter((v) => v.id !== id) : state.cart,
      };
    }),
});

export type StoreState = CartSlice;

export const useStore = create<StoreState>()(
  devtools(
    persist(
      (...a) => ({
        ...createCartSlice(...a),
      }),
      { name: "store", partialize: (state) => ({ cart: state.cart }) }
    ),
    { name: "ZustandStore" }
  )
);
