"use client";
import React, { useState } from "react";
import {
    FaShoppingCart,
    FaUserCircle,
    FaHistory,
    FaCog,
    FaSearch,
    FaBars,
    FaTimes,
    FaSignOutAlt,
    FaStar,
} from "react-icons/fa";
import { usePathname } from "next/navigation";
import SearchBar from "./searchBar";

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true); // simulate auth
    const [menuOpen, setMenuOpen] = useState(false);
    const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
    const cartCount = 3;
    const pointsCount = 7;

    const currentPath = usePathname();

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const toggleMobileSearch = () => setMobileSearchOpen(!mobileSearchOpen);

    const navLinks = [
        { name: "Accueil", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: "Boutique", path: "/shop" },
    ];

    const handleLogout = () => {
        setIsLoggedIn(false);
        // Add logout logic
    };

    return (
        <div className="fixed md:sticky top-0 z-50 w-full bg-base-100 shadow-md">
            <div className="navbar max-w-7xl mx-auto px-4 md:px-10 flex justify-between items-center h-16">
                {/* LEFT SIDE */}
                <div className="flex items-center gap-4">
                    <button className="btn btn-ghost btn-circle lg:hidden" onClick={toggleMenu}>
                        {menuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
                    </button>
                    {/* LOGO */}
                    <div className="w-10 h-10 bg-gray-300 rounded-lg" />
                </div>

                {/* CENTER MENU DESKTOP */}
                <div className="hidden lg:flex flex-1 justify-center items-center gap-6">
                    <ul className="menu menu-horizontal font-semibold text-base gap-2">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.path}
                                    className={`${currentPath === link.path ? "text-primary font-bold" : ""}`}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* SEARCH BAR DESKTOP */}
                    <div className="relative w-64">
                        <SearchBar />
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex items-center gap-3">
                    {/* MOBILE SEARCH ICON */}
                    <button className="btn btn-ghost btn-circle lg:hidden" onClick={toggleMobileSearch}>
                        <FaSearch className="text-lg" />
                    </button>

                    {/* AUTH */}
                    {!isLoggedIn ? (
                        <button className="btn btn-outline btn-primary btn-sm font-semibold text-sm">
                            Connexion
                        </button>
                    ) : (
                        <>
                            {/* SmartPoints Icon with Badge */}
                            <div className="relative">
                                {pointsCount > 0 && (
                                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 text-black text-[10px] flex items-center justify-center rounded-full shadow">
                    {pointsCount}
                  </span>
                                )}
                                <button className="btn btn-ghost btn-circle">
                                    <FaStar
                                        className={`text-xl ${pointsCount > 0 ? "text-yellow-400" : "text-gray-400"}`}
                                    />
                                </button>
                            </div>

                            {/* Cart Icon with Badge */}
                            <div className="relative">
                                {cartCount > 0 && (
                                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white text-[10px] flex items-center justify-center rounded-full shadow">
                    {cartCount}
                  </span>
                                )}
                                <button className="btn btn-ghost btn-circle">
                                    <FaShoppingCart
                                        className={`text-xl ${cartCount > 0 ? "text-primary" : "text-gray-400"}`}
                                    />
                                </button>
                            </div>

                            {/* Profile Dropdown */}
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <FaUserCircle className="text-2xl" />
                                </label>
                                <ul
                                    tabIndex={0}
                                    className="mt-3 z-[1] text-md p-2 shadow menu menu-md dropdown-content bg-white rounded-box w-56 text-gray-500"
                                >
                                    <li>
                                        <a className={"w-full flex justify-between items-center"}>
                                            Historique <FaHistory />
                                        </a>
                                    </li>
                                    <li>
                                        <a className={"w-full flex justify-between items-center"}>
                                            Paramètres <FaCog />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className={"w-full flex justify-between items-center"}
                                            onClick={handleLogout}
                                        >
                                            Déconnexion <FaSignOutAlt className="text-error" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* MOBILE MENU + SEARCH WRAPPER (Sticky) */}
            {(menuOpen || mobileSearchOpen) && (
                <div className="lg:hidden sticky top-16 z-40 bg-base-100 shadow-md border-t border-base-300">
                    {menuOpen && (
                        <ul className="menu menu-vertical p-4 gap-2 font-medium text-base">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.path}
                                        className={`${currentPath === link.path ? "text-primary font-bold" : ""}`}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                    {mobileSearchOpen && (
                        <div className="p-4 border-t border-base-300">
                            <div className="relative">
                                <SearchBar />
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Navbar;
