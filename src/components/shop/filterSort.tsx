"use client";
import { useFilterStore } from "@/features/shop/shop.state";
import {sortOption} from "@/features/shop/test/products.data";



export const FilterSort = () => {
    const { sort, setSort } = useFilterStore();

    return (
        <div>
            <h3 className="font-bold mb-2 text-base">Trier par</h3>
            <div className="space-y-1">
                {sortOption.map(({ label, icon, text }) => (
                    <button
                        key={label}
                        className={`btn btn-sm w-full flex justify-center items-center gap-2 text-xs ${
                            sort === label ? 'btn-primary text-white' : 'btn-outline'
                        }`}
                        onClick={() => setSort(label === sort ? '' : label)}
                    >
                        {icon}
                        {text}
                    </button>
                ))}
            </div>
        </div>
    );
};
