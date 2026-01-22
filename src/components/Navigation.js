import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Activity } from 'lucide-react';
import { Button } from './ui/button';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';
export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const { t } = useTranslation();
    const navItems = [
        { path: '/', label: t('nav.home') },
        { path: '/check', label: t('nav.checkStake') },
        { path: '/leaderboard', label: t('nav.leaderboard') },
        { path: '/about', label: t('nav.about') },
        { path: '/wallet-demo', label: t('nav.walletDemo') },
    ];
    const isActive = (path) => location.pathname === path;
    return (_jsx("nav", { className: "sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "flex h-16 items-center justify-between", children: [_jsxs(Link, { to: "/", className: "flex items-center space-x-2 group", children: [_jsxs("div", { className: "relative", children: [_jsx(Activity, { className: "h-8 w-8 text-primary transition-transform group-hover:scale-110" }), _jsx("div", { className: "absolute inset-0 blur-xl bg-primary/20 group-hover:bg-primary/30 transition-all" })] }), _jsx("span", { className: "text-xl font-bold gradient-text", children: "ADAHealth" })] }), _jsx("div", { className: "hidden md:flex md:items-center md:space-x-1", children: navItems.map((item) => (_jsx(Link, { to: item.path, className: `nav-link ${isActive(item.path) ? 'active text-foreground' : ''}`, children: item.label }, item.path))) }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(LanguageSelector, {}), _jsx(Button, { variant: "ghost", size: "icon", className: "md:hidden", onClick: () => setIsOpen(!isOpen), children: isOpen ? _jsx(X, { className: "h-5 w-5" }) : _jsx(Menu, { className: "h-5 w-5" }) })] })] }), isOpen && (_jsx("div", { className: "md:hidden py-4 space-y-2 animate-slide-in", children: navItems.map((item) => (_jsx(Link, { to: item.path, className: `block px-4 py-2 rounded-md transition-colors ${isActive(item.path)
                            ? 'bg-primary text-primary-foreground'
                            : 'hover:bg-accent'}`, onClick: () => setIsOpen(false), children: item.label }, item.path))) }))] }) }));
}
