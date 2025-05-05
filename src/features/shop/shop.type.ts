export interface ProductCardProps {
    id: number;
    img: string;
    category: string;
    name: string;
    stars: number;
    starsCount: number;
    discountPrice: number;
    price: number;
    discount: number;
    badge?: string;
    scrapping?: string;
}

export interface FilterState {
    category: string | null;
    search: string | null;
    sort: string;
    seller: string | null;
    price: [number, number];
    selectedFilters: string[];
    setCategory: (cat: string | null) => void;
    setSearch: (search: string) => void;
    setSort: (sort: string) => void;
    setSeller: (seller: string | null) => void;
    setPrice: (price: [number, number]) => void;
    removeFilter: (filter: string) => void;
}