"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/mode-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  BarChart3,
  Home,
  MenuIcon,
  Package,
  ShoppingCart,
  UserCircle,
  Store,
  LogOut,
  Bell,
  Settings,
  Search,
} from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems: NavItem[] = [
    {
      title: "Tableau de bord",
      href: "/seller",
      icon: <Home className="h-5 w-5" />,
    },
    {
      title: "Produits",
      href: "/seller/products",
      icon: <Package className="h-5 w-5" />,
    },
    {
      title: "Commandes",
      href: "/seller/orders",
      icon: <ShoppingCart className="h-5 w-5" />,
    },
    {
      title: "Statistiques",
      href: "/seller/analytics",
      icon: <BarChart3 className="h-5 w-5" />,
    },
    {
      title: "Clients",
      href: "/seller/customers",
      icon: <UserCircle className="h-5 w-5" />,
    },
  ];

  return (
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:px-6">
          <div className="flex items-center gap-2 md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <MenuIcon className="h-5 w-5" />
                  <span className="sr-only">Basculer le menu de navigation</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72 sm:max-w-xs">
                <nav className="grid gap-2 text-lg font-medium">
                  <Link
                      href="/seller"
                      className="flex items-center gap-2 text-lg font-semibold"
                      onClick={() => setIsOpen(false)}
                  >
                    <Store className="h-6 w-6" />
                    <span className="font-semibold">Tableau vendeur</span>
                  </Link>
                  <Separator className="my-4" />
                  {navItems.map((item) => (
                      <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                              "flex items-center gap-4 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary",
                              pathname === item.href && "bg-muted font-medium text-primary"
                          )}
                      >
                        {item.icon}
                        {item.title}
                      </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <Link href="/seller" className="flex items-center gap-2">
              <Store className="h-6 w-6" />
              <span className="text-lg font-bold inline-block">Vendeur</span>
            </Link>
          </div>

          <Link href="/seller" className="items-center gap-2 hidden md:flex">
            <Store className="h-6 w-6" />
            <span className="text-lg font-bold">Tableau de bord vendeur</span>
          </Link>

          <div className="hidden md:flex md:flex-1 md:items-center md:justify-end md:gap-4 md:px-6">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                  type="search"
                  placeholder="Rechercher..."
                  className="w-full bg-background pl-8 md:w-[300px] lg:w-[400px]"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-medium text-destructive-foreground">
                  3
                </span>
                  <span className="sr-only">Notifications</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex flex-col items-start">
                  <span className="font-medium">Nouvelle commande #1008</span>
                  <span className="text-xs text-muted-foreground">Il y a 2 minutes</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex flex-col items-start">
                  <span className="font-medium">Alerte de stock faible</span>
                  <span className="text-xs text-muted-foreground">Il y a 10 minutes</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex flex-col items-start">
                  <span className="font-medium">Commande #1007 annulée</span>
                  <span className="text-xs text-muted-foreground">Il y a 1 heure</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-primary text-center cursor-pointer">
                  Voir toutes les notifications
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <ModeToggle />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar>
                    <AvatarImage src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Utilisateur" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <span className="sr-only">Menu utilisateur</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <UserCircle className="mr-2 h-4 w-4" />
                  Profil
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Paramètres
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  Déconnexion
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <div className="flex flex-1">
          <aside className="hidden border-r bg-background/60 md:block md:w-64 lg:w-72">
            <div className="flex h-full flex-col gap-2 p-4">
              <nav className="grid gap-1 px-2 text-sm font-medium">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                            pathname === item.href && "bg-muted text-primary"
                        )}
                    >
                      {pathname === item.href ? (
                          <motion.div
                              layoutId="sidebar-indicator"
                              className="absolute left-0 h-7 w-1 bg-primary rounded-r-full"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.2 }}
                          />
                      ) : null}
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                ))}
              </nav>
            </div>
          </aside>
          <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
        </div>
      </div>
  );
}
