import {FaClock, FaFire, FaShoppingCart, FaStar} from "react-icons/fa";

export const products = [
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

export const sortOption = [
    { label: 'pertinent', icon: <FaFire className="text-xs" />, text: 'Pertinent' },
    { label: 'newest', icon: <FaClock className="text-xs" />, text: 'Nouveautés' },
    { label: 'top seller', icon: <FaShoppingCart className="text-xs" />, text: 'Meilleures ventes' },
    { label: 'best rated', icon: <FaStar className="text-xs" />, text: 'Mieux notés' },
];

export const sellerOption = ["all", "Ce site", "Amazon", "Fnac"];

export const categoryOption = ["Tous", "Électronique", "Livres", "Vêtements", "Jouets"];