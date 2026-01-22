import { useState } from 'react';
import { Wallet, Check, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { useTranslation } from 'react-i18next';

export default function WalletConnectDemo() {
  const { t } = useTranslation();
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const connectWallet = async () => {
    setIsConnecting(true);
    setError(null);

    try {
      // Simulate wallet connection
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsConnected(true);
    } catch (err) {
      setError(t('wallet.error'));
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = () => {
    setIsConnected(false);
  };

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wallet className="h-5 w-5 text-primary" />
          {t('wallet.title')}
        </CardTitle>
        <CardDescription>{t('wallet.description')}</CardDescription>
      </CardHeader>
      <CardContent>
        {!isConnected ? (
          <div className="space-y-4">
            <Button
              onClick={connectWallet}
              disabled={isConnecting}
              className="w-full"
            >
              {isConnecting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent mr-2" />
                  {t('wallet.connecting')}
                </>
              ) : (
                <>
                  <Wallet className="mr-2 h-4 w-4" />
                  {t('wallet.connect')}
                </>
              )}
            </Button>

            {error && (
              <div className="flex items-center gap-2 text-sm text-red-500">
                <AlertCircle className="h-4 w-4" />
                {error}
              </div>
            )}

            <p className="text-xs text-muted-foreground">
              {t('wallet.supported')}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-green-500">
              <Check className="h-4 w-4" />
              {t('wallet.connected')}
            </div>
            <div className="p-3 bg-muted rounded-md">
              <p className="text-xs text-muted-foreground mb-1">
                {t('wallet.address')}
              </p>
              <p className="text-sm font-mono break-all">
                addr1qxy...demo...xyz
              </p>
            </div>
            <Button
              onClick={disconnectWallet}
              variant="outline"
              className="w-full"
            >
              {t('wallet.disconnect')}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}