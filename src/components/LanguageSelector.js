import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Languages } from 'lucide-react';
import { Button } from './ui/button';
import { useTranslation } from 'react-i18next';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from '@radix-ui/react-dropdown-menu';
const languages = [
    { code: 'en', name: 'English', flag: 'ðŸ‡¬ðŸ‡§' },
    { code: 'nl', name: 'Nederlands', flag: 'ðŸ‡³ðŸ‡±' },
    { code: 'fr', name: 'FranÃ§ais', flag: 'ðŸ‡«ðŸ‡·' },
    { code: 'es', name: 'EspaÃ±ol', flag: 'ðŸ‡ªðŸ‡¸' },
    { code: 'de', name: 'Deutsch', flag: 'ðŸ‡©ðŸ‡ª' },
    { code: 'it', name: 'Italiano', flag: 'ðŸ‡®ðŸ‡¹' },
    { code: 'pt', name: 'PortuguÃªs', flag: 'ðŸ‡µðŸ‡¹' },
];
export default function LanguageSelector() {
    const { i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];
    return (_jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsxs(Button, { variant: "ghost", size: "icon", className: "relative", children: [_jsx(Languages, { className: "h-5 w-5" }), _jsx("span", { className: "sr-only", children: "Select language" })] }) }), _jsx(DropdownMenuContent, { align: "end", className: "w-48 bg-card border border-border rounded-md shadow-lg p-1 mt-2", children: languages.map((lang) => (_jsxs(DropdownMenuItem, { onClick: () => changeLanguage(lang.code), className: `flex items-center gap-2 px-3 py-2 text-sm cursor-pointer rounded-sm transition-colors ${currentLanguage.code === lang.code
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-accent'}`, children: [_jsx("span", { className: "text-lg", children: lang.flag }), _jsx("span", { children: lang.name })] }, lang.code))) })] }));
}
