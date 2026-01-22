import { Link } from 'react-router-dom';
import { Megaphone, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function AdvertiseCTA() {
  const { t } = useTranslation();
  
  return (
    <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center flex-shrink-0">
            <Megaphone className="w-6 h-6 text-white" />
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">
              {t('advertise.ctaTitle')}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {t('advertise.ctaDesc')}
            </p>
            
            <Button asChild size="sm" className="gap-2">
              <Link to="/advertise">
                {t('advertise.ctaButton')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}