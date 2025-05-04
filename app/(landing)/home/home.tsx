import React from 'react';
import Image from "next/image";
import {MdOutlineChat, MdOutlineStars} from "react-icons/md";

const Home = () => {
    return (
        <div className={'relative mt-16 md:mt-0 w-[100vw] h-[87vh] md:h-[80vh] bg-black'}>
            <Image
                src={"/hero.jpg"}
                alt={"hero banner"}
                width={1080}
                height={720}
                className={'w-full h-full object-cover object-center opacity-50 absolute left-0 top-0'}
            />
            <div className={'w-full h-full px-3 md:px-20 gap-6 md:gap-12 flex flex-col justify-center items-center absolute left-0 top-0'}>
                <div className={'flex flex-col md:w-2/3 gap-3 items-center '}>
                    <Image
                        src={"/logo.png"}
                        alt={"hero banner"}
                        width={500}
                        height={400}
                        className={'w-[100px] h-auto hidden'}
                    />
                    <h1 className={'text-2xl md:text-5xl uppercase font-semibold text-white text-center'}>
                        L’IA au Service de Vos Achats
                    </h1>
                    <h2 className={'text-xl md:text-4xl font-semibold text-white text-center'}>
                        Comparez, Achetez moins cher, profitez.
                    </h2>
                    <p className={'text-md md:text-2xl text-gray-300 text-center'}>
                        Notre IA scrute automatiquement des centaines de sites pour vous offrir les meilleurs prix en quelques secondes.
                    </p>
                </div>

                <a href={'/shop'} className={'btn btn-primary md:btn-lg'}>Achetez dès maintenant</a>

                <div className={'w-full flex flex-col md:flex-row justify-center items-center gap-3 md:gap-6'}>
                    <div className="bg-black/30 flex flex-col md:items-center text-white backdrop-blur-xs w-full md:w-[300px] py-6 px-3 rounded text-center h-full">
                        <MdOutlineChat size={30} className={'mb-3 hidden md:block'}/>
                        <h3 className={'md:text-lg font-bold flex items-center justify-center'}>
                            <MdOutlineChat size={20} className={'md:hidden mr-3'}/>
                            Discutez avec votre assistant AI
                        </h3>
                        <p className={'text-xs md:text-sm'}>
                            Notre <span className={'font-semibold'}>SmartChattingBot 24/7</span> est toujours là pour vous guider.
                        </p>
                    </div>
                    <div className="bg-black/30 flex flex-col items-center text-white backdrop-blur-xs w-full md:w-[300px] py-6 px-3 rounded text-center h-full">
                        <MdOutlineStars size={30} className={'mb-3 hidden md:block'}/>
                        <h3 className={'md:text-lg font-bold flex items-center justify-center'}>
                            <MdOutlineStars size={20} className={'md:hidden mr-3'}/>
                            Récompenses à chaque action
                        </h3>
                        <p className={'text-sm'}>
                            À chaque achat, cumulez des <span className={'font-semibold'}>SmartPoints</span> pour débloquer réductions et offres exclusives !
                            Faites le choix malin dès maintenant.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;