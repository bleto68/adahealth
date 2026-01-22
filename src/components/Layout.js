import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navigation from './Navigation';
import Footer from './Footer';
import AdBanner from './AdBanner';
export default function Layout({ children }) {
    return (_jsxs("div", { className: "min-h-screen flex flex-col bg-background", children: [_jsx(Navigation, {}), _jsx(AdBanner, {}), _jsx("main", { className: "flex-1", children: children }), _jsx(Footer, {})] }));
}
