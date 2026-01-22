import { useState } from 'react';
import { Search, Loader2, AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface StakeInfo {
  address: string;
  poolId: string;
  poolName: string;
  isRetired: boolean;
  stake: number;
  lastReward: string;
}

export default function Check() {
  const { t } = useTranslation();
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<StakeInfo | null>(null);
  const [error, setError] = useState<string | null>(null);

  const checkStake = async () => {
    if (!address.trim()) {
      setError(t('check.errors.empty'));
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Mock result
      setResult({
        address: address,
        poolId: 'pool1abc...xyz',
        poolName: 'Demo Pool',
        isRetired: Math.random() > 0.5,
        stake: Math.floor(Math.random() * 100000),
        lastReward: new Date().toISOString().split('T')[0],
      });
    } catch (err) {
      setError(t('check.errors.failed'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 gradient-text">
            {t('check.title')}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t('check.subtitle')}
          </p>
        </div>

        <Card className="glass-card mb-8">
          <CardHeader>
            <CardTitle>{t('check.form.title')}</CardTitle>
            <CardDescription>{t('check.form.description')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Input
                placeholder={t('check.form.placeholder')}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && checkStake()}
                className="flex-1"
              />
              <Button onClick={checkStake} disabled={loading}>
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Search className="h-4 w-4" />
                )}
              </Button>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-center gap-2 text-sm text-red-500"
              >
                <AlertCircle className="h-4 w-4" />
                {error}
              </motion.div>
            )}
          </CardContent>
        </Card>

        {result && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Card className={`glass-card ${result.isRetired ? 'border-red-500/50' : 'border-green-500/50'}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {result.isRetired ? (
                    <>
                      <XCircle className="h-5 w-5 text-red-500" />
                      {t('check.result.retired.title')}
                    </>
                  ) : (
                    <>
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      {t('check.result.active.title')}
                    </>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">{t('check.result.pool')}</p>
                  <p className="font-mono text-sm">{result.poolName}</p>
                  <p className="font-mono text-xs text-muted-foreground">{result.poolId}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t('check.result.stake')}</p>
                  <p className="text-2xl font-bold">â‚³{result.stake.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t('check.result.lastReward')}</p>
                  <p className="text-sm">{result.lastReward}</p>
                </div>

                {result.isRetired && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-md">
                    <p className="text-sm text-red-500 font-medium">
                      {t('check.result.retired.warning')}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}