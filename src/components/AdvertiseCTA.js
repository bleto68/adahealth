import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { Megaphone } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { useTranslation } from 'react-i18next';
export default function AdvertiseCTA() {
    const { t } = useTranslation();
    return (_jsxs(Card, { className: "glass-card border-primary/20", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Megaphone, { className: "h-5 w-5 text-primary" }), t('advertise.title')] }), _jsx(CardDescription, { children: t('advertise.description') })] }), _jsx(CardContent, { children: _jsxs("div", { className: "space-y-4", children: [_jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [_jsxs("li", { className: "flex items-center gap-2", children: [_jsx("div", { className: "h-1.5 w-1.5 rounded-full bg-primary" }), t('advertise.benefit1')] }), _jsxs("li", { className: "flex items-center gap-2", children: [_jsx("div", { className: "h-1.5 w-1.5 rounded-full bg-secondary" }), t('advertise.benefit2')] }), _jsxs("li", { className: "flex items-center gap-2", children: [_jsx("div", { className: "h-1.5 w-1.5 rounded-full bg-accent" }), t('advertise.benefit3')] })] }), _jsx(Button, { asChild: true, className: "w-full", children: _jsxs(Link, { to: "/advertise", children: [_jsx(Megaphone, { className: "mr-2 h-4 w-4" }), t('advertise.cta')] }) })] }) })] }));
}
