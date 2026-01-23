import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Sparkles } from 'lucide-react';
import Navigation from './Navigation';
import AdBanner from './AdBanner';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Advertise CTA Banner - Purple bar */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 py-3">
          <Link
            to="/advertise"
            className="flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            <Sparkles className="w-5 h-5" />
            <span className="font-medium">{t('advertise.banner')}</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
              {t('advertise.bannerButton')}
            </span>
          </Link>
        </div>
      </div>
      
      {/* Ad Banner Carousel - Dutchpool etc */}
      <div className="bg-background border-b">
        <div className="container mx-auto px-6 py-4">
          <AdBanner />
        </div>
      </div>
      
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}