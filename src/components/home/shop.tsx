import React from 'react';
import ProductCard from "@/components/shop/productCard";
import {products} from "@/features/shop/test/products.data";



const Shop = () => {
    return (
        <div className='w-full bg-gradient-to-r from-indigo-500 to-blue-500 flex flex-col md:py-20 p-6 md:p-12 items-center gap-6 md:gap-12'>
            <div className="w-full flex flex-col items-center bg-white p-6 md:p-12 gap-6 md:gap-12">
                <h2 className='text-xl md:text-4xl md:max-w-[650px] text-center font-semibold'>Nos Produits</h2>

                {/* Scrollable on mobile with snap, grid on desktop */}
                <div
                    className="flex
                    lg:grid gap-6 md:gap-12 px-2 md:px-10 xl:px-12 2xl:px-20
                    md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4
                    pb-8
                    overflow-x-auto w-full
                    snap-x snap-proximity scroll-smooth no-scrollbar"
                >
                    {products.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>

                <a href={'/shop'} className={'btn btn-primary md:btn-lg'}>Achetez dès maintenant</a>
            </div>
        </div>
    );
};

export default Shop;
