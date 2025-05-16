import Link from 'next/link';
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  PhoneCall,
  MapPin,
  ShoppingBag
} from 'lucide-react';

export function Footer() {
  return (
      <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <ShoppingBag className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold font-poppins">JustShoppingSmart</span>
              </div>
              <p className="text-sm mb-6">
                Trouvez les meilleures offres sur Internet. Comparez les prix, gagnez des récompenses et achetez plus intelligemment.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook size={18} />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter size={18} />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram size={18} />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Youtube size={18} />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Boutique</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/shop" className="text-muted-foreground hover:text-primary transition-colors">
                    Tous les produits
                  </Link>
                </li>
                <li>
                  <Link href="/shop/electronics" className="text-muted-foreground hover:text-primary transition-colors">
                    Électronique
                  </Link>
                </li>
                <li>
                  <Link href="/shop/fashion" className="text-muted-foreground hover:text-primary transition-colors">
                    Mode
                  </Link>
                </li>
                <li>
                  <Link href="/shop/home" className="text-muted-foreground hover:text-primary transition-colors">
                    Maison & Jardin
                  </Link>
                </li>
                <li>
                  <Link href="/shop/beauty" className="text-muted-foreground hover:text-primary transition-colors">
                    Beauté & Santé
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Compte</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/profile" className="text-muted-foreground hover:text-primary transition-colors">
                    Mon compte
                  </Link>
                </li>
                <li>
                  <Link href="/orders" className="text-muted-foreground hover:text-primary transition-colors">
                    Historique des commandes
                  </Link>
                </li>
                <li>
                  <Link href="/cart" className="text-muted-foreground hover:text-primary transition-colors">
                    Panier
                  </Link>
                </li>
                <li>
                  <Link href="/favorites" className="text-muted-foreground hover:text-primary transition-colors">
                    Liste de souhaits
                  </Link>
                </li>
                <li>
                  <Link href="/rewards" className="text-muted-foreground hover:text-primary transition-colors">
                    Programme de fidélité
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin size={18} className="text-primary mt-0.5" />
                  <span className="text-muted-foreground">123 rue du Commerce, Marché Ville, MC 12345</span>
                </li>
                <li className="flex items-center space-x-3">
                  <PhoneCall size={18} className="text-primary" />
                  <span className="text-muted-foreground">(123) 456-7890</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail size={18} className="text-primary" />
                  <span className="text-muted-foreground">support@JustShoppingSmart.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/40 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} JustShoppingSmart. Tous droits réservés.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Politique de confidentialité
                </Link>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Conditions d'utilisation
                </Link>
                <Link href="/sellers" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Devenir vendeur
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
}
