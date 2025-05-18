'use client';

import { create, StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';

export type Vendor = {
  id: string;
  name: string;
  logo: string;
  rating: number;
  price: number;
  originalPrice?: number;
  discount?: number;
  shippingFee?: number;
  shippingTime: string;
  link: string;
};

export type ComparedProduct = {
  id: string;
  name: string;
  slug: string;
  category: string;
  image: string;
  description: string;
  specifications: Record<string, string>;
  vendors: Vendor[];
  bestPrice: number;
  averagePrice: number;
  lowestEverPrice: number;
  priceHistory: { date: string; price: number }[];
};

interface CompareState {
  comparedProducts: ComparedProduct[];
  recentlyViewed: string[];
  priceAlerts: { productId: string; price: number }[];
  addToCompare: (product: ComparedProduct) => void;
  removeFromCompare: (productId: string) => void;
  clearCompare: () => void;
  addRecentlyViewed: (productId: string) => void;
  setBestVendor: (productId: string, vendorId: string) => void;
  addPriceAlert: (productId: string, price: number) => void;
  removePriceAlert: (productId: string) => void;
}

// Explicitly type the state creator
const compareStateCreator: StateCreator<CompareState> = (set, get) => ({
  comparedProducts: [],
  recentlyViewed: [],
  priceAlerts: [],

  addToCompare: (product) => {
    const { comparedProducts } = get();
    const exists = comparedProducts.some((p) => p.id === product.id);

    if (!exists) {
      set((state) => ({
        comparedProducts: [...state.comparedProducts, product],
      }));
    }

    get().addRecentlyViewed(product.id);
  },

  removeFromCompare: (productId) => {
    set((state) => ({
      comparedProducts: state.comparedProducts.filter(
          (product) => product.id !== productId
      ),
    }));
  },

  clearCompare: () => {
    set({ comparedProducts: [] });
  },

  addRecentlyViewed: (productId) => {
    set((state) => {
      const filtered = state.recentlyViewed.filter((id) => id !== productId);
      const updated = [productId, ...filtered].slice(0, 10);
      return { recentlyViewed: updated };
    });
  },

  setBestVendor: (productId, vendorId) => {
    set((state) => ({
      comparedProducts: state.comparedProducts.map((product) => {
        if (product.id === productId) {
          const bestVendor = product.vendors.find((v) => v.id === vendorId);
          const otherVendors = product.vendors.filter((v) => v.id !== vendorId);
          if (bestVendor) {
            return {
              ...product,
              vendors: [bestVendor, ...otherVendors],
            };
          }
        }
        return product;
      }),
    }));
  },

  addPriceAlert: (productId, price) => {
    set((state) => {
      const exists = state.priceAlerts.some((alert) => alert.productId === productId);
      if (exists) {
        return {
          priceAlerts: state.priceAlerts.map((alert) =>
              alert.productId === productId ? { ...alert, price } : alert
          ),
        };
      }
      return {
        priceAlerts: [...state.priceAlerts, { productId, price }],
      };
    });
  },

  removePriceAlert: (productId) => {
    set((state) => ({
      priceAlerts: state.priceAlerts.filter((alert) => alert.productId !== productId),
    }));
  },
});

const useCompareStore = create<CompareState>()(
    persist(compareStateCreator, {
      name: 'JustShoppingSmart-compare-storage',
    })
);

export default useCompareStore;
