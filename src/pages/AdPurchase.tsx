import { useState } from 'react';
import { Megaphone, DollarSign, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

export default function AdPurchase() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    url: '',
    imageUrl: '',
    budget: '',
    duration: '7',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Ad purchase:', formData);
  };

  const benefits = [
    {
      icon: Target,
      title: t('advertise.benefits.targeted.title'),
      description: t('advertise.benefits.targeted.description'),
    },
    {
      icon: TrendingUp,
      title: t('advertise.benefits.visibility.title'),
      description: t('advertise.benefits.visibility.description'),
    },
    {
      icon: DollarSign,
      title: t('advertise.benefits.affordable.title'),
      description: t('advertise.benefits.affordable.description'),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 gradient-text">
            {t('advertise.title')}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t('advertise.subtitle')}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="glass-card">
              <CardHeader>
                <benefit.icon className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-lg">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Megaphone className="h-5 w-5 text-primary" />
              {t('advertise.form.title')}
            </CardTitle>
            <CardDescription>{t('advertise.form.description')}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">{t('advertise.form.adTitle')}</label>
                <Input
                  placeholder={t('advertise.form.adTitlePlaceholder')}
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">{t('advertise.form.description')}</label>
                <Input
                  placeholder={t('advertise.form.descriptionPlaceholder')}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">{t('advertise.form.url')}</label>
                <Input
                  type="url"
                  placeholder="https://your-website.com"
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">{t('advertise.form.image')}</label>
                <Input
                  type="url"
                  placeholder="https://your-image-url.com/image.png"
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                />
                <p className="text-xs text-muted-foreground">
                  {t('advertise.form.imageHint')}
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t('advertise.form.budget')}</label>
                  <Input
                    type="number"
                    placeholder="100"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    {t('advertise.form.budgetHint')}
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">{t('advertise.form.duration')}</label>
                  <select
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  >
                    <option value="7">7 {t('advertise.form.days')}</option>
                    <option value="14">14 {t('advertise.form.days')}</option>
                    <option value="30">30 {t('advertise.form.days')}</option>
                    <option value="90">90 {t('advertise.form.days')}</option>
                  </select>
                </div>
              </div>

              <div className="p-4 bg-primary/10 border border-primary/20 rounded-md">
                <p className="text-sm">
                  <strong className="text-foreground">{t('advertise.form.estimate')}</strong>
                  <br />
                  <span className="text-muted-foreground">
                    {t('advertise.form.estimateDescription')}
                  </span>
                </p>
              </div>

              <Button type="submit" className="w-full" size="lg">
                <Megaphone className="mr-2 h-4 w-4" />
                {t('advertise.form.submit')}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}