import { Languages } from 'lucide-react';
import { Button } from './ui/button';
import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';

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

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Languages className="h-5 w-5" />
          <span className="sr-only">Select language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 bg-card border border-border rounded-md shadow-lg p-1 mt-2">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`flex items-center gap-2 px-3 py-2 text-sm cursor-pointer rounded-sm transition-colors ${
              currentLanguage.code === lang.code
                ? 'bg-primary text-primary-foreground'
                : 'hover:bg-accent'
            }`}
          >
            <span className="text-lg">{lang.flag}</span>
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}