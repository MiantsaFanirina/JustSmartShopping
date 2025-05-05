"use client";
import { useFilterStore } from "@/features/shop/shop.state";
import { useState } from "react";
import {categoryOption} from "@/features/shop/test/products.data";



export const FilterCategory = () => {
    const { category, setCategory } = useFilterStore();
    const [query, setQuery] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const filtered = categoryOption.filter((cat) =>
        cat.toLowerCase().includes(query.toLowerCase())
    );

    const handleSelect = (cat: string) => {
        setCategory(cat === "Tous" ? null : cat);
        setQuery("");
    };

    return (
        <div className="relative">
            <h3 className="font-bold mb-2">Catégorie</h3>
            <div className="relative w-full mb-2">
                <input
                    type="text"
                    className={`input input-bordered w-full pl-4 text-xs ${
                        category && !isFocused ? "pr-32" : "pr-4"
                    }`}
                    placeholder="Rechercher"
                    value={query}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChange={(e) => setQuery(e.target.value)}
                />
                {category && !isFocused && (
                    <div className="absolute inset-y-0 right-2 flex items-center">
                        <div className="badge badge-primary gap-1 text-xs px-2 py-1">
                            {category}
                            <button
                                className="btn btn-xs btn-circle btn-ghost"
                                onClick={() => setCategory(null)}
                            >
                                ✕
                            </button>
                        </div>
                    </div>
                )}
            </div>
            {query && filtered.length > 0 && (
                <div className="absolute z-10 w-full bg-base-100 rounded shadow p-2">
                    {filtered.map((cat) => (
                        <button
                            key={cat}
                            className="btn btn-sm btn-ghost w-full justify-start text-sm"
                            onMouseDown={() => handleSelect(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};
