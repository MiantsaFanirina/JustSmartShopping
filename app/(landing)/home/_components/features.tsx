import React from 'react';

const Features = () => {
    return (
        <div className={'flex flex-col md:py-20 p-6 md:p-12 items-center gap-6 md:gap-12'}>
            <h1 className={'text-xl md:text-4xl md:max-w-[650px] text-center font-semibold'}>
                Découvrez les fonctionnalités innovantes de JustSmartShopping pour un shopping intelligent.
            </h1>
            <div className="w-full px-12 xl:px-20 2xl:px-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-6 md:gap-12">

                <div className={'w-full flex flex-col items-center gap-3'}>
                    <div className={'w-full h-[250px] bg-slate-200'}></div>
                    <h3 className={'md:text-lg font-bold flex items-center justify-center text-center'}>
                        Comparez les prix en un clin d'œil et économisez instantanément.
                    </h3>
                    <p className={'text-xs md:text-sm text-center w-[90%]'}>
                        Notre plateforme vous permet de comparer les prix de centaines de sites en temps réel.
                    </p>
                </div>

                <div className={'w-full flex flex-col items-center gap-3'}>
                    <div className={'w-full h-[250px] bg-slate-200'}></div>
                    <h3 className={'md:text-lg font-bold flex items-center justify-center text-center'}>
                        Recevez des suggestions de produits personnalisées adaptées à vos préférences.
                    </h3>
                    <p className={'text-xs md:text-sm text-center w-[90%]'}>
                        Laissez notre IA vous guider vers les produits qui vous correspondent le mieux.
                    </p>
                </div>

                <div className={'w-full flex flex-col items-center gap-3'}>
                    <div className={'w-full h-[250px] bg-slate-200'}></div>
                    <h3 className={'md:text-lg font-bold flex items-center justify-center text-center'}>
                        Discutez avec votre assistant AI pour des conseils d'achat instantanés.
                    </h3>
                    <p className={'text-xs md:text-sm text-center w-[90%]'}>
                        Obtenez des réponses à toutes vos questions d'achat à tout moment.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Features;