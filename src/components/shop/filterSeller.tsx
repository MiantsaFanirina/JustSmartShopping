"use client";
import { useFilterStore } from "@/features/shop/shop.state";
import { useState } from "react";

const sellers = ["Tous", "Ce site", "Amazon", "Fnac"];

export const FilterSeller = () => {
    const { seller, setSeller } = useFilterStore();
    const [query, setQuery] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const filtered = sellers.filter((s) =>
        s.toLowerCase().includes(query.toLowerCase())
    );

    const handleSelect = (value: string) => {
        setSeller(value === "Tous" ? null : value);
        setQuery("");
    };

    return (
        <div className="relative w-full">
            <h3 className="font-bold mb-2">Vendeur</h3>
            <div className="relative w-full mb-2">
                <input
                    type="text"
                    className={`input input-bordered w-full pl-4 text-xs ${
                        seller && !isFocused ? "pr-26" : "pr-4"
                    }`}
                    placeholder="Rechercher"
                    value={query}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChange={(e) => setQuery(e.target.value)}
                />
                {seller && !isFocused && (
                    <div className="absolute inset-y-0 right-2 flex items-center">
                        <div className="badge badge-primary gap-1 text-xs px-2 py-1">
                            {seller}
                            <button
                                className="btn btn-xs btn-circle btn-ghost"
                                onClick={() => setSeller(null)}
                            >
                                ✕
                            </button>
                        </div>
                    </div>
                )}
            </div>
            {query && filtered.length > 0 && (
                <div className="absolute z-10 w-full bg-base-100 rounded shadow p-2">
                    {filtered.map((s) => (
                        <button
                            key={s}
                            className="btn btn-sm btn-ghost w-full justify-start text-sm"
                            onMouseDown={() => handleSelect(s)}
                        >
                            {s}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};
