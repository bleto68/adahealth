import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Search, Loader2, AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
export default function Check() {
    const { t } = useTranslation();
    const [address, setAddress] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const checkStake = async () => {
        if (!address.trim()) {
            setError(t('check.errors.empty'));
            return;
        }
        setLoading(true);
        setError(null);
        setResult(null);
        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1500));
            // Mock result
            setResult({
                address: address,
                poolId: 'pool1abc...xyz',
                poolName: 'Demo Pool',
                isRetired: Math.random() > 0.5,
                stake: Math.floor(Math.random() * 100000),
                lastReward: new Date().toISOString().split('T')[0],
            });
        }
        catch (err) {
            setError(t('check.errors.failed'));
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsx("div", { className: "container mx-auto px-4 py-12", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "max-w-3xl mx-auto", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx("h1", { className: "text-4xl font-bold mb-4 gradient-text", children: t('check.title') }), _jsx("p", { className: "text-lg text-muted-foreground", children: t('check.subtitle') })] }), _jsxs(Card, { className: "glass-card mb-8", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: t('check.form.title') }), _jsx(CardDescription, { children: t('check.form.description') })] }), _jsxs(CardContent, { children: [_jsxs("div", { className: "flex gap-2", children: [_jsx(Input, { placeholder: t('check.form.placeholder'), value: address, onChange: (e) => setAddress(e.target.value), onKeyDown: (e) => e.key === 'Enter' && checkStake(), className: "flex-1" }), _jsx(Button, { onClick: checkStake, disabled: loading, children: loading ? (_jsx(Loader2, { className: "h-4 w-4 animate-spin" })) : (_jsx(Search, { className: "h-4 w-4" })) })] }), error && (_jsxs(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, className: "mt-4 flex items-center gap-2 text-sm text-red-500", children: [_jsx(AlertCircle, { className: "h-4 w-4" }), error] }))] })] }), result && (_jsx(motion.div, { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.3 }, children: _jsxs(Card, { className: `glass-card ${result.isRetired ? 'border-red-500/50' : 'border-green-500/50'}`, children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: "flex items-center gap-2", children: result.isRetired ? (_jsxs(_Fragment, { children: [_jsx(XCircle, { className: "h-5 w-5 text-red-500" }), t('check.result.retired.title')] })) : (_jsxs(_Fragment, { children: [_jsx(CheckCircle, { className: "h-5 w-5 text-green-500" }), t('check.result.active.title')] })) }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm text-muted-foreground", children: t('check.result.pool') }), _jsx("p", { className: "font-mono text-sm", children: result.poolName }), _jsx("p", { className: "font-mono text-xs text-muted-foreground", children: result.poolId })] }), _jsxs("div", { children: [_jsx("p", { className: "text-sm text-muted-foreground", children: t('check.result.stake') }), _jsxs("p", { className: "text-2xl font-bold", children: ["\u00E2\u201A\u00B3", result.stake.toLocaleString()] })] }), _jsxs("div", { children: [_jsx("p", { className: "text-sm text-muted-foreground", children: t('check.result.lastReward') }), _jsx("p", { className: "text-sm", children: result.lastReward })] }), result.isRetired && (_jsx("div", { className: "p-4 bg-red-500/10 border border-red-500/20 rounded-md", children: _jsx("p", { className: "text-sm text-red-500 font-medium", children: t('check.result.retired.warning') }) }))] })] }) }))] }) }));
}
