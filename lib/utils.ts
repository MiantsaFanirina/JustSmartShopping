import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(
    price: number,
    options: {
      currency?: 'USD' | 'EUR' | 'GBP';
      notation?: Intl.NumberFormatOptions['notation'];
    } = {}
) {
  const { currency = 'USD', notation = 'standard' } = options;

  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency,
    notation,
    maximumFractionDigits: 2,
  }).format(price);
}


export function getDiscountPercentage(originalPrice: number, discountedPrice: number) {
  if (originalPrice <= 0 || discountedPrice >= originalPrice) return 0;
  return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
}

export function truncate(str: string, length: number) {
  if (str.length <= length) return str;
  return str.slice(0, length) + '...';
}

export function calculateRewardPoints(amount: number) {
  // 1 point for every $1 spent
  return Math.floor(amount);
}

export const getRandomAvatar = () => {
  const rndInt = Math.floor(Math.random() * 6) + 1;
  return `/assets/avatars/avatar-${rndInt}.png`;
};