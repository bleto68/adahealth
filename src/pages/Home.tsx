import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, AlertTriangle, Users, TrendingDown, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DEMO_GLOBAL_STATS, DEMO_CHART_DATA, DEMO_LEADERBOARD } from '@/lib/data';
import { formatAda, formatNumber } from '@/lib/utils';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import AdBanner from '@/components/AdBanner';
import AdvertiseCTA from '@/components/AdvertiseCTA';

export default function Home() {
  const [stakeAddress, setStakeAddress] = useState('');
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const handleCheck = () => {
    if (stakeAddress.trim()) {
      navigate(`/check/${stakeAddress.trim()}`);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-background to-background">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        
        <div className="container mx-auto px-6 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
              <Shield className="w-4 h-4" />
              {t('hero.badge')}
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold tracking-tight">
              {t('hero.title')}
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-muted-foreground font-medium">
              {t('hero.subtitle')}
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t('hero.description', {
                ada: formatAda(DEMO_GLOBAL_STATS.totalStakeLost),
                wallets: formatNumber(DEMO_GLOBAL_STATS.affectedWallets)
              })}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <Input
                type="text"
                placeholder={t('hero.placeholder')}
                value={stakeAddress}
                onChange={(e) => setStakeAddress(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
                className="flex-1 h-12 text-base"
              />
              <Button
                size="lg"
                onClick={handleCheck}
                className="h-12 px-8 gap-2"
              >
                {t('hero.button')}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>

            <motion.p variants={itemVariants} className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              <Shield className="w-4 h-4" />
              {t('hero.trustLine')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Ad Banner Section - SINGLE */}
      <section className="container mx-auto px-6">
        <AdBanner />
      </section>

      {/* Stats Grid */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-destructive/50 bg-destructive/5">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{t('stats.lostRewards')}</CardTitle>
              <AlertTriangle className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-destructive">
                {formatAda(DEMO_GLOBAL_STATS.totalStakeLost)}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {t('stats.totalStake')}
              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-500/50 bg-orange-500/5">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{t('stats.affectedWallets')}</CardTitle>
              <Users className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-500">
                {formatNumber(DEMO_GLOBAL_STATS.affectedWallets)}+
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {t('stats.activeUsers')}
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-500/50 bg-blue-500/5">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{t('stats.retiredPools')}</CardTitle>
              <TrendingDown className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-500">
                {DEMO_GLOBAL_STATS.retiredPools}+
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {t('stats.poolsRetired')}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Advertise CTA */}
      <section className="container mx-auto px-6">
        <AdvertiseCTA />
      </section>

      {/* Chart Section */}
      <section className="container mx-auto px-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{t('home.chartTitle')}</CardTitle>
            <p className="text-muted-foreground">{t('home.chartSubtitle')}</p>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={DEMO_CHART_DATA}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="ticker" />
                  <YAxis />
                  <Tooltip
                    formatter={(value: number) => formatAda(value)}
                    labelStyle={{ color: '#000' }}
                  />
                  <Bar dataKey="lostRewards" fill="hsl(var(--destructive))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Leaderboard Preview */}
      <section className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">{t('home.topPools')}</h2>
          <Button variant="outline" onClick={() => navigate('/leaderboard')}>
            {t('home.viewAll')} <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEMO_LEADERBOARD.slice(0, 5).map((pool, index) => (
            <Card key={pool.poolId} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate(`/pool/${pool.poolId}`)}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-muted-foreground">#{index + 1}</span>
                      <span className="px-2 py-1 bg-destructive/10 text-destructive rounded text-sm font-mono">
                        {pool.ticker}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{pool.name}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{t('leaderboard.lostRewards')}</span>
                    <span className="font-bold text-destructive">{formatAda(pool.lostRewards)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{t('leaderboard.delegators')}</span>
                    <span className="font-medium">{formatNumber(pool.delegators)} {t('leaderboard.wallets')}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Why This Matters */}
      <section className="py-16 bg-gradient-to-b from-blue-50/20 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="w-12 h-12 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('about.mission')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('about.problemDesc')}
            </p>
            <Button size="lg" onClick={() => navigate('/about')}>
              {t('about.ctaButton')} <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}