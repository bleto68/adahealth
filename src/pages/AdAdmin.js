import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { TrendingUp, Eye, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
export default function AdAdmin() {
    const { t } = useTranslation();
    const [ads, setAds] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        loadAds();
    }, []);
    const loadAds = async () => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const mockAds = [
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
    return (_jsx("div", { className: "container mx-auto px-4 py-12", children: _jsxs("div", { className: "max-w-6xl mx-auto", children: [_jsxs("div", { className: "mb-8", children: [_jsx("h1", { className: "text-4xl font-bold mb-2 gradient-text", children: t('adAdmin.title') }), _jsx("p", { className: "text-muted-foreground", children: t('adAdmin.subtitle') })] }), _jsxs("div", { className: "grid gap-6 md:grid-cols-3 mb-8", children: [_jsxs(Card, { className: "glass-card", children: [_jsxs(CardHeader, { className: "flex flex-row items-center justify-between pb-2", children: [_jsx(CardTitle, { className: "text-sm font-medium", children: t('adAdmin.stats.impressions') }), _jsx(Eye, { className: "h-4 w-4 text-muted-foreground" })] }), _jsx(CardContent, { children: _jsx("div", { className: "text-2xl font-bold", children: totalImpressions.toLocaleString() }) })] }), _jsxs(Card, { className: "glass-card", children: [_jsxs(CardHeader, { className: "flex flex-row items-center justify-between pb-2", children: [_jsx(CardTitle, { className: "text-sm font-medium", children: t('adAdmin.stats.clicks') }), _jsx(TrendingUp, { className: "h-4 w-4 text-muted-foreground" })] }), _jsxs(CardContent, { children: [_jsx("div", { className: "text-2xl font-bold", children: totalClicks.toLocaleString() }), _jsxs("p", { className: "text-xs text-muted-foreground", children: [((totalClicks / totalImpressions) * 100).toFixed(2), "% CTR"] })] })] }), _jsxs(Card, { className: "glass-card", children: [_jsxs(CardHeader, { className: "flex flex-row items-center justify-between pb-2", children: [_jsx(CardTitle, { className: "text-sm font-medium", children: t('adAdmin.stats.spent') }), _jsx(DollarSign, { className: "h-4 w-4 text-muted-foreground" })] }), _jsx(CardContent, { children: _jsxs("div", { className: "text-2xl font-bold", children: ["\u00E2\u201A\u00B3", totalSpent.toFixed(2)] }) })] })] }), loading ? (_jsx("div", { className: "flex justify-center py-12", children: _jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" }) })) : (_jsx("div", { className: "space-y-4", children: ads.map((ad) => (_jsx(Card, { className: "glass-card", children: _jsxs(CardContent, { className: "p-6", children: [_jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsxs("div", { children: [_jsx("h3", { className: "font-semibold text-lg", children: ad.title }), _jsxs("p", { className: "text-sm text-muted-foreground", children: ["ID: ", ad.id] })] }), _jsx("div", { className: "flex items-center gap-2", children: _jsx("span", { className: `px-3 py-1 rounded-full text-xs font-medium ${ad.status === 'active'
                                                    ? 'bg-green-500/10 text-green-500'
                                                    : ad.status === 'paused'
                                                        ? 'bg-yellow-500/10 text-yellow-500'
                                                        : 'bg-gray-500/10 text-gray-500'}`, children: ad.status.toUpperCase() }) })] }), _jsxs("div", { className: "grid grid-cols-4 gap-4 mb-4", children: [_jsxs("div", { children: [_jsx("p", { className: "text-xs text-muted-foreground mb-1", children: t('adAdmin.stats.impressions') }), _jsx("p", { className: "text-lg font-semibold", children: ad.impressions.toLocaleString() })] }), _jsxs("div", { children: [_jsx("p", { className: "text-xs text-muted-foreground mb-1", children: t('adAdmin.stats.clicks') }), _jsx("p", { className: "text-lg font-semibold", children: ad.clicks.toLocaleString() })] }), _jsxs("div", { children: [_jsx("p", { className: "text-xs text-muted-foreground mb-1", children: "CTR" }), _jsxs("p", { className: "text-lg font-semibold", children: [((ad.clicks / ad.impressions) * 100).toFixed(2), "%"] })] }), _jsxs("div", { children: [_jsx("p", { className: "text-xs text-muted-foreground mb-1", children: t('adAdmin.stats.spent') }), _jsxs("p", { className: "text-lg font-semibold", children: ["\u00E2\u201A\u00B3", ad.spent.toFixed(2)] })] })] }), _jsxs("div", { className: "flex gap-2", children: [_jsx(Button, { variant: "outline", size: "sm", children: ad.status === 'active' ? t('adAdmin.actions.pause') : t('adAdmin.actions.resume') }), _jsx(Button, { variant: "outline", size: "sm", children: t('adAdmin.actions.edit') }), _jsx(Button, { variant: "outline", size: "sm", className: "text-red-500", children: t('adAdmin.actions.delete') })] })] }) }, ad.id))) }))] }) }));
}
