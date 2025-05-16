'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ShoppingBag, Mail, Lock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import useAuthStore from '@/store/auth-store';

export default function SignInPage() {
  const router = useRouter();
  const { toast } = useToast();
  const { signIn } = useAuthStore();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await signIn(email, password);
      toast({
        title: 'Bienvenue !',
        description: 'Connexion réussie.',
      });
      router.push('/profile');
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Erreur',
        description: 'Email ou mot de passe invalide. Veuillez réessayer.',
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
              <h1 className="text-3xl font-bold text-center">Content de vous revoir</h1>
              <p className="text-muted-foreground mt-2 text-center">
                Connectez-vous à votre compte pour continuer
              </p>
            </div>

            <Card>
              <form onSubmit={handleSubmit}>
                <CardHeader>
                  <CardTitle>Connexion</CardTitle>
                  <CardDescription>
                    Entrez votre email et votre mot de passe pour accéder à votre compte
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
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
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Mot de passe</Label>
                      <Link
                          href="/forgot-password"
                          className="text-sm text-primary hover:underline"
                      >
                        Mot de passe oublié ?
                      </Link>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                          id="password"
                          type="password"
                          placeholder="Entrez votre mot de passe"
                          className="pl-9"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
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
                    {isLoading ? 'Connexion en cours...' : 'Se connecter'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <p className="text-sm text-center text-muted-foreground">
                    Vous n'avez pas de compte ?{' '}
                    <Link
                        href="/sign-up"
                        className="text-primary hover:underline"
                    >
                      Créer un compte
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
