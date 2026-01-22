import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Check from './pages/Check';
import Leaderboard from './pages/Leaderboard';
import PoolDetail from './pages/PoolDetail';
import About from './pages/About';
import WalletDemo from './pages/WalletDemo';
import AdPurchase from './pages/AdPurchase';
import AdAdmin from './pages/AdAdmin';
function App() {
    return (_jsx(Layout, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/check", element: _jsx(Check, {}) }), _jsx(Route, { path: "/check/:stakeAddress", element: _jsx(Check, {}) }), _jsx(Route, { path: "/leaderboard", element: _jsx(Leaderboard, {}) }), _jsx(Route, { path: "/pool/:poolId", element: _jsx(PoolDetail, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "/wallet-demo", element: _jsx(WalletDemo, {}) }), _jsx(Route, { path: "/advertise", element: _jsx(AdPurchase, {}) }), _jsx(Route, { path: "/admin/ads", element: _jsx(AdAdmin, {}) })] }) }));
}
export default App;
