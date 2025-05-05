import React from 'react';
import {TbShoppingCart} from "react-icons/tb";
import {ProductCardProps} from "@/features/shop/shop.type";
import Stars from "@/components/shop/stars";
import Image from "next/image";



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



    return (
        <div  className="card min-w-[270px] snap-center relative w-full bg-base-100 shadow-xl hover:scale-[1.02] transition-transform duration-200">
            <figure className={'relative'}>
                <Image
                    src={img}
                    alt={name}
                    className="h-48 w-full object-cover"
                    width={1080}
                    height={720}
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
                <Stars stars={stars} starsCount={starsCount} />

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
