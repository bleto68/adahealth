import { Shield, Users, Target, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function About() {
  const { t } = useTranslation();

  const values = [
    {
      icon: Shield,
      title: t('about.values.transparency.title'),
      description: t('about.values.transparency.description'),
    },
    {
      icon: Users,
      title: t('about.values.community.title'),
      description: t('about.values.community.description'),
    },
    {
      icon: Target,
      title: t('about.values.accuracy.title'),
      description: t('about.values.accuracy.description'),
    },
    {
      icon: Heart,
      title: t('about.values.independence.title'),
      description: t('about.values.independence.description'),
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 gradient-text">
            {t('about.title')}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t('about.subtitle')}
          </p>
        </div>

        <Card className="glass-card mb-12">
          <CardHeader>
            <CardTitle>{t('about.mission.title')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              {t('about.mission.paragraph1')}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t('about.mission.paragraph2')}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t('about.mission.paragraph3')}
            </p>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">{t('about.values.title')}</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2"
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="glass-card h-full">
                  <CardHeader>
                    <value.icon className="h-10 w-10 text-primary mb-2" />
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle>{t('about.team.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('about.team.description')}
            </p>
            <p className="text-sm text-muted-foreground">
              {t('about.team.contact')}
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}