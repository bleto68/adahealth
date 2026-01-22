import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Megaphone, DollarSign, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
export default function AdPurchase() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        url: '',
        imageUrl: '',
        budget: '',
        duration: '7',
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Ad purchase:', formData);
    };
    const benefits = [
        {
            icon: Target,
            title: t('advertise.benefits.targeted.title'),
            description: t('advertise.benefits.targeted.description'),
        },
        {
            icon: TrendingUp,
            title: t('advertise.benefits.visibility.title'),
            description: t('advertise.benefits.visibility.description'),
        },
        {
            icon: DollarSign,
            title: t('advertise.benefits.affordable.title'),
            description: t('advertise.benefits.affordable.description'),
        },
    ];
    return (_jsx("div", { className: "container mx-auto px-4 py-12", children: _jsxs("div", { className: "max-w-4xl mx-auto", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h1", { className: "text-4xl font-bold mb-4 gradient-text", children: t('advertise.title') }), _jsx("p", { className: "text-lg text-muted-foreground", children: t('advertise.subtitle') })] }), _jsx("div", { className: "grid gap-6 md:grid-cols-3 mb-12", children: benefits.map((benefit, index) => (_jsxs(Card, { className: "glass-card", children: [_jsxs(CardHeader, { children: [_jsx(benefit.icon, { className: "h-10 w-10 text-primary mb-2" }), _jsx(CardTitle, { className: "text-lg", children: benefit.title })] }), _jsx(CardContent, { children: _jsx("p", { className: "text-sm text-muted-foreground", children: benefit.description }) })] }, index))) }), _jsxs(Card, { className: "glass-card", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Megaphone, { className: "h-5 w-5 text-primary" }), t('advertise.form.title')] }), _jsx(CardDescription, { children: t('advertise.form.description') })] }), _jsx(CardContent, { children: _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("label", { className: "text-sm font-medium", children: t('advertise.form.adTitle') }), _jsx(Input, { placeholder: t('advertise.form.adTitlePlaceholder'), value: formData.title, onChange: (e) => setFormData({ ...formData, title: e.target.value }), required: true })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("label", { className: "text-sm font-medium", children: t('advertise.form.description') }), _jsx(Input, { placeholder: t('advertise.form.descriptionPlaceholder'), value: formData.description, onChange: (e) => setFormData({ ...formData, description: e.target.value }), required: true })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("label", { className: "text-sm font-medium", children: t('advertise.form.url') }), _jsx(Input, { type: "url", placeholder: "https://your-website.com", value: formData.url, onChange: (e) => setFormData({ ...formData, url: e.target.value }), required: true })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("label", { className: "text-sm font-medium", children: t('advertise.form.image') }), _jsx(Input, { type: "url", placeholder: "https://your-image-url.com/image.png", value: formData.imageUrl, onChange: (e) => setFormData({ ...formData, imageUrl: e.target.value }) }), _jsx("p", { className: "text-xs text-muted-foreground", children: t('advertise.form.imageHint') })] }), _jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("label", { className: "text-sm font-medium", children: t('advertise.form.budget') }), _jsx(Input, { type: "number", placeholder: "100", value: formData.budget, onChange: (e) => setFormData({ ...formData, budget: e.target.value }), required: true }), _jsx("p", { className: "text-xs text-muted-foreground", children: t('advertise.form.budgetHint') })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("label", { className: "text-sm font-medium", children: t('advertise.form.duration') }), _jsxs("select", { className: "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", value: formData.duration, onChange: (e) => setFormData({ ...formData, duration: e.target.value }), children: [_jsxs("option", { value: "7", children: ["7 ", t('advertise.form.days')] }), _jsxs("option", { value: "14", children: ["14 ", t('advertise.form.days')] }), _jsxs("option", { value: "30", children: ["30 ", t('advertise.form.days')] }), _jsxs("option", { value: "90", children: ["90 ", t('advertise.form.days')] })] })] })] }), _jsx("div", { className: "p-4 bg-primary/10 border border-primary/20 rounded-md", children: _jsxs("p", { className: "text-sm", children: [_jsx("strong", { className: "text-foreground", children: t('advertise.form.estimate') }), _jsx("br", {}), _jsx("span", { className: "text-muted-foreground", children: t('advertise.form.estimateDescription') })] }) }), _jsxs(Button, { type: "submit", className: "w-full", size: "lg", children: [_jsx(Megaphone, { className: "mr-2 h-4 w-4" }), t('advertise.form.submit')] })] }) })] })] }) }));
}
