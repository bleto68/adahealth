import { Wallet, Info } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import WalletConnectDemo from '@/components/WalletConnectDemo';
import { useTranslation } from 'react-i18next';

export default function WalletDemo() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 gradient-text">
            {t('walletDemo.title')}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t('walletDemo.subtitle')}
          </p>
        </div>

        <div className="mb-8">
          <WalletConnectDemo />
        </div>

        <Card className="glass-card border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              {t('walletDemo.info.title')}
            </CardTitle>
            <CardDescription>{t('walletDemo.info.subtitle')}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">{t('walletDemo.features.title')}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {t('walletDemo.features.feature1')}
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  {t('walletDemo.features.feature2')}
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {t('walletDemo.features.feature3')}
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {t('walletDemo.features.feature4')}
                </li>
              </ul>
            </div>

            <div className="p-4 bg-muted rounded-md">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">{t('walletDemo.note.title')}</strong>{' '}
                {t('walletDemo.note.description')}
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">{t('walletDemo.supported.title')}</h3>
              <div className="flex flex-wrap gap-2">
                {['Nami', 'Eternl', 'Yoroi', 'Flint', 'Gero', 'Typhon'].map((wallet) => (
                  <div
                    key={wallet}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                  >
                    {wallet}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}