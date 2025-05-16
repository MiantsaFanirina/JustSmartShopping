'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetTrigger
} from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MessageCircle, Send, Minimize2, Bot } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion, AnimatePresence } from 'framer-motion';

type Message = {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Bonjour ! 👋 Je suis votre assistant JustSmartShopping. Comment puis-je vous aider aujourd\'hui ? Je peux vous aider à comparer les prix, trouver des produits, ou répondre à vos questions sur notre programme de récompenses.',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponses = [
        "Je peux vous aider à trouver les meilleures offres ! Laissez-moi chercher les prix les plus bas chez nos partenaires.",
        "Bonne question ! Notre programme de récompenses vous offre 1 point pour chaque euro dépensé. Une fois que vous atteignez 500 points, vous obtenez une réduction de 25 € sur votre prochain achat.",
        "Je vérifie l'historique des prix pour ce produit. Il semble que le prix actuel soit le plus bas depuis 30 jours !",
        "Voulez-vous que je crée une alerte prix pour cet article ? Je vous notifierai lorsqu'il descendra en dessous de votre prix cible.",
        "D'après votre historique de navigation, ces produits similaires avec de meilleures notes pourraient aussi vous intéresser.",
      ];

      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];

      const botMessage: Message = {
        id: Date.now().toString(),
        content: randomResponse,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
      <>
        {/* Floating Chat Button */}
        {!isOpen && (
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="fixed bottom-6 right-6 z-50"
            >
              <Button
                  onClick={() => setIsOpen(true)}
                  size="sm"
                  className="rounded-full shadow-lg flex items-center gap-2 opacity-80 hover:opacity-100 transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                Assistant JustSmartShopping
              </Button>
            </motion.div>
        )}

        {/* Chat Sheet */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetContent
              side="right"
              className="w-[90%] sm:w-[380px] p-0 flex flex-col h-[500px] sm:h-[600px] rounded-tl-lg rounded-bl-lg shadow-lg sm:bottom-6 sm:top-auto sm:right-6 sm:left-auto fixed border"
          >
            <SheetHeader className="border-b p-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8 bg-primary/10">
                    <AvatarImage src="/assets/bot-avatar.png" alt="Bot" />
                    <AvatarFallback>
                      <Bot className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <SheetTitle className="text-base font-medium">Assistant JustSmartShopping</SheetTitle>
                </div>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                >
                  <Minimize2 className="h-4 w-4" />
                </Button>
              </div>
            </SheetHeader>

            <ScrollArea className="flex-1 p-4">
              <div className="flex flex-col space-y-4">
                <AnimatePresence>
                  {messages.map((message) => (
                      <motion.div
                          key={message.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className={`flex ${
                              message.sender === 'user' ? 'justify-end' : 'justify-start'
                          }`}
                      >
                        <div
                            className={`max-w-[70%] rounded-lg p-3 ${
                                message.sender === 'user'
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-muted'
                            }`}
                        >
                          <p className="text-sm">{message.content}</p>
                          <p className="text-xs mt-1 opacity-70">
                            {message.timestamp.toLocaleTimeString([], {
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </p>
                        </div>
                      </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </ScrollArea>

            <div className="p-4 border-t">
              <div className="flex items-center space-x-2">
                <Input
                    placeholder="Tapez votre message..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1"
                />
                <Button size="icon" onClick={handleSendMessage} disabled={!inputValue.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </>
  );
}
