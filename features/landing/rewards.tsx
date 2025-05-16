"use client"
import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";
import { Award } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { fadeIn, staggerContainer } from "@/features/landing/animation";

const Rewards = () => {

    const rewardsRef = useRef(null);

    const rewardsInView = useInView(rewardsRef, { once: true, amount: 0.2 });

    return (
        <section
            ref={rewardsRef}
            className="py-24 bg-secondary/50"
        >
            <div className="container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    animate={rewardsInView ? "visible" : "hidden"}
                    variants={staggerContainer}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                    <div>
                        <motion.span
                            variants={fadeIn}
                            className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4"
                        >
                            Programme de Récompenses
                        </motion.span>
                        <motion.h2
                            variants={fadeIn}
                            className="text-3xl md:text-4xl font-bold mb-6"
                        >
                            Gagnez des points à chaque achat
                        </motion.h2>
                        <motion.p
                            variants={fadeIn}
                            className="text-muted-foreground mb-6"
                        >
                            Rejoignez notre programme de récompenses et accumulez des points à chaque achat. Échangez vos points contre des réductions et des avantages exclusifs.
                        </motion.p>

                        <motion.ul
                            variants={staggerContainer}
                            className="space-y-4 mb-8"
                        >
                            <motion.li
                                variants={fadeIn}
                                className="flex items-start"
                            >
                                <div className="rounded-full p-1 bg-primary/10 mr-4 mt-1">
                                    <Award className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <span className="font-medium">1 point gagné pour chaque 1€ dépensé</span>
                                    <p className="text-sm text-muted-foreground">Les points s'accumulent rapidement lorsque vous achetez via notre plateforme</p>
                                </div>
                            </motion.li>

                            <motion.li
                                variants={fadeIn}
                                className="flex items-start"
                            >
                                <div className="rounded-full p-1 bg-primary/10 mr-4 mt-1">
                                    <Award className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <span className="font-medium">Débloquez des niveaux pour plus d’avantages</span>
                                    <p className="text-sm text-muted-foreground">Les niveaux Argent, Or et Platine offrent des récompenses de plus en plus avantageuses</p>
                                </div>
                            </motion.li>

                            <motion.li
                                variants={fadeIn}
                                className="flex items-start"
                            >
                                <div className="rounded-full p-1 bg-primary/10 mr-4 mt-1">
                                    <Award className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <span className="font-medium">Échangez vos points contre des réductions et des cartes cadeaux</span>
                                    <p className="text-sm text-muted-foreground">Utilisez vos points pour économiser sur votre prochain achat</p>
                                </div>
                            </motion.li>
                        </motion.ul>

                        <motion.div variants={fadeIn}>
                            <Link href="/rewards">
                                <Button size="lg">
                                    Rejoindre le programme
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div
                        variants={fadeIn}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/30 rounded-lg transform rotate-3"></div>
                        <Image
                            src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Programme de Récompenses"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg relative z-10 object-cover"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Rewards;
