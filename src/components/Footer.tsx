import { Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="border-t bg-background mt-auto">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Activity className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-semibold text-lg">ADAHealth.io</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {t('footer.tagline')}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://twitter.com/adahealth_io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow us on X (Twitter)"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">{t('footer.useful')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">{t('nav.home')}</Link></li>
              <li><Link to="/check" className="hover:text-primary transition-colors">{t('nav.check')}</Link></li>
              <li><Link to="/leaderboard" className="hover:text-primary transition-colors">{t('nav.leaderboard')}</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">{t('nav.about')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">{t('footer.builtBy')}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {t('footer.builtByDesc')}
            </p>
            <div className="text-sm bg-primary/5 border border-primary/20 rounded-lg p-3">
              <p className="font-semibold text-primary mb-1">Dutchpool NLD</p>
              <p className="text-xs text-muted-foreground">
                {t('footer.dutchpoolInfo')}
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ADAHealth.io. {t('footer.allRights')}</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-primary transition-colors">{t('footer.privacy')}</a>
            <a href="/terms" className="hover:text-primary transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}