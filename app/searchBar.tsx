'use client';

import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        setShowDropdown(e.target.value.trim().length > 0);
    };

    const handleBlur = () => {
        setTimeout(() => setShowDropdown(false), 150); // Delay to allow click
    };

    return (
        <>
            {/* Desktop Version */}
            <div className="hidden md:block relative w-72">
                <FaSearch
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10 pointer-events-none"
                />
                <input
                    type="text"
                    value={searchValue}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="Rechercher un produit..."
                    className="input input-bordered w-full pl-10 pr-4 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {showDropdown && (
                    <div className="absolute mt-2 w-full bg-white border border-gray-200 shadow-lg rounded-md z-20">
                        <ul className="menu p-2">
                            <li><a>Résultat pour &#34;{searchValue}&#34;</a></li>
                            <li><a>Suggestion produit 1</a></li>
                            <li><a>Suggestion produit 2</a></li>
                        </ul>
                    </div>
                )}
            </div>

            {/* Mobile Version */}
            <div className="md:hidden relative w-full px-4 mt-2">
                <div className="relative">
                    <FaSearch
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10 pointer-events-none"
                    />
                    <input
                        type="text"
                        value={searchValue}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="Rechercher..."
                        className="input input-bordered w-full pl-10 pr-4 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>
                {showDropdown && (
                    <div className="absolute mt-2 w-2/3 bg-white border border-gray-200 shadow-lg rounded-md z-20">
                        <ul className="menu p-2">
                            <li><a>Résultat pour &#34;{searchValue}&#34;</a></li>
                            <li><a>Suggestion mobile 1</a></li>
                            <li><a>Suggestion mobile 2</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default SearchBar;
