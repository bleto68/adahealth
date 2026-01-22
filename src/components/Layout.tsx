import { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import AdBanner from './AdBanner';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <AdBanner />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}