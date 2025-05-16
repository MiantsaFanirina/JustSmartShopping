import React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Cta = () => {
    return (
        <section className="py-20 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Prêt à commencer à économiser ?
                </h2>
                <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
                    Rejoignez des milliers d'acheteurs malins qui économisent chaque jour en comparant les prix et en gagnant des récompenses.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/shop">
                        <Button size="lg" variant="secondary">
                            Commencer vos achats
                        </Button>
                    </Link>
                    <Link href="/sign-up">
                        <Button size="lg" variant="outline" className="bg-transparent border-white hover:bg-white/10">
                            Créer un compte
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Cta;
