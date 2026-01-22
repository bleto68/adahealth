import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Users, Coins, TrendingDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
export default function PoolDetail() {
    const { poolId } = useParams();
    const { t } = useTranslation();
    const [pool, setPool] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        loadPoolDetails();
    }, [poolId]);
    const loadPoolDetails = async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const mockPool = {
            id: poolId || '',
            ticker: 'POOL1',
            name: 'Retired Pool 1',
            description: 'This pool has been retired and is no longer producing blocks.',
            affectedWallets: Math.floor(Math.random() * 10000) + 1000,
            lockedAda: Math.floor(Math.random() * 10000000) + 100000,
            retiredDate: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000)
                .toISOString()
                .split('T')[0],
            lastActiveEpoch: 450,
            historicalData: Array.from({ length: 10 }, (_, i) => ({
                epoch: 440 + i,
                stake: Math.floor(Math.random() * 5000000) + 1000000,
            })),
        };
        setPool(mockPool);
        setLoading(false);
    };
    if (loading) {
        return (_jsx("div", { className: "container mx-auto px-4 py-12 flex justify-center", children: _jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" }) }));
    }
    if (!pool) {
        return (_jsx("div", { className: "container mx-auto px-4 py-12 text-center", children: _jsx("p", { className: "text-muted-foreground", children: t('poolDetail.notFound') }) }));
    }
    return (_jsx("div", { className: "container mx-auto px-4 py-12", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, children: [_jsx(Button, { variant: "ghost", asChild: true, className: "mb-6", children: _jsxs(Link, { to: "/leaderboard", children: [_jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }), t('poolDetail.back')] }) }), _jsxs("div", { className: "mb-8", children: [_jsxs("h1", { className: "text-4xl font-bold mb-2", children: ["[", pool.ticker, "] ", pool.name] }), _jsx("p", { className: "text-muted-foreground font-mono text-sm", children: pool.id })] }), _jsxs("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8", children: [_jsxs(Card, { className: "glass-card", children: [_jsxs(CardHeader, { className: "flex flex-row items-center justify-between pb-2", children: [_jsx(CardTitle, { className: "text-sm font-medium", children: t('poolDetail.stats.locked') }), _jsx(Coins, { className: "h-4 w-4 text-muted-foreground" })] }), _jsx(CardContent, { children: _jsxs("div", { className: "text-2xl font-bold text-red-500", children: ["\u00E2\u201A\u00B3", (pool.lockedAda / 1000000).toFixed(2), "M"] }) })] }), _jsxs(Card, { className: "glass-card", children: [_jsxs(CardHeader, { className: "flex flex-row items-center justify-between pb-2", children: [_jsx(CardTitle, { className: "text-sm font-medium", children: t('poolDetail.stats.wallets') }), _jsx(Users, { className: "h-4 w-4 text-muted-foreground" })] }), _jsx(CardContent, { children: _jsx("div", { className: "text-2xl font-bold", children: pool.affectedWallets.toLocaleString() }) })] }), _jsxs(Card, { className: "glass-card", children: [_jsxs(CardHeader, { className: "flex flex-row items-center justify-between pb-2", children: [_jsx(CardTitle, { className: "text-sm font-medium", children: t('poolDetail.stats.retired') }), _jsx(Calendar, { className: "h-4 w-4 text-muted-foreground" })] }), _jsx(CardContent, { children: _jsx("div", { className: "text-xl font-bold", children: pool.retiredDate }) })] }), _jsxs(Card, { className: "glass-card", children: [_jsxs(CardHeader, { className: "flex flex-row items-center justify-between pb-2", children: [_jsx(CardTitle, { className: "text-sm font-medium", children: t('poolDetail.stats.lastEpoch') }), _jsx(TrendingDown, { className: "h-4 w-4 text-muted-foreground" })] }), _jsx(CardContent, { children: _jsx("div", { className: "text-2xl font-bold", children: pool.lastActiveEpoch }) })] })] }), _jsxs(Card, { className: "glass-card mb-8", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: t('poolDetail.chart.title') }) }), _jsx(CardContent, { children: _jsx(ResponsiveContainer, { width: "100%", height: 300, children: _jsxs(LineChart, { data: pool.historicalData, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "hsl(var(--border))" }), _jsx(XAxis, { dataKey: "epoch", stroke: "hsl(var(--muted-foreground))", fontSize: 12 }), _jsx(YAxis, { stroke: "hsl(var(--muted-foreground))", fontSize: 12, tickFormatter: (value) => `â‚³${(value / 1000000).toFixed(1)}M` }), _jsx(Tooltip, { contentStyle: {
                                                backgroundColor: 'hsl(var(--card))',
                                                border: '1px solid hsl(var(--border))',
                                                borderRadius: '8px',
                                            }, formatter: (value) => [`â‚³${(value / 1000000).toFixed(2)}M`, 'Stake'] }), _jsx(Line, { type: "monotone", dataKey: "stake", stroke: "hsl(var(--primary))", strokeWidth: 2, dot: { fill: 'hsl(var(--primary))' } })] }) }) })] }), _jsxs(Card, { className: "glass-card border-red-500/50", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: "text-red-500", children: t('poolDetail.warning.title') }) }), _jsx(CardContent, { children: _jsx("p", { className: "text-muted-foreground", children: t('poolDetail.warning.description') }) })] })] }) }));
}
