'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: 'Message envoyé !',
      description: 'Nous vous répondrons dès que possible.',
    });

    setIsSubmitting(false);
  };

  return (
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl font-bold mb-4"
              >
                Contactez-nous
              </motion.h1>
              <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-muted-foreground max-w-2xl mx-auto"
              >
                Une question ou besoin d’aide ? Nous sommes là pour vous ! Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-6"
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Informations de contact</CardTitle>
                    <CardDescription>
                      Contactez-nous via l’un de ces moyens
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-sm text-muted-foreground">
                          support@JustSmartShopping.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Téléphone</h3>
                        <p className="text-sm text-muted-foreground">
                          +1 (555) 123-4567
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Adresse</h3>
                        <p className="text-sm text-muted-foreground">
                          123 Commerce St<br />
                          Market City, MC 12345<br />
                          États-Unis
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Horaires d’ouverture</CardTitle>
                    <CardDescription>
                      Quand vous pouvez joindre notre équipe support
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Lundi - Vendredi</span>
                        <span>9h00 - 18h00 EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Samedi</span>
                        <span>10h00 - 16h00 EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Dimanche</span>
                        <span>Fermé</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="lg:col-span-2"
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Envoyez-nous un message</CardTitle>
                    <CardDescription>
                      Remplissez le formulaire ci-dessous, nous vous répondrons sous 24h
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">Prénom</Label>
                          <Input id="firstName" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Nom</Label>
                          <Input id="lastName" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Sujet</Label>
                        <Input id="subject" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                            id="message"
                            placeholder="Comment pouvons-nous vous aider ?"
                            className="min-h-[150px]"
                            required
                        />
                      </div>

                      <Button
                          type="submit"
                          className="w-full"
                          disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                            'Envoi...'
                        ) : (
                            <>
                              Envoyer le message
                              <Send className="ml-2 h-4 w-4" />
                            </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
  );
}
