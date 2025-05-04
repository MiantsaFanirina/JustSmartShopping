import React from 'react';
import ProductCard from "../../../../components/productCard";

const products = [
    {
        id: 1,
        img: '/hero.jpg',
        category: 'Électronique',
        name: 'Tablette Pro 11',
        stars: 4.5,
        starsCount: 200,
        discountPrice: 129.99,
        price: 249.99,
        discount: 60,
        badge: 'Best-seller',
        scrapping: 'Amazon'
    },
    {
        id: 2,
        img: '/hero.jpg',
        category: 'Audio',
        name: 'Casque Sans Fil X200',
        stars: 4.0,
        starsCount: 150,
        discountPrice: 79.99,
        price: 159.99,
        discount: 50,
        badge: 'Top choix',
        scrapping: 'Cdiscount'
    },
    {
        id: 3,
        img: '/hero.jpg',
        category: 'Informatique',
        name: 'Ordinateur Portable UltraSlim 14”',
        stars: 4.7,
        starsCount: 310,
        discountPrice: 599.99,
        price: 799.99,
        discount: 25,
        badge: 'Nouveau',
        scrapping: 'Fnac'
    },
    {
        id: 4,
        img: '/hero.jpg',
        category: 'Accessoires',
        name: 'Smartwatch FitPlus',
        stars: 3.8,
        starsCount: 95,
        discountPrice: 49.99,
        price: 99.99,
        discount: 50,
        badge: 'Offre limitée',
        scrapping: 'AliExpress'
    }
];

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
                    pb-12
                    overflow-x-auto w-full
                    snap-x snap-proximity scroll-smooth no-scrollbar"
                >
                    {products.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shop;
