'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, BarChart2, ShoppingCart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { formatPrice, getDiscountPercentage } from '@/lib/utils';
import { ComparedProduct } from '@/store/compare-store';
import useCartStore from '@/store/cart-store';

interface ProductCardProps {
  product: ComparedProduct;
  featured?: boolean;
}

export function ProductCard({ product, featured = false }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  // Get the best vendor (first in the list)
  const bestVendor = product.vendors[0];

  // Calculate discount percentage if there's an original price
  const discountPercentage = bestVendor.originalPrice
      ? getDiscountPercentage(bestVendor.originalPrice, bestVendor.price)
      : 0;

  // Handle adding to cart
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    addItem({
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: bestVendor.price,
      originalPrice: bestVendor.originalPrice,
      image: product.image,
      vendorName: bestVendor.name,
      vendorId: bestVendor.id,
    });
  };

  return (
      <motion.div
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
          className={`group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all ${
              featured ? 'col-span-full md:col-span-2 md:row-span-2' : ''
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
      >
        <Link href={`/product/${product.slug}`} className="block">
          <div className="relative aspect-square md:aspect-[4/3] overflow-hidden">
            <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {discountPercentage > 0 && (
                <Badge
                    variant="destructive"
                    className="absolute top-2 left-2 z-10"
                >
                  {discountPercentage}% de réduction
                </Badge>
            )}

            <Badge
                className="absolute top-2 right-2 compare-badge"
            >
              {product.vendors.length} vendeurs
            </Badge>

            <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0'
            }`}>
              <Button
                  onClick={handleAddToCart}
                  className="mx-2"
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Ajouter au panier
              </Button>
            </div>
          </div>

          <div className="p-4">
            <h3 className="font-medium text-base sm:text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
              {product.name}
            </h3>

            <div className="flex items-center justify-between mb-3">
              <div className="flex flex-col">
              <span className="font-semibold text-lg">
                {formatPrice(bestVendor.price)}
              </span>
                {bestVendor.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(bestVendor.originalPrice)}
                </span>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                          variant="ghost"
                          size="icon"
                          className="hover:text-primary"
                      >
                        <Heart className="h-5 w-5" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Ajouter à la liste de souhaits</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                          variant="ghost"
                          size="icon"
                          className="hover:text-primary"
                      >
                        <BarChart2 className="h-5 w-5" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Voir l'historique des prix</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                Meilleur prix chez <span className="font-medium">{bestVendor.name}</span>
              </div>

              <Button variant="link" size="sm" className="p-0 h-auto font-normal text-primary">
                Comparer
                <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
          </div>
        </Link>
      </motion.div>
  );
}
