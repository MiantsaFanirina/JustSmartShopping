"use client"

import React, {useEffect, useState} from 'react';
import {HERO_SLIDES} from "@/lib/mock-data";
import Image from "next/image";
import {motion} from "framer-motion";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";

const Hero = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-advance the hero slider
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
    <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        {HERO_SLIDES.map((slide, index) => (
            <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            >
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div
                    className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-20"
                    style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)' }}
                />

                <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                />

                <div className="relative z-30 container mx-auto px-4 h-full flex flex-col justify-center">
                    <motion.div
                        key={`slide-${currentSlide}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-2xl text-white"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                        <p className="text-lg md:text-xl mb-8 text-white/90">{slide.description}</p>
                        {slide.cta && <Link href={slide.ctaLink}>
                            <Button size="lg" className="group">
                                {slide.cta}
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>}
                    </motion.div>
                </div>
            </div>
        ))}

        {/* Slider navigation dots */}
        <div className="absolute bottom-0 left-0 right-0 z-30 flex justify-center gap-2">
            {HERO_SLIDES.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                        index === currentSlide
                            ? 'bg-white scale-100'
                            : 'bg-white/40 scale-75 hover:bg-white/60'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>
    </section>
    );
};

export default Hero;