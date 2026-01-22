import { Link } from 'react-router-dom';
import { Megaphone } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { useTranslation } from 'react-i18next';

export default function AdvertiseCTA() {
  const { t } = useTranslation();

  return (
    <Card className="glass-card border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Megaphone className="h-5 w-5 text-primary" />
          {t('advertise.title')}
        </CardTitle>
        <CardDescription>{t('advertise.description')}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              {t('advertise.benefit1')}
            </li>
            <li className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
              {t('advertise.benefit2')}
            </li>
            <li className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-accent" />
              {t('advertise.benefit3')}
            </li>
          </ul>
          <Button asChild className="w-full">
            <Link to="/advertise">
              <Megaphone className="mr-2 h-4 w-4" />
              {t('advertise.cta')}
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}