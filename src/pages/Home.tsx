import { Link } from 'react-router-dom';
import { ArrowRight, TrendingDown, Users, Shield, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AdvertiseCTA from '@/components/AdvertiseCTA';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Home() {
  const { t } = useTranslation();

  const stats = [
    {
      icon: TrendingDown,
      value: 'â‚³86M',
      label: t('home.stats.lost'),
      color: 'text-red-500',
    },
    {
      icon: Users,
      value: '47,000+',
      label: t('home.stats.affected'),
      color: 'text-yellow-500',
    },
    {
      icon: Shield,
      value: '100%',
      label: t('home.stats.transparent'),
      color: 'text-green-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-background/95 to-background py-20 lg:py-32">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 inline-block"
            >
              <div className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20">
                {t('home.hero.badge')}
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            >
              <span className="gradient-text">{t('home.hero.title')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8 text-lg text-muted-foreground sm:text-xl"
            >
              {t('home.hero.subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button asChild size="lg" className="text-base glow-effect">
                <Link to="/check">
                  <Search className="mr-2 h-5 w-5" />
                  {t('home.hero.cta')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link to="/leaderboard">{t('home.hero.secondary')}</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-6 md:grid-cols-3"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="glass-card text-center hover:border-primary/50 transition-all duration-300">
                  <CardContent className="pt-6">
                    <stat.icon className={`mx-auto h-12 w-12 mb-4 ${stat.color}`} />
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">{t('home.features.title')}</h2>
            <p className="text-muted-foreground">{t('home.features.subtitle')}</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto"
          >
            {[
              {
                title: t('home.features.check.title'),
                description: t('home.features.check.description'),
                icon: Search,
              },
              {
                title: t('home.features.transparency.title'),
                description: t('home.features.transparency.description'),
                icon: Shield,
              },
              {
                title: t('home.features.community.title'),
                description: t('home.features.community.description'),
                icon: Users,
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="glass-card h-full hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <feature.icon className="h-10 w-10 text-primary mb-2" />
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="glass-card h-full">
                <CardHeader>
                  <CardTitle>{t('home.cta.check.title')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {t('home.cta.check.description')}
                  </p>
                  <Button asChild className="w-full">
                    <Link to="/check">
                      {t('home.cta.check.button')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <AdvertiseCTA />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}