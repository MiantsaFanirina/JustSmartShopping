"use client";

import { create } from "zustand";
import { Order, OrderStatus } from "@/lib/types";
import { ordersData } from "@/lib/data/orders";

interface OrderStore {
  orders: Order[];
  isLoading: boolean;
  error: string | null;
  fetchOrders: () => Promise<void>;
  updateOrderStatus: (id: string, status: OrderStatus) => Promise<void>;
  getOrder: (id: string) => Order | undefined;
  getRecentOrders: (limit?: number) => Order[];
  getTotalRevenue: () => number;
  getOrdersCountByStatus: () => Record<OrderStatus, number>;
}

export const useOrderStore = create<OrderStore>((set, get) => ({
  orders: [],
  isLoading: false,
  error: null,

  fetchOrders: async () => {
    set({ isLoading: true, error: null });
    try {
      // Simulate API request
      await new Promise(resolve => setTimeout(resolve, 800));
      set({ orders: ordersData, isLoading: false });
    } catch (error) {
      set({ error: "Failed to fetch orders", isLoading: false });
    }
  },

  updateOrderStatus: async (id, status) => {
    set({ isLoading: true, error: null });
    try {
      // Simulate API request
      await new Promise(resolve => setTimeout(resolve, 800));
      set(state => ({
        orders: state.orders.map(order =>
          order.id === id ? { ...order, status } : order
        ),
        isLoading: false
      }));
    } catch (error) {
      set({ error: "Failed to update order status", isLoading: false });
    }
  },

  getOrder: (id) => {
    return get().orders.find(order => order.id === id);
  },

  getRecentOrders: (limit = 5) => {
    return [...get().orders]
      .sort((a, b) => new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime())
      .slice(0, limit);
  },

  getTotalRevenue: () => {
    return get().orders.reduce((sum, order) => sum + order.total, 0);
  },

  getOrdersCountByStatus: () => {
    const counts: Record<OrderStatus, number> = {
      'pending': 0,
      'processing': 0,
      'on-hold': 0,
      'completed': 0,
      'cancelled': 0,
      'refunded': 0,
      'failed': 0
    };

    get().orders.forEach(order => {
      counts[order.status]++;
    });

    return counts;
  }
}));