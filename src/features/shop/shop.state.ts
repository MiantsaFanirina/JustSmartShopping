import { create } from 'zustand';

type SortType = string;
type SellerType = string | null;

interface FilterState {
    category: string | null;
    search: string;
    sort: SortType;
    seller: SellerType;
    price: [number, number];
    selectedFilters: string[];
    setCategory: (cat: string | null) => void;
    setSearch: (search: string) => void;
    setSort: (sort: SortType) => void;
    setSeller: (seller: SellerType) => void;
    setPrice: (price: [number, number]) => void;
    removeFilter: (filter: string) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
    category: null,
    search: '',
    sort: 'pertinent',
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
            if (filter.startsWith('sort:')) newState.sort = 'pertinent';
            if (filter.startsWith('seller:')) newState.seller = null;
            if (filter.startsWith('price:')) newState.price = [0, 1000];

            return newState;
        }),
}));
