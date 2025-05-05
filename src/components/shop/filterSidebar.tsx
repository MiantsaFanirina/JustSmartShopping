
import {FilterCategory} from "@/components/shop/filterCategory";
import {FilterSort} from "@/components/shop/filterSort";
import {FilterSeller} from "@/components/shop/filterSeller";
import {FilterPrice} from "@/components/shop/filterPrice";

export const FilterSidebar = () => {
    return (
        <aside className="w-full md:w-72 bg-white px-6 py-12 space-y-6">
            <FilterCategory />
            <FilterSort />
            <FilterSeller />
            <FilterPrice />
        </aside>
    );
};
