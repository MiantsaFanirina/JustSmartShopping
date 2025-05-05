"use client";
import { useFilterStore } from "@/features/shop/shop.state";

export const FilterBadgeList = () => {
    const { selectedFilters, removeFilter } = useFilterStore();

    // Inject 'sort:pertinent' for badge display only if no sort filter exists
    const hasSort = selectedFilters.some(f => f.startsWith("sort:"));
    const visibleFilters = [
        ...(hasSort ? [] : ["sort:pertinent"]),
        ...selectedFilters.filter(f => !f.startsWith("price:")),
    ];

    return (
        <div className="flex flex-wrap gap-2 p-4">
            {visibleFilters.map(f => (
                <div key={f} className="badge badge-primary gap-1">
                    {f.split(":")[1]}
                    <button
                        className="btn btn-xs btn-circle btn-ghost"
                        onClick={() => removeFilter(f)}
                    >
                        ✕
                    </button>
                </div>
            ))}
        </div>
    );
};
