'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Search,
  ShoppingCart,
  User,
  Heart,
  Menu,
  X,
  Sun,
  Moon,
  ShoppingBag,
  BarChart2,
  LogOut,
  Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  // Mock user data
  const user = isAuthenticated ? {
    name: 'Jane Smith',
    email: 'jane@example.com',
    avatar: '/assets/avatars/avatar-1.png',
    rewardPoints: 750,
  } : null;

  // Mock cart count
  const cartItemCount = 3;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/shop', label: 'Boutique' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
    { href: '/faq', label: 'FAQ' },
  ];

  // Toggle auth for demo purposes
  const toggleAuth = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled 
          ? 'bg-white dark:bg-gray-900 shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <ShoppingBag className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold font-poppins">JustShoppingSmart</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === link.href 
                    ? 'text-primary font-semibold' 
                    : 'text-foreground/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              {theme === 'dark' ? (
                  <Sun className="h-5 w-5" />
              ) : (
                  <Moon className="h-5 w-5" />
              )}
            </Button>

            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>

            <Link href="/favorites">
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
            </Link>

            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center rounded-full p-0 text-xs">
                      {cartItemCount}
                    </Badge>
                )}
              </Button>
            </Link>

            {isAuthenticated ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user?.avatar} alt={user?.name} />
                        <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{user?.name}</p>
                        <p className="text-xs leading-none text-muted-foreground">
                          {user?.email}
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profil</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      <span>Commandes</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Award className="mr-2 h-4 w-4" />
                      <span>Récompenses ({user?.rewardPoints} pts)</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <BarChart2 className="mr-2 h-4 w-4" />
                      <span>Tableau de bord vendeur</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={toggleAuth}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Déconnexion</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
            ) : (
                <Button variant="default" size="sm">
                  <Link href={'/sign-in'}>Se connecter</Link>
                </Button>
            )}
          </div>


          {/* Navigation Mobile */}
          <div className="flex md:hidden items-center space-x-2">
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center rounded-full p-0 text-xs">
                      {cartItemCount}
                    </Badge>
                )}
              </Button>
            </Link>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between py-4">
                    <Link href="/" className="flex items-center space-x-2">
                      <ShoppingBag className="h-5 w-5 text-primary" />
                      <span className="text-lg font-bold">JustShoppingSmart</span>
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                      {theme === 'dark' ? (
                          <Sun className="h-5 w-5" />
                      ) : (
                          <Moon className="h-5 w-5" />
                      )}
                    </Button>
                  </div>

                  {isAuthenticated && (
                      <div className="flex items-center space-x-4 py-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={user?.avatar} alt={user?.name} />
                          <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{user?.name}</div>
                          <div className="text-sm text-muted-foreground">{user?.rewardPoints} points</div>
                        </div>
                      </div>
                  )}

                  <nav className="flex flex-col space-y-4 my-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-base font-medium transition-colors hover:text-primary ${
                                pathname === link.href
                                    ? 'text-primary font-semibold'
                                    : 'text-foreground/80'
                            }`}
                        >
                          {link.label}
                        </Link>
                    ))}
                  </nav>

                  <div className="mt-auto pb-8">
                    {isAuthenticated ? (
                        <>
                          <div className="flex flex-col space-y-2">
                            <Link href="/profile">
                              <Button variant="outline" className="w-full justify-start">
                                <User className="mr-2 h-4 w-4" />
                                Profil
                              </Button>
                            </Link>
                            <Link href="/orders">
                              <Button variant="outline" className="w-full justify-start">
                                <ShoppingBag className="mr-2 h-4 w-4" />
                                Commandes
                              </Button>
                            </Link>
                            <Link href="/dashboard">
                              <Button variant="outline" className="w-full justify-start">
                                <BarChart2 className="mr-2 h-4 w-4" />
                                Tableau de bord vendeur
                              </Button>
                            </Link>
                          </div>
                          <Button
                              onClick={toggleAuth}
                              variant="default"
                              className="w-full mt-4"
                          >
                            <LogOut className="mr-2 h-4 w-4" />
                            Déconnexion
                          </Button>
                        </>
                    ) : (
                        <Button variant="default" className={'w-full'}>
                          <Link href={'/sign-in'}>Se connecter</Link>
                        </Button>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </header>
  );
}