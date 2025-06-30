"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface CartItem {
  id: number
  name: string
  price: number
  image: string
  quantity: number
  color?: string
  size?: string
}

interface CartStore {
  items: CartItem[]
  addItem: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void
  removeItem: (id: number, color?: string, size?: string) => void
  updateQuantity: (id: number, quantity: number, color?: string, size?: string) => void
  clearCart: () => void
  getCartTotal: () => number
  getItemCount: () => number
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) => {
        const { items } = get()
        const existingItem = items.find((i) => i.id === item.id && i.color === item.color && i.size === item.size)

        if (existingItem) {
          set({
            items: items.map((i) =>
              i.id === item.id && i.color === item.color && i.size === item.size
                ? { ...i, quantity: i.quantity + (item.quantity || 1) }
                : i,
            ),
          })
        } else {
          set({
            items: [...items, { ...item, quantity: item.quantity || 1 }],
          })
        }
      },

      removeItem: (id, color, size) => {
        set({
          items: get().items.filter((item) => !(item.id === id && item.color === color && item.size === size)),
        })
      },

      updateQuantity: (id, quantity, color, size) => {
        if (quantity <= 0) {
          get().removeItem(id, color, size)
          return
        }

        set({
          items: get().items.map((item) =>
            item.id === id && item.color === color && item.size === size ? { ...item, quantity } : item,
          ),
        })
      },

      clearCart: () => set({ items: [] }),

      getCartTotal: () => {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0)
      },

      getItemCount: () => {
        return get().items.reduce((count, item) => count + item.quantity, 0)
      },
    }),
    {
      name: "cart-storage",
    },
  ),
)
