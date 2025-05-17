'use client';

import { create, StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';
import { calculateRewardPoints } from '@/lib/utils';

// ---- Types ----

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

export interface CartState {
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

// ---- Typed Persist Middleware ----

type CartPersist = (
    config: StateCreator<CartState>,
    options: PersistOptions<CartState>
) => StateCreator<CartState>;

// ---- Store Implementation ----

const useCartStore = create<CartState>(
    (persist as CartPersist)(
        (set, get) => ({
            items: [],
            totalItems: 0,
            subtotal: 0,
            tax: 0,
            shipping: 0,
            total: 0,
            rewardPointsEarned: 0,

            addItem: (item: Omit<CartItem, 'quantity'>) => {
                const items = get().items;
                const existingItem = items.find((i) => i.id === item.id);

                if (existingItem) {
                    get().updateQuantity(existingItem.id, existingItem.quantity + 1);
                } else {
                    set((state) => ({
                        items: [...state.items, { ...item, quantity: 1 }],
                    }));
                    get().recalculateTotals();
                }
            },

            removeItem: (itemId: string) => {
                set((state) => ({
                    items: state.items.filter((item) => item.id !== itemId),
                }));
                get().recalculateTotals();
            },

            updateQuantity: (itemId: string, quantity: number) => {
                if (quantity < 1) {
                    get().removeItem(itemId);
                    return;
                }

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
                const items = get().items;

                const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
                const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
                const tax = subtotal * 0.085;
                const shipping = subtotal > 50 ? 0 : 5.99;
                const total = subtotal + tax + shipping;
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
