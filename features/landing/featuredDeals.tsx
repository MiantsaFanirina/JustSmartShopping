"use client"
import React, {useRef} from 'react';
import {motion, useInView} from "framer-motion";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {PRODUCTS} from "@/lib/mock-data";
import {ProductCard} from "@/components/shop/product-card";
import {fadeIn, staggerContainer} from "@/features/landing/animation";

const FeaturedDeals = () => {

    const dealsRef = useRef(null);

    const dealsInView = useInView(dealsRef, { once: true, amount: 0.2 });
    return (
        <section
            ref={dealsRef}
            className="py-24 container mx-auto px-4"
        >
            <motion.div
                initial="hidden"
                animate={dealsInView ? "visible" : "hidden"}
                variants={staggerContainer}
                className="mb-16"
            >
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
                    <div>
                        <motion.h2
                            variants={fadeIn}
                            className="text-3xl font-bold mb-2"
                        >
                            Meilleures Offres du Jour
                        </motion.h2>
                        <motion.p
                            variants={fadeIn}
                            className="text-muted-foreground"
                        >
                            Offres sélectionnées avec les plus grandes économies sur internet.
                        </motion.p>
                    </div>
                    <motion.div variants={fadeIn}>
                        <Link href="/shop">
                            <Button variant="link" className="group">
                                Voir toutes les offres
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                <Tabs defaultValue="all" className="w-full">
                    <TabsList>
                        <TabsTrigger value="all">Toutes les offres</TabsTrigger>
                        <TabsTrigger value="electronics">Électronique</TabsTrigger>
                        <TabsTrigger value="fashion">Mode</TabsTrigger>
                        <TabsTrigger value="home">Maison</TabsTrigger>
                    </TabsList>

                    <TabsContent value="all" className="pt-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {PRODUCTS.slice(0, 4).map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="electronics" className="pt-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {PRODUCTS.filter(p => p.category === 'electronics').slice(0, 4).map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="fashion" className="pt-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {PRODUCTS.filter(p => p.category === 'fashion').slice(0, 4).map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="home" className="pt-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {PRODUCTS.filter(p => p.category === 'home-garden').slice(0, 4).map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </motion.div>
        </section>

    );
};

export default FeaturedDeals;
