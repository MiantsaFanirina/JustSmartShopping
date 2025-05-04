import React from 'react';
import {
    FaStar,
    FaStarHalfAlt,
    FaRegStar,
} from 'react-icons/fa';
import {TbShoppingCart} from "react-icons/tb";

interface ProductCardProps {
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

const ProductCard= ({
    img,
    category,
    name,
    stars,
    starsCount,
    discountPrice,
    price,
    discount,
    badge,
    scrapping,
} : ProductCardProps) => {


    const renderStars = () => {
        const fullStars = Math.floor(stars);
        const hasHalfStar = stars % 1 !== 0;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        return (
            <div className="flex items-center gap-1 text-yellow-400">
                {[...Array(fullStars)].map((_, i) => (
                    <FaStar key={`full-${i}`} />
                ))}
                {hasHalfStar && <FaStarHalfAlt />}
                {[...Array(emptyStars)].map((_, i) => (
                    <FaRegStar key={`empty-${i}`} />
                ))}
                <span className="text-sm text-gray-500 ml-1">({starsCount})</span>
            </div>
        );
    };

    return (
        <div  className="card min-w-[270px] snap-center relative w-full bg-base-100 shadow-xl hover:scale-[1.02] transition-transform duration-200">
            <figure className={'relative'}>
                <img
                    src={img}
                    alt={name}
                    className="h-48 w-full object-cover"
                />

                {badge && (
                    <div className="absolute top-1 left-1 badge badge-success text-white">{badge}</div>
                )}
                {scrapping && (
                    <div className="absolute bottom-1 right-1 badge badge-outline bg-white">{scrapping}</div>
                )}
            </figure>
            <div className="card-body py-3">

                <span className="text-xs text-gray-400 mt-2">{category}</span>
                <h2 className="card-title text-base max-w-2/3">{name}</h2>
                {renderStars()}

                <div className="flex items-center gap-2 mt-2">
                    <span className="text-xl font-bold text-primary">
                        {discountPrice.toFixed(2)} €
                    </span>
                    <span className="line-through text-gray-400">{price.toFixed(2)} €</span>
                    <span className="text-sm text-red-500">-{discount}%</span>
                </div>

                <div className="card-actions absolute right-6 justify-end mt-4">
                    <button className="btn btn-primary btn-sm"><TbShoppingCart size={15}/></button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
