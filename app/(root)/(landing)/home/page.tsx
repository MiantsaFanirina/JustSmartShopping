import React from 'react';
import Hero from "@/components/home/hero";
import Features from "@/components/home/features";
import Shop from "@/components/home/shop";
import Testimonial from "@/components/home/testimonial";
import JoinUs from "@/components/home/joinUs";

const Page = () => {
    return (
        <div className={'flex flex-col overflow-x-hidden'}>
            <Hero/>
            <Features/>
            <Shop/>
            <Testimonial/>
            <JoinUs/>
        </div>
    );
};

export default Page;