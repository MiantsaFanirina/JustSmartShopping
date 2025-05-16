"use client";

import { create } from "zustand";
import { SalesData } from "@/lib/types";
import { salesData, productPerformanceData } from "@/lib/data/analytics";

interface AnalyticsStore {
  salesTimeline: SalesData[];
  productPerformance: Array<{
    productId: string;
    name: string;
    sales: number;
    revenue: number;
  }>;
  selectedTimeframe: 'daily' | 'weekly' | 'monthly' | 'yearly';
  isLoading: boolean;
  error: string | null;
  fetchSalesData: () => Promise<void>;
  fetchProductPerformance: () => Promise<void>;
  setTimeframe: (timeframe: 'daily' | 'weekly' | 'monthly' | 'yearly') => void;
  getTopSellingProducts: (limit?: number) => Array<{
    productId: string;
    name: string;
    sales: number;
    revenue: number;
  }>;
}

export const useAnalyticsStore = create<AnalyticsStore>((set, get) => ({
  salesTimeline: [],
  productPerformance: [],
  selectedTimeframe: 'monthly',
  isLoading: false,
  error: null,

  fetchSalesData: async () => {
    set({ isLoading: true, error: null });
    try {
      // Simulate API request
      await new Promise(resolve => setTimeout(resolve, 800));
      set({ salesTimeline: salesData, isLoading: false });
    } catch (error) {
      set({ error: "Failed to fetch sales data", isLoading: false });
    }
  },

  fetchProductPerformance: async () => {
    set({ isLoading: true, error: null });
    try {
      // Simulate API request
      await new Promise(resolve => setTimeout(resolve, 800));
      set({ productPerformance: productPerformanceData, isLoading: false });
    } catch (error) {
      set({ error: "Failed to fetch product performance", isLoading: false });
    }
  },

  setTimeframe: (timeframe) => {
    set({ selectedTimeframe: timeframe });
  },

  getTopSellingProducts: (limit = 5) => {
    return [...get().productPerformance]
      .sort((a, b) => b.sales - a.sales)
      .slice(0, limit);
  }
}));