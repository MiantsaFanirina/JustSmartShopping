"use client"
import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";
import { CATEGORIES } from "@/lib/mock-data";
import Link from "next/link";
import { fadeIn, staggerContainer } from "@/features/landing/animation";

const Categories = () => {
    const categoriesRef = useRef(null);
    const categoriesInView = useInView(categoriesRef, { once: true, amount: 0.2 });

    return (
        <section
            ref={categoriesRef}
            className="py-16 bg-muted"
        >
            <div className="container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    animate={categoriesInView ? "visible" : "hidden"}
                    variants={staggerContainer}
                    className="text-center mb-16"
                >
                    <motion.h2
                        variants={fadeIn}
                        className="text-3xl font-bold mb-4"
                    >
                        Achetez par catégorie
                    </motion.h2>
                    <motion.p
                        variants={fadeIn}
                        className="text-muted-foreground max-w-2xl mx-auto"
                    >
                        Parcourez notre large sélection de produits dans différentes catégories.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate={categoriesInView ? "visible" : "hidden"}
                    variants={staggerContainer}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
                >
                    {CATEGORIES.map((category) => {
                        const Icon = category.icon;
                        return (
                            <motion.div
                                key={category.id}
                                variants={fadeIn}
                                className="group"
                            >
                                <Link
                                    href={`/app/(root)/shop/${category.slug}`}
                                    className="flex flex-col items-center p-6 bg-card rounded-lg transition-all hover:shadow-md"
                                >
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                        <Icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <h3 className="font-medium text-center group-hover:text-primary transition-colors">
                                        {category.name}
                                    </h3>
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Categories;
