import { useState } from 'react';
import { Wallet, CheckCircle2, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const WALLETS = [
  { id: 'nami', name: 'Nami', icon: '🦎' },
  { id: 'lace', name: 'Lace', icon: '🎀' },
  { id: 'eternl', name: 'Eternl', icon: '♾️' },
  { id: 'yoroi', name: 'Yoroi', icon: '🦊' },
  { id: 'flint', name: 'Flint', icon: '🔥' },
  { id: 'typhon', name: 'Typhon', icon: '🌊' },
];

interface WalletConnectDemoProps {
  onConnect?: (walletId: string, stakeAddress: string) => void;
}

export default function WalletConnectDemo({ onConnect }: WalletConnectDemoProps) {
  const [open, setOpen] = useState(false);
  const [connected, setConnected] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState<string>('');
  const { t } = useTranslation();

  const handleWalletClick = (walletId: string) => {
    setSelectedWallet(walletId);
    setConnected(true);
    const demoStakeAddress = 'stake1u8pcjgmx7962w6hey5hhsd502araxp26kdtgagakhaqtq8squng76';
    setTimeout(() => {
      onConnect?.(walletId, demoStakeAddress);
      setOpen(false);
    }, 1500);
  };

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setOpen(true)}
        className="gap-2"
      >
        <Wallet className="w-4 h-4" />
        {t('wallet.connect')}
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Wallet className="w-5 h-5" />
              {t('wallet.title')}
            </DialogTitle>
            <DialogDescription>{t('wallet.select')}</DialogDescription>
          </DialogHeader>

          {connected ? (
            <div className="flex flex-col items-center justify-center py-8">
              <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
              <p className="text-lg font-semibold mb-2">{t('wallet.success')}</p>
              <p className="text-sm text-muted-foreground text-center">
                {t('wallet.redirecting')}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {WALLETS.map((wallet) => (
                  <button
                    key={wallet.id}
                    onClick={() => handleWalletClick(wallet.id)}
                    className="flex items-center gap-3 p-4 rounded-lg border-2 border-border hover:border-primary hover:bg-accent transition-all group"
                  >
                    <span className="text-2xl">{wallet.icon}</span>
                    <span className="font-medium group-hover:text-primary transition-colors">
                      {wallet.name}
                    </span>
                  </button>
                ))}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3">
                <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-blue-900">
                  <p className="font-semibold mb-1">{t('wallet.readOnly')}</p>
                  <p className="text-blue-700">{t('wallet.readOnlyDesc')}</p>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                <p className="text-xs text-amber-900 font-medium">
                  🎭 <strong>{t('wallet.demoMode')}:</strong> {t('wallet.demoDesc')}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}