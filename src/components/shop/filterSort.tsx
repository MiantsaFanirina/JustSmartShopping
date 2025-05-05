"use client";
import { useFilterStore } from "@/features/shop/shop.state";
import { FaFire, FaStar, FaClock, FaShoppingCart } from "react-icons/fa";

const options = [
    { label: 'pertinent', icon: <FaFire className="text-xs" />, text: 'Pertinent' },
    { label: 'newest', icon: <FaClock className="text-xs" />, text: 'Nouveautés' },
    { label: 'top seller', icon: <FaShoppingCart className="text-xs" />, text: 'Meilleures ventes' },
    { label: 'best rated', icon: <FaStar className="text-xs" />, text: 'Mieux notés' },
];

export const FilterSort = () => {
    const { sort, setSort } = useFilterStore();

    return (
        <div>
            <h3 className="font-bold mb-2 text-base">Trier par</h3>
            <div className="space-y-1">
                {options.map(({ label, icon, text }) => (
                    <button
                        key={label}
                        className={`btn btn-sm w-full flex justify-center items-center gap-2 text-xs ${
                            sort === label ? 'btn-primary text-white' : 'btn-outline'
                        }`}
                        onClick={() => setSort(label === sort ? '' : label)} // toggle selection
                    >
                        {icon}
                        {text}
                    </button>
                ))}
            </div>
        </div>
    );
};
