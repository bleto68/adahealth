import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Activity } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import LanguageSelector from './LanguageSelector';
import WalletConnectDemo from './WalletConnectDemo';

export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const handleWalletConnect = (walletId: string, stakeAddress: string) => {
    navigate(`/check/${stakeAddress}`);
  };
  
  const links = [
    { path: '/', label: t('nav.home') },
    { path: '/check', label: t('nav.check') },
    { path: '/leaderboard', label: t('nav.leaderboard') },
    { path: '/about', label: t('nav.about') },
  ];
  
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-semibold text-xl">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Activity className="w-5 h-5 text-primary-foreground" />
            </div>
            <span>ADAHealth<span className="text-primary">.io</span></span>
          </Link>
          
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  location.pathname === link.path
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                )}
              >
                {link.label}
              </Link>
            ))}
            
            <WalletConnectDemo onConnect={handleWalletConnect} />
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  );
}