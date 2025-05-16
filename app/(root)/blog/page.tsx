'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BLOG_POSTS } from '@/lib/mock-data';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tous les articles' },
    { id: 'shopping-tips', name: "Conseils d'achat" },
    { id: 'rewards', name: 'Récompenses' },
    { id: 'deals', name: 'Promotions' },
    { id: 'guides', name: 'Guides' },
  ];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category.toLowerCase() === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold mb-4"
            >
              Blog JustShoppingSmart
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              Astuces, conseils et informations pour vous aider à économiser et à mieux acheter.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="max-w-md mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                    placeholder="Rechercher des articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9"
                />
              </div>
            </motion.div>
          </div>

          {/* Categories */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center gap-2 mb-12 overflow-x-auto pb-2"
          >
            {categories.map((category) => (
                <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </Button>
            ))}
          </motion.div>

          {/* Featured Post */}
          {selectedCategory === 'all' && searchQuery === '' && (
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mb-12"
              >
                <Card className="overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative h-64 md:h-full">
                      <Image
                          src={BLOG_POSTS[0].image}
                          alt={BLOG_POSTS[0].title}
                          fill
                          className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <CardHeader className="p-0 mb-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <span>{BLOG_POSTS[0].category}</span>
                          <span>•</span>
                          <span>{BLOG_POSTS[0].readTime}</span>
                        </div>
                        <CardTitle className="text-2xl mb-2">{BLOG_POSTS[0].title}</CardTitle>
                        <CardDescription>{BLOG_POSTS[0].excerpt}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-0">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Avatar>
                              <AvatarImage src={BLOG_POSTS[0].author.avatar} />
                              <AvatarFallback>{BLOG_POSTS[0].author.name[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm font-medium">{BLOG_POSTS[0].author.name}</p>
                              <p className="text-sm text-muted-foreground">{BLOG_POSTS[0].author.role}</p>
                            </div>
                          </div>
                          <Link href={`/blog/${BLOG_POSTS[0].slug}`}>
                            <Button>
                              Lire la suite
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </motion.div>
          )}

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.slice(1).map((post, index) => (
                <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                >
                  <Card className="h-full flex flex-col">
                    <div className="relative h-48">
                      <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover rounded-t-lg"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <span>{post.category}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                      <CardDescription className="line-clamp-2">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="flex items-center gap-2 mb-4">
                        <Avatar>
                          <AvatarImage src={post.author.avatar} />
                          <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{post.author.name}</p>
                          <p className="text-sm text-muted-foreground">{post.author.role}</p>
                        </div>
                      </div>
                    </CardContent>
                    <div className="p-6 pt-0 mt-auto">
                      <Link href={`/blog/${post.slug}`}>
                        <Button variant="outline" className="w-full">
                          Lire la suite
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </Card>
                </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Aucun article ne correspond à vos critères.</p>
              </div>
          )}
        </div>
      </div>
  );
}
