'use client';

import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from "react";


interface SearchBarProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    handleSearch: (event: React.FormEvent<HTMLFormElement>) => void;
}

const SearchBar = ({searchQuery, setSearchQuery, handleSearch}: SearchBarProps) => {

    return (
        <section className="container mx-auto px-4 -mt-8 relative z-40">
            <form
                onSubmit={handleSearch}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-4 flex gap-2 max-w-3xl mx-auto"
            >
                <Input
                    type="text"
                    placeholder="Search for products, brands, or categories..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent border-none shadow-none text-lg"
                />
                <Button type="submit" size="lg">
                    <Search className="h-5 w-5 mr-2" />
                    Search
                </Button>
            </form>
        </section>
    );
}

export default SearchBar;