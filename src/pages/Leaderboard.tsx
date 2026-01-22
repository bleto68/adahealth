import { useState, useEffect } from 'react';
import { TrendingDown, Users, Coins } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface PoolData {
  id: string;
  ticker: string;
  name: string;
  affectedWallets: number;
  lockedAda: number;
  retiredDate: string;
}

export default function Leaderboard() {
  const { t } = useTranslation();
  const [pools, setPools] = useState<PoolData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPools();
  }, []);

  const loadPools = async () => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const mockPools: PoolData[] = Array.from({ length: 10 }, (_, i) => ({
      id: `pool${i + 1}`,
      ticker: `POOL${i + 1}`,
      name: `Retired Pool ${i + 1}`,
      affectedWallets: Math.floor(Math.random() * 10000) + 1000,
      lockedAda: Math.floor(Math.random() * 10000000) + 100000,
      retiredDate: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split('T')[0],
    })).sort((a, b) => b.lockedAda - a.lockedAda);

    setPools(mockPools);
    setLoading(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 gradient-text">
            {t('leaderboard.title')}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t('leaderboard.subtitle')}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Card className="glass-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {t('leaderboard.stats.totalLocked')}
              </CardTitle>
              <Coins className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">â‚³86M</div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {t('leaderboard.stats.affectedWallets')}
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">47,000+</div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {t('leaderboard.stats.retiredPools')}
              </CardTitle>
              <TrendingDown className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{pools.length}</div>
            </CardContent>
          </Card>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" />
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-3"
          >
            {pools.map((pool, index) => (
              <motion.div key={pool.id} variants={itemVariants}>
                <Link to={`/pool/${pool.id}`}>
                  <Card className="glass-card hover:border-primary/50 transition-all cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-lg">
                          #{index + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-lg truncate">
                            [{pool.ticker}] {pool.name}
                          </h3>
                          <p className="text-sm text-muted-foreground font-mono truncate">
                            {pool.id}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-red-500">
                            â‚³{(pool.lockedAda / 1000000).toFixed(1)}M
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {pool.affectedWallets.toLocaleString()} {t('leaderboard.wallets')}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}