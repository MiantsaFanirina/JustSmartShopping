'use client';

import { useState,  } from 'react';
import Hero from "@/features/landing/hero";
import SearchBar from "@/features/landing/searchBar";
import Features from "@/features/landing/features";
import Categories from "@/features/landing/categories";
import FeaturedDeals from "@/features/landing/featuredDeals";
import Cta from "@/features/landing/cta";
import Rewards from "@/features/landing/rewards";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');


  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, would navigate to search results page
    console.log('Searching for:', searchQuery);
  };

  return (
      <div className="flex min-h-screen flex-col">
        <Hero />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearch={handleSearch} />
        <Features />
        <Categories />
        <FeaturedDeals />
        <Rewards/>
        <Cta/>
      </div>
  );
}