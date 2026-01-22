import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { getActiveAds, type Advertisement } from '@/lib/ads';
import { Button } from '@/components/ui/button';

export default function AdBanner() {
  const [ads, setAds] = useState<Advertisement[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAds();
  }, []);

  const loadAds = async () => {
    try {
      setLoading(true);
      const activeAds = await getActiveAds();
      setAds(activeAds);
    } catch (error) {
      console.error('Error loading ads:', error);
      setAds([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (ads.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ads.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [ads.length]);

  const nextAd = () => {
    setCurrentIndex((prev) => (prev + 1) % ads.length);
  };

  const prevAd = () => {
    setCurrentIndex((prev) => (prev - 1 + ads.length) % ads.length);
  };

  if (loading) {
    return (
      <div className="w-full bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 animate-pulse">
        <div className="h-24 bg-white/10 rounded-lg" />
      </div>
    );
  }

  if (ads.length === 0) {
    return null;
  }

  const currentAd = ads[currentIndex];

  return (
    <div className="w-full bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl overflow-hidden shadow-xl">
      <div className="p-6 md:p-8 relative">
        <div className="flex items-center justify-between gap-6">
          <div className="flex-1 min-w-0">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 truncate">
              {currentAd.title}
            </h3>
            <p className="text-blue-100 text-sm md:text-base mb-4 line-clamp-2">
              {currentAd.description}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              <a
                href={currentAd.targetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Visit {currentAd.advertiserName}
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>

          {currentAd.imageUrl && (
            <div className="hidden md:block flex-shrink-0">
              <img
                src={currentAd.imageUrl}
                alt={currentAd.title}
                className="w-32 h-32 object-cover rounded-xl shadow-lg"
              />
            </div>
          )}
        </div>

        {ads.length > 1 && (
          <button
            onClick={prevAd}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
            aria-label="Previous ad"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
        )}

        {ads.length > 1 && (
          <button
            onClick={nextAd}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
            aria-label="Next ad"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        )}

        {ads.length > 1 && (
          <div className="flex justify-center gap-2 mt-3">
            {ads.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to ad ${idx + 1}`}
              />
            ))}
          </div>
        )}

        <div className="text-center mt-2">
          <span className="text-xs text-white/60">Sponsored</span>
        </div>
      </div>
    </div>
  );
}