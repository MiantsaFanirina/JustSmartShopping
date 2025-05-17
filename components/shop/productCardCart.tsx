'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Trash, Plus, Minus } from 'lucide-react';
import { formatPrice } from '@/lib/utils';
import useCartStore from '@/store/cart-store';

interface ProductCardCartProps {
    item: ReturnType<typeof useCartStore.getState>['items'][0];
}

export function ProductCardCart({ item }: ProductCardCartProps) {
    const { updateQuantity, removeItem } = useCartStore();

    return (
        <div className="flex flex-col sm:flex-row gap-4 border rounded-lg p-4 shadow-sm w-full">
            <div className="relative w-full sm:w-24 h-40 sm:h-24 rounded overflow-hidden shrink-0">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
            </div>

            <div className="flex flex-col justify-between flex-1 gap-4 sm:gap-0">
                <div>
                    <h4 className="text-base font-medium">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">
                        Vendu par <span className="font-medium">{item.vendorName}</span>
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                            <Minus className="w-4 h-4" />
                        </Button>
                        <span className="text-sm">{item.quantity}</span>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                            <Plus className="w-4 h-4" />
                        </Button>
                    </div>

                    <div className="text-right sm:text-left">
                        <div className="text-base font-semibold">{formatPrice(item.price * item.quantity)}</div>
                        {item.originalPrice && (
                            <div className="text-xs text-muted-foreground line-through">
                                {formatPrice(item.originalPrice * item.quantity)}
                            </div>
                        )}
                    </div>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-red-500 hover:bg-red-100 self-start sm:self-center"
                        onClick={() => removeItem(item.id)}
                    >
                        <Trash className="w-5 h-5" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
