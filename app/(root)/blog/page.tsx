// components/BlogSection.tsx
"use client";
import React from "react";


const Blog = () => {
    return (
        <div className="flex flex-col items-center gap-6 md:gap-12">
            <div className={'px-6 py-10 md:px-12 lg:px-20 bg-gradient-to-r from-indigo-500 to-blue-500'}>

                <div className={'bg-white  flex flex-col items-center gap-6 w-full'}>
                    <h2 className={'text-xl md:text-4xl font-semibold text-center'}>
                        Blog & Conseils Shopping
                    </h2>

                    <p className={'text-xs md:text-sm text-center md:max-w-[650px]'}>
                        Bienvenue sur le blog shopping de JustShoppingSmart.com, votre source de conseils pour bien
                        acheter
                        en ligne, repérer les bons plans, et découvrir les dernières tendances e-commerce en France.
                        Notre
                        objectif est de vous aider à faire des choix malins grâce à des analyses produit, des guides
                        pratiques et des comparatifs fiables, enrichis par l’expertise de notre intelligence
                        artificielle.
                        Parce qu’acheter malin en France, ça s’apprend, suivez nos actualités pour devenir un pro du
                        shopping.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
