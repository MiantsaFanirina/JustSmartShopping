'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { calculateRewardPoints } from '@/lib/utils';

export type CartItem = {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  image: string;
  vendorName: string;
  vendorId: string;
};

interface CartState {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  rewardPointsEarned: number;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  recalculateTotals: () => void;
}

const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,
      subtotal: 0,
      tax: 0,
      shipping: 0,
      total: 0,
      rewardPointsEarned: 0,
      
      addItem: (item) => {
        const { items } = get();
        const existingItem = items.find((i) => i.id === item.id);
        
        if (existingItem) {
          return get().updateQuantity(existingItem.id, existingItem.quantity + 1);
        }
        
        set((state) => ({
          items: [...state.items, { ...item, quantity: 1 }],
        }));
        
        get().recalculateTotals();
      },
      
      removeItem: (itemId) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== itemId),
        }));
        
        get().recalculateTotals();
      },
      
      updateQuantity: (itemId, quantity) => {
        if (quantity < 1) return get().removeItem(itemId);
        
        set((state) => ({
          items: state.items.map((item) =>
            item.id === itemId ? { ...item, quantity } : item
          ),
        }));
        
        get().recalculateTotals();
      },
      
      clearCart: () => {
        set({
          items: [],
          totalItems: 0,
          subtotal: 0,
          tax: 0,
          shipping: 0,
          total: 0,
          rewardPointsEarned: 0,
        });
      },
      
      recalculateTotals: () => {
        const { items } = get();
        
        const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
        
        const subtotal = items.reduce(
          (acc, item) => acc + item.price * item.quantity, 
          0
        );
        
        // Calculate tax (8.5%)
        const tax = subtotal * 0.085;
        
        // Calculate shipping (free over $50, otherwise $5.99)
        const shipping = subtotal > 50 ? 0 : 5.99;
        
        // Calculate total
        const total = subtotal + tax + shipping;
        
        // Calculate reward points (1 point per $1 spent)
        const rewardPointsEarned = calculateRewardPoints(total);
        
        set({
          totalItems,
          subtotal,
          tax,
          shipping,
          total,
          rewardPointsEarned,
        });
      },
    }),
    {
      name: 'JustShoppingSmart-cart-storage',
    }
  )
);

export default useCartStore;