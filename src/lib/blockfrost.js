const BLOCKFROST_API_KEY = import.meta.env.VITE_BLOCKFROST_PROJECT_ID || '';
const BLOCKFROST_BASE_URL = 'https://cardano-mainnet.blockfrost.io/api/v0';
export async function getStakeAddressInfo(stakeAddress) {
    const response = await fetch(`${BLOCKFROST_BASE_URL}/accounts/${stakeAddress}`, {
        headers: {
            project_id: BLOCKFROST_API_KEY,
        },
    });
    if (!response.ok) {
        throw new Error(`Blockfrost API error: ${response.statusText}`);
    }
    return response.json();
}
export async function getPoolMetadata(poolId) {
    const response = await fetch(`${BLOCKFROST_BASE_URL}/pools/${poolId}/metadata`, {
        headers: {
            project_id: BLOCKFROST_API_KEY,
        },
    });
    if (!response.ok) {
        throw new Error(`Blockfrost API error: ${response.statusText}`);
    }
    return response.json();
}
export async function getPoolInfo(poolId) {
    const response = await fetch(`${BLOCKFROST_BASE_URL}/pools/${poolId}`, {
        headers: {
            project_id: BLOCKFROST_API_KEY,
        },
    });
    if (!response.ok) {
        throw new Error(`Blockfrost API error: ${response.statusText}`);
    }
    return response.json();
}
export async function getCurrentEpoch() {
    const response = await fetch(`${BLOCKFROST_BASE_URL}/epochs/latest`, {
        headers: {
            project_id: BLOCKFROST_API_KEY,
        },
    });
    if (!response.ok) {
        throw new Error(`Blockfrost API error: ${response.statusText}`);
    }
    const data = await response.json();
    return data.epoch;
}
