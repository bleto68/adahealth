export interface PoolData {
  poolId: string;
  ticker: string;
  name: string;
  status: 'active' | 'retired' | 'inactive';
  retiredEpoch?: number;
  stake: number;
  delegators: number;
  blocksLifetime: number;
  roa: number;
  saturation: number;
  lostRewards: number;
  margin: number;
  fixedCost: number;
}

export interface GlobalStats {
  totalStakeLost: number;
  affectedWallets: number;
  retiredPools: number;
  lastUpdated: Date;
}

export const DEMO_GLOBAL_STATS: GlobalStats = {
  totalStakeLost: 86_234_567,
  affectedWallets: 47_283,
  retiredPools: 187,
  lastUpdated: new Date(),
};

export const DEMO_POOLS: PoolData[] = [
  {
    poolId: 'pool1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq1',
    ticker: 'XPOOL',
    name: 'Example Pool 1',
    status: 'retired',
    retiredEpoch: 450,
    stake: 15_234_567,
    delegators: 8_432,
    blocksLifetime: 1_234,
    roa: 0,
    saturation: 24,
    lostRewards: 12_500_000,
    margin: 2,
    fixedCost: 340,
  },
  {
    poolId: 'pool1wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww2',
    ticker: 'YPOOL',
    name: 'Example Pool 2',
    status: 'retired',
    retiredEpoch: 448,
    stake: 12_456_789,
    delegators: 6_234,
    blocksLifetime: 987,
    roa: 0,
    saturation: 19,
    lostRewards: 9_800_000,
    margin: 3,
    fixedCost: 340,
  },
  {
    poolId: 'pool1zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz3',
    ticker: 'ZPOOL',
    name: 'Example Pool 3',
    status: 'retired',
    retiredEpoch: 452,
    stake: 8_765_432,
    delegators: 4_123,
    blocksLifetime: 756,
    roa: 0,
    saturation: 14,
    lostRewards: 7_200_000,
    margin: 1,
    fixedCost: 340,
  },
  {
    poolId: 'pool1nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn4',
    ticker: 'NLD',
    name: 'Dutchpool NLD',
    status: 'active',
    stake: 3_456_789,
    delegators: 234,
    blocksLifetime: 456,
    roa: 4.2,
    saturation: 5,
    lostRewards: 0,
    margin: 0,
    fixedCost: 340,
  },
];

export const DEMO_LEADERBOARD: PoolData[] = [
  ...DEMO_POOLS.filter(p => p.status === 'retired'),
  ...Array.from({ length: 17 }, (_, i) => ({
    poolId: `pool1demo${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}`,
    ticker: `DEMO${i + 4}`,
    name: `Demo Retired Pool ${i + 4}`,
    status: 'retired' as const,
    retiredEpoch: 445 + i,
    stake: 10_000_000 - (i * 500_000),
    delegators: 5000 - (i * 200),
    blocksLifetime: 800 - (i * 30),
    roa: 0,
    saturation: 20 - i,
    lostRewards: 8_000_000 - (i * 400_000),
    margin: 2 + (i % 3),
    fixedCost: 340,
  })),
].sort((a, b) => b.lostRewards - a.lostRewards);

export const DEMO_CHART_DATA = Array.from({ length: 12 }, (_, i) => ({
  month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i],
  retiredPools: Math.floor(Math.random() * 30) + 10,
}));

export function checkStakeAddress(stakeAddress: string): {
  pool: PoolData | null;
  error?: string;
} {
  if (!stakeAddress.startsWith('stake1')) {
    return { pool: null, error: 'Invalid stake address format' };
  }
  const randomPool = DEMO_POOLS[Math.floor(Math.random() * DEMO_POOLS.length)];
  return { pool: randomPool };
}