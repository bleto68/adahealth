import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Wallet, Check, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { useTranslation } from 'react-i18next';
export default function WalletConnectDemo() {
    const { t } = useTranslation();
    const [isConnecting, setIsConnecting] = useState(false);
    const [isConnected, setIsConnected] = useState(false);
    const [error, setError] = useState(null);
    const connectWallet = async () => {
        setIsConnecting(true);
        setError(null);
        try {
            // Simulate wallet connection
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setIsConnected(true);
        }
        catch (err) {
            setError(t('wallet.error'));
        }
        finally {
            setIsConnecting(false);
        }
    };
    const disconnectWallet = () => {
        setIsConnected(false);
    };
    return (_jsxs(Card, { className: "glass-card", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Wallet, { className: "h-5 w-5 text-primary" }), t('wallet.title')] }), _jsx(CardDescription, { children: t('wallet.description') })] }), _jsx(CardContent, { children: !isConnected ? (_jsxs("div", { className: "space-y-4", children: [_jsx(Button, { onClick: connectWallet, disabled: isConnecting, className: "w-full", children: isConnecting ? (_jsxs(_Fragment, { children: [_jsx("div", { className: "animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent mr-2" }), t('wallet.connecting')] })) : (_jsxs(_Fragment, { children: [_jsx(Wallet, { className: "mr-2 h-4 w-4" }), t('wallet.connect')] })) }), error && (_jsxs("div", { className: "flex items-center gap-2 text-sm text-red-500", children: [_jsx(AlertCircle, { className: "h-4 w-4" }), error] })), _jsx("p", { className: "text-xs text-muted-foreground", children: t('wallet.supported') })] })) : (_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center gap-2 text-sm text-green-500", children: [_jsx(Check, { className: "h-4 w-4" }), t('wallet.connected')] }), _jsxs("div", { className: "p-3 bg-muted rounded-md", children: [_jsx("p", { className: "text-xs text-muted-foreground mb-1", children: t('wallet.address') }), _jsx("p", { className: "text-sm font-mono break-all", children: "addr1qxy...demo...xyz" })] }), _jsx(Button, { onClick: disconnectWallet, variant: "outline", className: "w-full", children: t('wallet.disconnect') })] })) })] }));
}
