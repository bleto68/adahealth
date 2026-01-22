import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsx("div", { className: "container mx-auto px-4 py-12", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "max-w-4xl mx-auto", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h1", { className: "text-4xl font-bold mb-4 gradient-text", children: t('about.title') }), _jsx("p", { className: "text-lg text-muted-foreground", children: t('about.subtitle') })] }), _jsxs(Card, { className: "glass-card mb-12", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: t('about.mission.title') }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsx("p", { className: "text-muted-foreground leading-relaxed", children: t('about.mission.paragraph1') }), _jsx("p", { className: "text-muted-foreground leading-relaxed", children: t('about.mission.paragraph2') }), _jsx("p", { className: "text-muted-foreground leading-relaxed", children: t('about.mission.paragraph3') })] })] }), _jsxs("div", { className: "mb-12", children: [_jsx("h2", { className: "text-3xl font-bold mb-6 text-center", children: t('about.values.title') }), _jsx(motion.div, { variants: containerVariants, initial: "hidden", whileInView: "visible", viewport: { once: true }, className: "grid gap-6 md:grid-cols-2", children: values.map((value, index) => (_jsx(motion.div, { variants: itemVariants, children: _jsxs(Card, { className: "glass-card h-full", children: [_jsxs(CardHeader, { children: [_jsx(value.icon, { className: "h-10 w-10 text-primary mb-2" }), _jsx(CardTitle, { children: value.title })] }), _jsx(CardContent, { children: _jsx("p", { className: "text-sm text-muted-foreground", children: value.description }) })] }) }, index))) })] }), _jsxs(Card, { className: "glass-card", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: t('about.team.title') }) }), _jsxs(CardContent, { children: [_jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: t('about.team.description') }), _jsx("p", { className: "text-sm text-muted-foreground", children: t('about.team.contact') })] })] })] }) }));
}
