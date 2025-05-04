import React from 'react';
import Home from "./home";
import Features from "./features";
import Shop from "./shop";
import Testimonial from "./testimonial";
import JoinUs from "./joinUs";

const Page = () => {
    return (
        <div className={'flex flex-col overflow-x-hidden'}>
            <Home/>
            <Features/>
            <Shop/>
            <Testimonial/>
            <JoinUs/>
        </div>
    );
};

export default Page;