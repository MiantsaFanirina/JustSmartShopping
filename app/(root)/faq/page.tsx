"use client"
import React from 'react';
import {motion} from "framer-motion";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

const Faq = () => {
    return (
        <div className={'min-h-screen bg-background py-12'}>
            <div className={'container mx-auto px-4 md:px-20'}>
                {/* FAQ Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-16"
                >
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold mb-2">Questions fréquentes</h2>
                        <p className="text-muted-foreground">
                            Trouvez rapidement les réponses aux questions courantes
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Comment fonctionne la comparaison de prix ?</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Notre plateforme scanne automatiquement et compare les prix chez plusieurs détaillants pour vous aider à trouver les meilleures offres. Nous mettons à jour les prix régulièrement pour garantir leur exactitude.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Comment gagner des points de récompense ?</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Vous gagnez des points à chaque achat effectué via notre plateforme. Ces points peuvent être échangés contre des réductions sur vos futurs achats ou des récompenses spéciales.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Quelle est la politique de retour ?</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Les politiques de retour varient selon les détaillants. Nous fournissons des informations détaillées sur la politique de retour de chaque vendeur sur la page produit avant l’achat.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Comment suivre ma commande ?</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Une fois votre commande confirmée, vous pouvez la suivre via votre tableau de bord ou en utilisant le numéro de suivi fourni dans votre email de confirmation.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Faq;