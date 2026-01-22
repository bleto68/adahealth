import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { TrendingDown, Users, Coins } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
export default function Leaderboard() {
    const { t } = useTranslation();
    const [pools, setPools] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        loadPools();
    }, []);
    const loadPools = async () => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const mockPools = Array.from({ length: 10 }, (_, i) => ({
            id: `pool${i + 1}`,
            ticker: `POOL${i + 1}`,
            name: `Retired Pool ${i + 1}`,
            affectedWallets: Math.floor(Math.random() * 10000) + 1000,
            lockedAda: Math.floor(Math.random() * 10000000) + 100000,
            retiredDate: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000)
                .toISOString()
                .split('T')[0],
        })).sort((a, b) => b.lockedAda - a.lockedAda);
        setPools(mockPools);
        setLoading(false);
    };
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        },
    };
    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };
    return (_jsx("div", { className: "container mx-auto px-4 py-12", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx("h1", { className: "text-4xl font-bold mb-4 gradient-text", children: t('leaderboard.title') }), _jsx("p", { className: "text-lg text-muted-foreground", children: t('leaderboard.subtitle') })] }), _jsxs("div", { className: "grid gap-6 md:grid-cols-3 mb-8", children: [_jsxs(Card, { className: "glass-card", children: [_jsxs(CardHeader, { className: "flex flex-row items-center justify-between pb-2", children: [_jsx(CardTitle, { className: "text-sm font-medium", children: t('leaderboard.stats.totalLocked') }), _jsx(Coins, { className: "h-4 w-4 text-muted-foreground" })] }), _jsx(CardContent, { children: _jsx("div", { className: "text-2xl font-bold", children: "\u00E2\u201A\u00B386M" }) })] }), _jsxs(Card, { className: "glass-card", children: [_jsxs(CardHeader, { className: "flex flex-row items-center justify-between pb-2", children: [_jsx(CardTitle, { className: "text-sm font-medium", children: t('leaderboard.stats.affectedWallets') }), _jsx(Users, { className: "h-4 w-4 text-muted-foreground" })] }), _jsx(CardContent, { children: _jsx("div", { className: "text-2xl font-bold", children: "47,000+" }) })] }), _jsxs(Card, { className: "glass-card", children: [_jsxs(CardHeader, { className: "flex flex-row items-center justify-between pb-2", children: [_jsx(CardTitle, { className: "text-sm font-medium", children: t('leaderboard.stats.retiredPools') }), _jsx(TrendingDown, { className: "h-4 w-4 text-muted-foreground" })] }), _jsx(CardContent, { children: _jsx("div", { className: "text-2xl font-bold", children: pools.length }) })] })] }), loading ? (_jsx("div", { className: "flex justify-center py-12", children: _jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" }) })) : (_jsx(motion.div, { variants: containerVariants, initial: "hidden", animate: "visible", className: "space-y-3", children: pools.map((pool, index) => (_jsx(motion.div, { variants: itemVariants, children: _jsx(Link, { to: `/pool/${pool.id}`, children: _jsx(Card, { className: "glass-card hover:border-primary/50 transition-all cursor-pointer", children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center gap-4", children: [_jsxs("div", { className: "flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-lg", children: ["#", index + 1] }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsxs("h3", { className: "font-semibold text-lg truncate", children: ["[", pool.ticker, "] ", pool.name] }), _jsx("p", { className: "text-sm text-muted-foreground font-mono truncate", children: pool.id })] }), _jsxs("div", { className: "text-right", children: [_jsxs("div", { className: "text-xl font-bold text-red-500", children: ["\u00E2\u201A\u00B3", (pool.lockedAda / 1000000).toFixed(1), "M"] }), _jsxs("div", { className: "text-sm text-muted-foreground", children: [pool.affectedWallets.toLocaleString(), " ", t('leaderboard.wallets')] })] })] }) }) }) }) }, pool.id))) }))] }) }));
}
