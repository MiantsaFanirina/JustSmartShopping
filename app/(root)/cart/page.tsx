'use client';

import useCartStore from '@/store/cart-store';
import { useEffect } from 'react';
import { ProductCardCart } from '@/components/shop/productCardCart';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CartPage() {
    const { items, subtotal, tax, shipping, total, rewardPointsEarned, recalculateTotals } =
        useCartStore();

    useEffect(() => {
        recalculateTotals();
    }, [items, recalculateTotals]);

    if (items.length === 0) {
        return (
            <div className="text-center py-16">
                <h2 className="text-2xl font-semibold mb-2">Votre panier est vide</h2>
                <p className="text-muted-foreground mb-6">Ajoutez des produits pour commencer vos achats.</p>
                <Link href="/shop">
                    <Button>Voir les produits</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
            <h1 className="text-2xl font-bold">Panier</h1>

            <div className="space-y-4">
                {items.map((item) => (
                    <ProductCardCart key={item.id} item={item} />
                ))}
            </div>

            <div className="border-t pt-6 space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                    <span>Sous-total</span>
                    <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                    <span>TVA (8.5%)</span>
                    <span>{formatPrice(tax)}</span>
                </div>
                <div className="flex justify-between">
                    <span>Frais de livraison</span>
                    <span>{formatPrice(shipping)}</span>
                </div>
                <div className="flex justify-between text-base font-medium text-foreground">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                </div>
                <div className="text-xs italic">
                    Points de fidélité gagnés : <strong>{rewardPointsEarned}</strong>
                </div>
            </div>

            <Button className="w-full mt-4">Passer à la caisse</Button>
        </div>
    );
}
