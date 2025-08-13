import { create } from "zustand";
import { persist } from "zustand/middleware";

import { IStoreState } from "./interfaces";
import { getAllProducts } from "@/data/plainData";

const LISTA_PRODUCTOS = getAllProducts();

export const useStore = create<IStoreState>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product, quantity = 1) => {
        const cart = get().cart;
        const existingItem = cart.find((item) => item.id === product.id);

        if (existingItem) {
          set({
            cart: cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
          });
        } else {
          set({
            cart: [...cart, { ...product, quantity }],
          });
        }
      },
      removeFromCart: (productId) => {
        set({
          cart: get().cart.filter((item) => item.id !== productId),
        });
      },
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(productId);
          return;
        }

        set({
          cart: get().cart.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          ),
        });
      },
      clearCart: () => set({ cart: [] }),
      getCartTotal: () => {
        return get().cart.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },
      products: LISTA_PRODUCTOS,
      setProducts: (products) => set({ products }),
      user: null,
      setUser: (user) => ({ user }),
      isAdmin: () => get().user?.role === "admin",
    }),
    {
      name: "maximus-store",
    }
  )
);
