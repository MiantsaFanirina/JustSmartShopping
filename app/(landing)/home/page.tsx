import React from 'react';
import Home from "./_components/home";
import Features from "./_components/features";
import Shop from "./_components/shop";

const Page = () => {
    return (
        <div className={'flex flex-col overflow-x-hidden'}>
            <Home/>
            <Features/>
            <Shop/>
        </div>
    );
};

export default Page;