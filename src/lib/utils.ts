import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatADA(amount: number): string {
  return '₳' + new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

export function shortenAddress(address: string, chars = 8): string {
  return `${address.substring(0, chars)}...${address.substring(address.length - chars)}`;
}

export function epochToDate(epoch: number): Date {
  const mainnetStart = new Date('2020-07-29T21:44:51Z');
  const epochDuration = 5 * 24 * 60 * 60 * 1000;
  const epochsSinceStart = epoch - 208;
  return new Date(mainnetStart.getTime() + (epochsSinceStart * epochDuration));
}

export function relativeTime(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  
  if (days === 0) return 'Today';
  if (days === 1) return 'Yesterday';
  if (days < 7) return `${days} days ago`;
  if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
  if (days < 365) return `${Math.floor(days / 30)} months ago`;
  return `${Math.floor(days / 365)} years ago`;
}