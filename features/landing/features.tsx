'use client';

import { ShieldCheck, TrendingUp, Award } from 'lucide-react';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeIn, staggerContainer } from "@/features/landing/animation";

const Features = () => {
    const featuresRef = useRef(null);
    const featuresInView = useInView(featuresRef, { once: true, amount: 0.2 });

    return (
        <section
            ref={featuresRef}
            className="py-24 container mx-auto px-4"
        >
            <motion.div
                initial="hidden"
                animate={featuresInView ? "visible" : "hidden"}
                variants={staggerContainer}
                className="text-center mb-16"
            >
                <motion.h2
                    variants={fadeIn}
                    className="text-3xl font-bold mb-4"
                >
                    Pourquoi choisir JustShoppingSmart
                </motion.h2>
                <motion.p
                    variants={fadeIn}
                    className="text-muted-foreground max-w-2xl mx-auto"
                >
                    Nous vous aidons à trouver les meilleures offres sur Internet afin que vous puissiez acheter en toute confiance.
                </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                    initial="hidden"
                    animate={featuresInView ? "visible" : "hidden"}
                    variants={fadeIn}
                    className="bg-card rounded-lg p-8 text-center"
                >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <TrendingUp className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Comparaison de prix</h3>
                    <p className="text-muted-foreground">
                        Comparez les prix chez plusieurs commerçants pour être sûr d’obtenir la meilleure offre.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate={featuresInView ? "visible" : "hidden"}
                    variants={fadeIn}
                    className="bg-card rounded-lg p-8 text-center"
                >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Award className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Programme de fidélité</h3>
                    <p className="text-muted-foreground">
                        Gagnez des points à chaque achat et échangez-les contre des réductions sur vos prochaines commandes.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate={featuresInView ? "visible" : "hidden"}
                    variants={fadeIn}
                    className="bg-card rounded-lg p-8 text-center"
                >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <ShieldCheck className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Alertes de prix</h3>
                    <p className="text-muted-foreground">
                        Définissez des alertes sur vos produits préférés et soyez notifié dès que leur prix baisse.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
