import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/button';
import { getActiveAds } from '@/lib/ads';

interface Ad {
  id: string;
  title: string;
  description: string;
  url: string;
  image_url?: string;
}

export default function AdBanner() {
  const [ad, setAd] = useState<Ad | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    loadAd();
  }, []);

  const loadAd = async () => {
    const ads = await getActiveAds();
    if (ads.length > 0) {
      // Rotate through ads or pick random
      const randomAd = ads[Math.floor(Math.random() * ads.length)];
      setAd(randomAd);
    }
  };

  if (!ad || !isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-b border-border/40">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <a
            href={ad.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex items-center gap-4 flex-1 hover:opacity-80 transition-opacity"
          >
            {ad.image_url && (
              <img
                src={ad.image_url}
                alt={ad.title}
                className="h-12 w-12 rounded object-cover"
              />
            )}
            <div className="flex-1">
              <p className="text-sm font-semibold">{ad.title}</p>
              <p className="text-xs text-muted-foreground">{ad.description}</p>
            </div>
            <span className="text-xs text-muted-foreground px-2 py-1 bg-muted rounded">
              Ad
            </span>
          </a>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 shrink-0"
            onClick={() => setIsVisible(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}