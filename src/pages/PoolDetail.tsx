import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Users, Coins, TrendingDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface PoolDetails {
  id: string;
  ticker: string;
  name: string;
  description: string;
  affectedWallets: number;
  lockedAda: number;
  retiredDate: string;
  lastActiveEpoch: number;
  historicalData: Array<{ epoch: number; stake: number }>;
}

export default function PoolDetail() {
  const { poolId } = useParams();
  const { t } = useTranslation();
  const [pool, setPool] = useState<PoolDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPoolDetails();
  }, [poolId]);

  const loadPoolDetails = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const mockPool: PoolDetails = {
      id: poolId || '',
      ticker: 'POOL1',
      name: 'Retired Pool 1',
      description: 'This pool has been retired and is no longer producing blocks.',
      affectedWallets: Math.floor(Math.random() * 10000) + 1000,
      lockedAda: Math.floor(Math.random() * 10000000) + 100000,
      retiredDate: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split('T')[0],
      lastActiveEpoch: 450,
      historicalData: Array.from({ length: 10 }, (_, i) => ({
        epoch: 440 + i,
        stake: Math.floor(Math.random() * 5000000) + 1000000,
      })),
    };

    setPool(mockPool);
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  if (!pool) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-muted-foreground">{t('poolDetail.notFound')}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/leaderboard">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('poolDetail.back')}
          </Link>
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            [{pool.ticker}] {pool.name}
          </h1>
          <p className="text-muted-foreground font-mono text-sm">{pool.id}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card className="glass-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {t('poolDetail.stats.locked')}
              </CardTitle>
              <Coins className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-500">
                â‚³{(pool.lockedAda / 1000000).toFixed(2)}M
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {t('poolDetail.stats.wallets')}
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{pool.affectedWallets.toLocaleString()}</div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {t('poolDetail.stats.retired')}
              </CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-xl font-bold">{pool.retiredDate}</div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {t('poolDetail.stats.lastEpoch')}
              </CardTitle>
              <TrendingDown className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{pool.lastActiveEpoch}</div>
            </CardContent>
          </Card>
        </div>

        <Card className="glass-card mb-8">
          <CardHeader>
            <CardTitle>{t('poolDetail.chart.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={pool.historicalData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis
                  dataKey="epoch"
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickFormatter={(value) => `â‚³${(value / 1000000).toFixed(1)}M`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                  }}
                  formatter={(value: number) => [`â‚³${(value / 1000000).toFixed(2)}M`, 'Stake']}
                />
                <Line
                  type="monotone"
                  dataKey="stake"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  dot={{ fill: 'hsl(var(--primary))' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="glass-card border-red-500/50">
          <CardHeader>
            <CardTitle className="text-red-500">{t('poolDetail.warning.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{t('poolDetail.warning.description')}</p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}