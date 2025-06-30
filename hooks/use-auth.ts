"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface User {
  id: number
  name: string
  email: string
  role: "user" | "admin"
}

interface AuthStore {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  register: (name: string, email: string, password: string) => Promise<boolean>
  logout: () => void
  isAuthenticated: () => boolean
}

// Mock users for demo
const mockUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", password: "password", role: "user" as const },
  { id: 2, name: "Admin User", email: "admin@example.com", password: "admin", role: "admin" as const },
]

export const useAuth = create<AuthStore>()(
  persist(
    (set, get) => ({
      user: null,

      login: async (email, password) => {
        // Mock login - in real app, this would call an API
        const user = mockUsers.find((u) => u.email === email && u.password === password)
        if (user) {
          set({ user: { id: user.id, name: user.name, email: user.email, role: user.role } })
          return true
        }
        return false
      },

      register: async (name, email, password) => {
        // Mock registration - in real app, this would call an API
        const existingUser = mockUsers.find((u) => u.email === email)
        if (existingUser) {
          return false // User already exists
        }

        const newUser = {
          id: mockUsers.length + 1,
          name,
          email,
          password,
          role: "user" as const,
        }
        mockUsers.push(newUser)

        set({ user: { id: newUser.id, name: newUser.name, email: newUser.email, role: newUser.role } })
        return true
      },

      logout: () => set({ user: null }),

      isAuthenticated: () => get().user !== null,
    }),
    {
      name: "auth-storage",
    },
  ),
)
