import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  rewardPoints: number;
  isSeller: boolean;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  signOut: () => void;
  updateUser: (user: Partial<User>) => void;
  addRewardPoints: (points: number) => void;
}

const useAuthStore = create<AuthState>()(
    persist<AuthState>(
        (set, get) => ({
          user: null,
          isAuthenticated: false,
          loading: false,

          signIn: async (email, password) => {
            set({ loading: true });
            try {
              await new Promise((resolve) => setTimeout(resolve, 1000));
              if (email === 'user@example.com' && password === 'password') {
                set({
                  user: {
                    id: '1',
                    name: 'John Doe',
                    email: 'user@example.com',
                    rewardPoints: 120,
                    isSeller: false,
                  },
                  isAuthenticated: true,
                });
              } else if (email === 'seller@example.com' && password === 'password') {
                set({
                  user: {
                    id: '2',
                    name: 'Jane Smith',
                    email: 'seller@example.com',
                    rewardPoints: 450,
                    isSeller: true,
                  },
                  isAuthenticated: true,
                });
              } else {
                throw new Error('Invalid credentials');
              }
            } catch (error) {
              console.error('Sign in failed:', error);
              throw error;
            } finally {
              set({ loading: false });
            }
          },

          signUp: async (name, email, password) => {
            set({ loading: true });
            try {
              await new Promise((resolve) => setTimeout(resolve, 1000));
              set({
                user: {
                  id: Date.now().toString(),
                  name,
                  email,
                  rewardPoints: 100,
                  isSeller: false,
                },
                isAuthenticated: true,
              });
            } catch (error) {
              console.error('Sign up failed:', error);
              throw error;
            } finally {
              set({ loading: false });
            }
          },

          signOut: () => {
            set({ user: null, isAuthenticated: false });
          },

          updateUser: (userData) => {
            set((state) => ({
              user: state.user ? { ...state.user, ...userData } : null,
            }));
          },

          addRewardPoints: (points) => {
            set((state) => ({
              user: state.user
                  ? { ...state.user, rewardPoints: state.user.rewardPoints + points }
                  : null,
            }));
          },
        }),
        {
          name: 'JustShoppingSmart-auth-storage',
        }
    )
);

export default useAuthStore;
