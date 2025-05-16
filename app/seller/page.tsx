"use client";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { StatisticCard } from "@/features/seller/statistic-card";
import { BadgeDollarSign, ShoppingCart, Users, TrendingUp } from "lucide-react";

export default function DashboardPage() {
    return (
        <DashboardLayout>
            <div className="space-y-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Tableau de bord</h2>
                    <p className="text-muted-foreground">
                        Bon retour ! Voici un aperçu des performances de votre boutique.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <StatisticCard
                        title="Revenu total"
                        value="14 589"
                        icon={BadgeDollarSign}
                        change={12.5}
                        iconColor="#fff"
                        bgColor="hsl(var(--chart-1))"
                    />
                    <StatisticCard
                        title="Commandes totales"
                        value="245"
                        icon={ShoppingCart}
                        change={3.2}
                        iconColor="#fff"
                        bgColor="hsl(var(--chart-2))"
                    />
                    <StatisticCard
                        title="Nombre de clients"
                        value="1.845"
                        icon={Users}
                        change={5.8}
                        iconColor="#fff"
                        bgColor="hsl(var(--chart-3))"
                    />
                    <StatisticCard
                        title="Taux de conversion"
                        value="3.2"
                        icon={TrendingUp}
                        change={-0.4}
                        iconColor="#fff"
                        bgColor="hsl(var(--chart-4))"
                        decimal={true}
                        metric="%"
                    />
                </div>
            </div>
        </DashboardLayout>
    );
}
