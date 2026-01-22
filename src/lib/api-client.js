const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';
export class ApiError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
        this.name = 'ApiError';
    }
}
async function fetchWithError(url, options) {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new ApiError(response.status, `API error: ${response.statusText}`);
    }
    return response.json();
}
export async function getStakeInfo(address) {
    return fetchWithError(`${API_BASE_URL}/stake/${address}`);
}
export async function getPoolInfo(poolId) {
    return fetchWithError(`${API_BASE_URL}/pools/${poolId}`);
}
export async function getRetiredPools() {
    return fetchWithError(`${API_BASE_URL}/pools/retired`);
}
export async function getPoolHistory(poolId, epochs = 10) {
    return fetchWithError(`${API_BASE_URL}/pools/${poolId}/history?epochs=${epochs}`);
}
export async function searchAddress(query) {
    return fetchWithError(`${API_BASE_URL}/search?q=${encodeURIComponent(query)}`);
}
