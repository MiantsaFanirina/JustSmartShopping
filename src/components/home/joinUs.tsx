import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const JoinUs = () => {
    return (
        <div className="bg-white py-16 px-6 md:px-20">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

                {/* Text Content */}
                <div className="flex-1 space-y-6 text-center lg:text-left">
                    <h2 className="text-xl md:text-4xl font-semibold">
                        Rejoignez la nouvelle façon d’acheter en ligne
                    </h2>
                    <p className="text-lg md:text-xl">
                        Acheter en ligne ne devrait jamais être un saut dans l’inconnu.
                    </p>
                    <p className="text-md md:text-lg">
                        Avec <span className="font-semibold">JustSmartShopping</span>, vous êtes guidé, conseillé, comparé et sécurisé.
                    </p>

                    <div className="flex flex-col md:flex-row md:flex-wrap justify-center lg:justify-start items-center gap-4 mt-6">
                        <div className="flex items-center gap-2 text-sm font-semibold">
                            <FaCheckCircle className="text-xl text-green-600 " />
                            Plateforme française
                        </div>
                        <div className="flex items-center gap-2 text-sm font-semibold">
                            <FaCheckCircle className="text-xl text-green-600 " />
                            IA éthique et transparente
                        </div>
                        <div className="flex items-center gap-2 text-sm font-semibold">
                            <FaCheckCircle className="text-xl text-green-600" />
                            Assistance disponible 24h/24
                        </div>
                    </div>

                    <div className="mt-8">
                        <button className="btn btn-primary text-white text-xs md:text-lg">
                            Lancez votre première comparaison intelligente
                        </button>
                    </div>
                </div>

                {/* Image Placeholder */}
                <div className="flex-1 w-full h-64 md:h-96 bg-gray-300 rounded-xl shadow-inner" />
            </div>
        </div>
    );
};

export default JoinUs;
