'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, SlidersHorizontal, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { ProductCard } from '@/components/shop/product-card';
import { PRODUCTS, CATEGORIES } from '@/lib/mock-data';

export default function ShopPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = product.bestPrice >= priceRange[0] && product.bestPrice <= priceRange[1];
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesPrice && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.bestPrice - b.bestPrice;
      case 'price-high':
        return b.bestPrice - a.bestPrice;
      case 'newest':
        return new Date(b.priceHistory[0].date).getTime() - new Date(a.priceHistory[0].date).getTime();
      default:
        return 0;
    }
  });

  return (
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h1 className="text-3xl font-bold">Boutique</h1>
              <div className="flex items-center gap-4">
                <Input
                    placeholder="Rechercher des produits..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="max-w-xs"
                />
                <div className="flex items-center gap-2">
                  <Button
                      variant={viewMode === 'grid' ? 'default' : 'outline'}
                      size="icon"
                      onClick={() => setViewMode('grid')}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                      variant={viewMode === 'list' ? 'default' : 'outline'}
                      size="icon"
                      onClick={() => setViewMode('list')}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Barre latérale des filtres */}
              <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="lg:col-span-1 space-y-6"
              >
                <div className="bg-card rounded-lg p-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Filtres</h2>
                    <Filter className="h-5 w-5" />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Catégorie</label>
                      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionner une catégorie" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Toutes les catégories</SelectItem>
                          {CATEGORIES.map((category) => (
                              <SelectItem key={category.id} value={category.slug}>
                                {category.name}
                              </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Fourchette de prix</label>
                      <div className="pt-2 px-2">
                        <Slider
                            value={priceRange}
                            min={0}
                            max={2000}
                            step={10}
                            onValueChange={setPriceRange}
                        />
                      </div>
                      <div className="flex items-center justify-between mt-2 text-sm text-muted-foreground">
                        <span>{priceRange[0]} €</span>
                        <span>{priceRange[1]} €</span>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Trier par</label>
                      <Select value={sortBy} onValueChange={setSortBy}>
                        <SelectTrigger>
                          <SelectValue placeholder="Trier par" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="featured">En vedette</SelectItem>
                          <SelectItem value="price-low">Prix : du plus bas au plus élevé</SelectItem>
                          <SelectItem value="price-high">Prix : du plus élevé au plus bas</SelectItem>
                          <SelectItem value="newest">Nouveautés</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button className="w-full" variant="outline">
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Réinitialiser les filtres
                  </Button>
                </div>
              </motion.div>

              {/* Grille des produits */}
              <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="lg:col-span-3"
              >
                <div className={
                  viewMode === 'grid'
                      ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                      : 'space-y-6'
                }>
                  {sortedProducts.map((product) => (
                      <ProductCard
                          key={product.id}
                          product={product}
                      />
                  ))}
                </div>

                {sortedProducts.length === 0 && (
                    <div className="text-center py-12">
                      <p className="text-muted-foreground">Aucun produit ne correspond à vos critères.</p>
                    </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
  );
}
