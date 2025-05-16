'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ShoppingBag, User, Mail, Lock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import useAuthStore from '@/store/auth-store';

export default function SignUpPage() {
  const router = useRouter();
  const { toast } = useToast();
  const { signUp } = useAuthStore();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast({
        variant: 'destructive',
        title: 'Erreur',
        description: 'Les mots de passe ne correspondent pas. Veuillez réessayer.',
      });
      return;
    }

    setIsLoading(true);

    try {
      await signUp(name, email, password);
      toast({
        title: 'Bienvenue sur JustSmartShopping !',
        description: 'Votre compte a été créé avec succès.',
      });
      router.push('/profile');
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Erreur',
        description: 'Une erreur est survenue. Veuillez réessayer.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center mb-8">
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                <ShoppingBag className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-3xl font-bold text-center">Créer un compte</h1>
              <p className="text-muted-foreground mt-2 text-center">
                Rejoignez JustSmartShopping pour commencer à économiser sur vos achats
              </p>
            </div>

            <Card>
              <form onSubmit={handleSubmit}>
                <CardHeader>
                  <CardTitle>Inscription</CardTitle>
                  <CardDescription>
                    Entrez vos informations pour créer votre compte
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                          id="name"
                          placeholder="Entrez votre nom complet"
                          className="pl-9"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                          id="email"
                          type="email"
                          placeholder="Entrez votre email"
                          className="pl-9"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Mot de passe</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                          id="password"
                          type="password"
                          placeholder="Créez un mot de passe"
                          className="pl-9"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                          id="confirmPassword"
                          type="password"
                          placeholder="Confirmez votre mot de passe"
                          className="pl-9"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                      />
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex flex-col space-y-4">
                  <Button
                      type="submit"
                      className="w-full"
                      disabled={isLoading}
                  >
                    {isLoading ? 'Création du compte...' : 'Créer un compte'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <p className="text-sm text-center text-muted-foreground">
                    Vous avez déjà un compte ?{' '}
                    <Link
                        href="/sign-in"
                        className="text-primary hover:underline"
                    >
                      Se connecter
                    </Link>
                  </p>
                </CardFooter>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
  );
}
