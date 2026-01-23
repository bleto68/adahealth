import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, AlertTriangle, Users, TrendingDown, Shield, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DEMO_GLOBAL_STATS, DEMO_CHART_DATA, DEMO_LEADERBOARD, type PoolData } from '@/lib/data';
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="space-y-16 pb-16">
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 py-3">
          <Link 
            to="/advertise" 
            className="flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            <Sparkles className="w-5 h-5" />
            <span className="font-medium">{t('advertise.banner')}</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
              {t('advertise.bannerButton')}
            </span>
          </Link>
        </div>
      </div>

      <section className="pt-8">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <motion.div variants={itemVariants} className="inline-block px-4 py-2 bg-danger/10 text-danger rounded-full text-sm font-medium border border-danger/20">
              {t('hero.badge')}
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold tracking-tight">
              {t('hero.title')}
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('hero.description', {
                ada: formatAda(DEMO_GLOBAL_STATS.totalStakeLost),
                wallets: formatNumber(DEMO_GLOBAL_STATS.affectedWallets)
              })}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <Input
                placeholder={t('hero.placeholder')}
                value={stakeAddress}
                onChange={(e) => setStakeAddress(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
                className="flex-1"
              />
              <Button onClick={handleCheck} size="lg" className="sm:w-auto">
                {t('hero.button')} <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>

            <motion.p variants={itemVariants} className="text-sm text-muted-foreground">
              {t('hero.trustLine')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-6">
        <AdBanner />
      </section>

      <section className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div variants={itemVariants}>
            <Card className="border-danger/50 bg-danger/5">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-danger">
                  <TrendingDown className="w-5 h-5" />
                  {t('stats.lostRewards')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{formatAda(DEMO_GLOBAL_STATS.totalStakeLost)}</p>
                <p className="text-sm text-muted-foreground mt-1">{t('stats.totalStake')}</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  {t('stats.affectedWallets')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{formatNumber(DEMO_GLOBAL_STATS.affectedWallets)}</p>
                <p className="text-sm text-muted-foreground mt-1">{t('stats.activeUsers')}</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  {t('stats.retiredPools')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{formatNumber(DEMO_GLOBAL_STATS.retiredPools)}</p>
                <p className="text-sm text-muted-foreground mt-1">{t('stats.poolsRetired')}</p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      <section className="container mx-auto px-6">
        <AdvertiseCTA />
      </section>

      <section className="container mx-auto px-6">
        <Card>
          <CardHeader>
            <CardTitle>{t('home.chartTitle')}</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={DEMO_CHART_DATA}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="retiredPools" fill="hsl(var(--primary))" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </section>

      <section className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">{t('home.topPools')}</h2>
          <Button variant="outline" onClick={() => navigate('/leaderboard')}>
            {t('home.viewAll')} <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
        
        <div className="space-y-4">
          {DEMO_LEADERBOARD.slice(0, 5).map((pool: PoolData, index: number) => (
            <Card key={pool.poolId} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate(`/pool/${pool.poolId}`)}>
              <CardContent className="flex items-center justify-between p-6">
                <div className="flex items-center gap-4">
                  <div className="text-2xl font-bold text-muted-foreground">#{index + 1}</div>
                  <div>
                    <h3 className="font-semibold">{pool.name}</h3>
                    <p className="text-sm text-muted-foreground">{pool.ticker}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold">{formatAda(pool.stake)}</p>
                  <p className="text-sm text-muted-foreground">{formatNumber(pool.delegators)} {t('leaderboard.delegators')}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
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