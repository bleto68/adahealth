import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/button';
import { getActiveAds } from '@/lib/ads';
export default function AdBanner() {
    const [ad, setAd] = useState(null);
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        loadAd();
    }, []);
    const loadAd = async () => {
        const ads = await getActiveAds();
        if (ads.length > 0) {
            // Rotate through ads or pick random
            const randomAd = ads[Math.floor(Math.random() * ads.length)];
            setAd(randomAd);
        }
    };
    if (!ad || !isVisible)
        return null;
    return (_jsx("div", { className: "bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-b border-border/40", children: _jsx("div", { className: "container mx-auto px-4 py-3", children: _jsxs("div", { className: "flex items-center justify-between gap-4", children: [_jsxs("a", { href: ad.url, target: "_blank", rel: "noopener noreferrer sponsored", className: "flex items-center gap-4 flex-1 hover:opacity-80 transition-opacity", children: [ad.image_url && (_jsx("img", { src: ad.image_url, alt: ad.title, className: "h-12 w-12 rounded object-cover" })), _jsxs("div", { className: "flex-1", children: [_jsx("p", { className: "text-sm font-semibold", children: ad.title }), _jsx("p", { className: "text-xs text-muted-foreground", children: ad.description })] }), _jsx("span", { className: "text-xs text-muted-foreground px-2 py-1 bg-muted rounded", children: "Ad" })] }), _jsx(Button, { variant: "ghost", size: "icon", className: "h-8 w-8 shrink-0", onClick: () => setIsVisible(false), children: _jsx(X, { className: "h-4 w-4" }) })] }) }) }));
}
