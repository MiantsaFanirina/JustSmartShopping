import { create } from 'zustand';
import {FilterState} from "@/features/shop/shop.type";



export const useFilterStore = create<FilterState>((set) => ({
    category: null,
    search: null,
    sort: 'all',
    seller: null,
    price: [0, 1000],
    selectedFilters: [],

    setCategory: (category) =>
        set((s) => ({
            category,
            selectedFilters: [
                ...new Set([
                    ...s.selectedFilters.filter((f) => !f.startsWith('category:')),
                    ...(category ? [`category:${category}`] : []),
                ]),
            ],
        })),

    setSearch: (search) => set({ search }),

    setSort: (sort) =>
        set((s) => ({
            sort,
            selectedFilters: [
                ...new Set([
                    ...s.selectedFilters.filter((f) => !f.startsWith('sort:')),
                    `sort:${sort}`,
                ]),
            ],
        })),

    setSeller: (seller) =>
        set((s) => ({
            seller,
            selectedFilters: [
                ...new Set([
                    ...s.selectedFilters.filter((f) => !f.startsWith('seller:')),
                    ...(seller ? [`seller:${seller}`] : []),
                ]),
            ],
        })),

    setPrice: (price) =>
        set((s) => ({
            price,
            selectedFilters: [
                ...s.selectedFilters.filter((f) => !f.startsWith('price:')),
                `price:${price[0]}-${price[1]}`,
            ],
        })),

    removeFilter: (filter) =>
        set((s) => {
            const newFilters = s.selectedFilters.filter((f) => f !== filter);
            const newState: Partial<FilterState> = {
                selectedFilters: newFilters,
            };

            if (filter.startsWith('category:')) newState.category = null;
            if (filter.startsWith('sort:')) newState.sort = 'all';
            if (filter.startsWith('seller:')) newState.seller = null;
            if (filter.startsWith('price:')) newState.price = [0, 1000];

            return newState;
        }),
}));
