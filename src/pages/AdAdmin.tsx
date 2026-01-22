import { useState, useEffect } from 'react';
import { TrendingUp, Eye, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

interface AdStats {
  id: string;
  title: string;
  impressions: number;
  clicks: number;
  spent: number;
  status: 'active' | 'paused' | 'completed';
}

export default function AdAdmin() {
  const { t } = useTranslation();
  const [ads, setAds] = useState<AdStats[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAds();
  }, []);

  const loadAds = async () => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const mockAds: AdStats[] = [
      {
        id: '1',
        title: 'Sample Ad Campaign 1',
        impressions: 15420,
        clicks: 342,
        spent: 45.5,
        status: 'active',
      },
      {
        id: '2',
        title: 'Sample Ad Campaign 2',
        impressions: 8932,
        clicks: 156,
        spent: 28.0,
        status: 'paused',
      },
    ];

    setAds(mockAds);
    setLoading(false);
  };

  const totalImpressions = ads.reduce((sum, ad) => sum + ad.impressions, 0);
  const totalClicks = ads.reduce((sum, ad) => sum + ad.clicks, 0);
  const totalSpent = ads.reduce((sum, ad) => sum + ad.spent, 0);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 gradient-text">
            {t('adAdmin.title')}
          </h1>
          <p className="text-muted-foreground">{t('adAdmin.subtitle')}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Card className="glass-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {t('adAdmin.stats.impressions')}
              </CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalImpressions.toLocaleString()}</div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {t('adAdmin.stats.clicks')}
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalClicks.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                {((totalClicks / totalImpressions) * 100).toFixed(2)}% CTR
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {t('adAdmin.stats.spent')}
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">â‚³{totalSpent.toFixed(2)}</div>
            </CardContent>
          </Card>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" />
          </div>
        ) : (
          <div className="space-y-4">
            {ads.map((ad) => (
              <Card key={ad.id} className="glass-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{ad.title}</h3>
                      <p className="text-sm text-muted-foreground">ID: {ad.id}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          ad.status === 'active'
                            ? 'bg-green-500/10 text-green-500'
                            : ad.status === 'paused'
                            ? 'bg-yellow-500/10 text-yellow-500'
                            : 'bg-gray-500/10 text-gray-500'
                        }`}
                      >
                        {ad.status.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">
                        {t('adAdmin.stats.impressions')}
                      </p>
                      <p className="text-lg font-semibold">{ad.impressions.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">
                        {t('adAdmin.stats.clicks')}
                      </p>
                      <p className="text-lg font-semibold">{ad.clicks.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">CTR</p>
                      <p className="text-lg font-semibold">
                        {((ad.clicks / ad.impressions) * 100).toFixed(2)}%
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">
                        {t('adAdmin.stats.spent')}
                      </p>
                      <p className="text-lg font-semibold">â‚³{ad.spent.toFixed(2)}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      {ad.status === 'active' ? t('adAdmin.actions.pause') : t('adAdmin.actions.resume')}
                    </Button>
                    <Button variant="outline" size="sm">
                      {t('adAdmin.actions.edit')}
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-500">
                      {t('adAdmin.actions.delete')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}