import React from 'react';

const featureData = [
    {
        title: "Comparez les prix en un clin d'œil et économisez instantanément.",
        description: "Notre plateforme vous permet de comparer les prix de centaines de sites en temps réel.",
        imageUrl: "bg-slate-200", // you can replace this with actual images if needed
    },
    {
        title: "Recevez des suggestions de produits personnalisées adaptées à vos préférences.",
        description: "Laissez notre IA vous guider vers les produits qui vous correspondent le mieux.",
        imageUrl: "bg-slate-200", // replace with actual images if needed
    },
    {
        title: "Discutez avec votre assistant AI pour des conseils d'achat instantanés.",
        description: "Obtenez des réponses à toutes vos questions d'achat à tout moment.",
        imageUrl: "bg-slate-200", // replace with actual images if needed
    },
];

const Features = () => {
    return (
        <div className="flex flex-col md:py-20 p-6 md:p-12 items-center gap-6 md:gap-12">
            <h1 className="text-xl md:text-4xl md:max-w-[650px] text-center font-semibold">
                Découvrez les fonctionnalités innovantes de JustSmartShopping pour un shopping intelligent.
            </h1>

            {/* Scroll Snap Container */}
            <div className="w-full px-2 md:px-12 xl:px-20 2xl:px-40">
                <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 overflow-x-auto scroll-smooth snap-x snap-mandatory md:overflow-visible md:snap-none">
                    {featureData.map((feature, index) => (
                        <div
                            key={index}
                            className="snap-center flex-shrink-0 w-[80%] md:w-full flex flex-col items-center gap-3"
                        >
                            <div className={`w-full h-[250px] ${feature.imageUrl}`}></div>
                            <h3 className="md:text-lg font-bold text-center">{feature.title}</h3>
                            <p className="text-xs md:text-sm text-center w-[90%]">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;
