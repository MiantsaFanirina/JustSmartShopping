'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
      <AnimatePresence>
        {loading && (
            <motion.div
                className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
                initial={{ opacity: 1 }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.5, delay: 0.2 }
                }}
            >
              <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center"
              >
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 2,
                      ease: "linear",
                      repeat: Infinity
                    }}
                    className="relative mb-4"
                >
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse-soft"></div>
                  <ShoppingBag size={64} className="text-primary relative z-10" />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="text-2xl font-bold mb-2 font-poppins"
                >
                  JustSmartShopping
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="text-sm text-muted-foreground mb-8"
                >
                  Comparez. Économisez. Achetez plus intelligemment.
                </motion.p>

                <div className="w-64">
                  <Progress value={progress} className="h-1" />
                </div>
              </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
  );
}
