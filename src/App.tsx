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
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/check" element={<Check />} />
        <Route path="/check/:stakeAddress" element={<Check />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/pool/:poolId" element={<PoolDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/wallet-demo" element={<WalletDemo />} />
        <Route path="/advertise" element={<AdPurchase />} />
        <Route path="/admin/ads" element={<AdAdmin />} />
      </Routes>
    </Layout>
  );
}

export default App;