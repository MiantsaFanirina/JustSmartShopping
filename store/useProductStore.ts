"use client";

import { create } from "zustand";
import { Product } from "@/lib/types";
import { productsData } from "@/lib/data/products";

interface ProductStore {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
  addProduct: (product: Omit<Product, "id">) => Promise<void>;
  updateProduct: (id: string, productData: Partial<Product>) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
  getProduct: (id: string) => Product | undefined;
}

export const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  isLoading: false,
  error: null,
  
  fetchProducts: async () => {
    set({ isLoading: true, error: null });
    try {
      // Simulate API request with delay
      await new Promise(resolve => setTimeout(resolve, 800));
      set({ products: productsData, isLoading: false });
    } catch (error) {
      set({ error: "Failed to fetch products", isLoading: false });
    }
  },

  addProduct: async (product) => {
    set({ isLoading: true, error: null });
    try {
      // Simulate API request
      await new Promise(resolve => setTimeout(resolve, 800));
      const newProduct = {
        ...product,
        id: Math.random().toString(36).substr(2, 9),
        dateCreated: new Date().toISOString(),
      };
      set(state => ({ 
        products: [...state.products, newProduct],
        isLoading: false 
      }));
    } catch (error) {
      set({ error: "Failed to add product", isLoading: false });
    }
  },

  updateProduct: async (id, productData) => {
    set({ isLoading: true, error: null });
    try {
      // Simulate API request
      await new Promise(resolve => setTimeout(resolve, 800));
      set(state => ({
        products: state.products.map(product =>
          product.id === id ? { ...product, ...productData } : product
        ),
        isLoading: false
      }));
    } catch (error) {
      set({ error: "Failed to update product", isLoading: false });
    }
  },

  deleteProduct: async (id) => {
    set({ isLoading: true, error: null });
    try {
      // Simulate API request
      await new Promise(resolve => setTimeout(resolve, 800));
      set(state => ({
        products: state.products.filter(product => product.id !== id),
        isLoading: false
      }));
    } catch (error) {
      set({ error: "Failed to delete product", isLoading: false });
    }
  },

  getProduct: (id) => {
    return get().products.find(product => product.id === id);
  }
}));