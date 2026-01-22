export const mockPools = [
    {
        id: 'pool1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',
        ticker: 'DEAD1',
        name: 'Retired Pool Alpha',
        description: 'This pool retired in epoch 450 without notice to delegators',
        isRetired: true,
        retiredEpoch: 450,
        affectedWallets: 5420,
        lockedAda: 12500000,
        lastActiveEpoch: 450,
        website: 'https://example.com',
    },
    {
        id: 'pool1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        ticker: 'DEAD2',
        name: 'Ghost Pool Beta',
        description: 'Operator disappeared, pool no longer maintained',
        isRetired: true,
        retiredEpoch: 438,
        affectedWallets: 3890,
        lockedAda: 8900000,
        lastActiveEpoch: 438,
    },
    {
        id: 'pool1yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy',
        ticker: 'GONE3',
        name: 'Vanished Pool Gamma',
        description: 'Pool retired suddenly after successful operation',
        isRetired: true,
        retiredEpoch: 445,
        affectedWallets: 8920,
        lockedAda: 18700000,
        lastActiveEpoch: 445,
    },
];
export const getPoolById = (id) => {
    return mockPools.find((pool) => pool.id === id);
};
export const getRetiredPools = () => {
    return mockPools.filter((pool) => pool.isRetired);
};
export const getTotalLockedAda = () => {
    return mockPools.reduce((sum, pool) => sum + pool.lockedAda, 0);
};
export const getTotalAffectedWallets = () => {
    return mockPools.reduce((sum, pool) => sum + pool.affectedWallets, 0);
};
