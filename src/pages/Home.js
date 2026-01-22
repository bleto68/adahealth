import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs("div", { className: "flex flex-col", children: [_jsxs("section", { className: "relative overflow-hidden bg-gradient-to-b from-background via-background/95 to-background py-20 lg:py-32", children: [_jsx("div", { className: "absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" }), _jsx("div", { className: "container relative mx-auto px-4", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: "mx-auto max-w-4xl text-center", children: [_jsx(motion.div, { initial: { scale: 0.9, opacity: 0 }, animate: { scale: 1, opacity: 1 }, transition: { duration: 0.5, delay: 0.2 }, className: "mb-6 inline-block", children: _jsx("div", { className: "rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20", children: t('home.hero.badge') }) }), _jsx(motion.h1, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.3 }, className: "mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl", children: _jsx("span", { className: "gradient-text", children: t('home.hero.title') }) }), _jsx(motion.p, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.4 }, className: "mb-8 text-lg text-muted-foreground sm:text-xl", children: t('home.hero.subtitle') }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.5 }, className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx(Button, { asChild: true, size: "lg", className: "text-base glow-effect", children: _jsxs(Link, { to: "/check", children: [_jsx(Search, { className: "mr-2 h-5 w-5" }), t('home.hero.cta'), _jsx(ArrowRight, { className: "ml-2 h-5 w-5" })] }) }), _jsx(Button, { asChild: true, variant: "outline", size: "lg", className: "text-base", children: _jsx(Link, { to: "/leaderboard", children: t('home.hero.secondary') }) })] })] }) })] }), _jsx("section", { className: "py-16 lg:py-24", children: _jsx("div", { className: "container mx-auto px-4", children: _jsx(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-100px" }, className: "grid gap-6 md:grid-cols-3", children: stats.map((stat, index) => (_jsx(motion.div, { variants: itemVariants, children: _jsx(Card, { className: "glass-card text-center hover:border-primary/50 transition-all duration-300", children: _jsxs(CardContent, { className: "pt-6", children: [_jsx(stat.icon, { className: `mx-auto h-12 w-12 mb-4 ${stat.color}` }), _jsx("div", { className: "text-3xl font-bold mb-2", children: stat.value }), _jsx("div", { className: "text-sm text-muted-foreground", children: stat.label })] }) }) }, index))) }) }) }), _jsx("section", { className: "py-16 lg:py-24 bg-card/30", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, className: "mx-auto max-w-2xl text-center mb-12", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: t('home.features.title') }), _jsx("p", { className: "text-muted-foreground", children: t('home.features.subtitle') })] }), _jsx(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-100px" }, className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto", children: [
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
                            ].map((feature, index) => (_jsx(motion.div, { variants: itemVariants, children: _jsxs(Card, { className: "glass-card h-full hover:border-primary/50 transition-all duration-300", children: [_jsxs(CardHeader, { children: [_jsx(feature.icon, { className: "h-10 w-10 text-primary mb-2" }), _jsx(CardTitle, { children: feature.title })] }), _jsx(CardContent, { children: _jsx("p", { className: "text-sm text-muted-foreground", children: feature.description }) })] }) }, index))) })] }) }), _jsx("section", { className: "py-16 lg:py-24", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "grid gap-8 md:grid-cols-2 max-w-4xl mx-auto", children: [_jsx(motion.div, { initial: { opacity: 0, x: -30 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, children: _jsxs(Card, { className: "glass-card h-full", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: t('home.cta.check.title') }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsx("p", { className: "text-sm text-muted-foreground", children: t('home.cta.check.description') }), _jsx(Button, { asChild: true, className: "w-full", children: _jsxs(Link, { to: "/check", children: [t('home.cta.check.button'), _jsx(ArrowRight, { className: "ml-2 h-4 w-4" })] }) })] })] }) }), _jsx(motion.div, { initial: { opacity: 0, x: 30 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, children: _jsx(AdvertiseCTA, {}) })] }) }) })] }));
}
