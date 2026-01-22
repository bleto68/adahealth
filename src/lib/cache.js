class SimpleCache {
    constructor() {
        this.cache = new Map();
    }
    set(key, data, ttl = 3600000) {
        this.cache.set(key, {
            data,
            timestamp: Date.now(),
            ttl,
        });
    }
    get(key) {
        const entry = this.cache.get(key);
        if (!entry) {
            return null;
        }
        const now = Date.now();
        if (now - entry.timestamp > entry.ttl) {
            this.cache.delete(key);
            return null;
        }
        return entry.data;
    }
    has(key) {
        return this.get(key) !== null;
    }
    delete(key) {
        this.cache.delete(key);
    }
    clear() {
        this.cache.clear();
    }
    size() {
        return this.cache.size;
    }
}
export const cache = new SimpleCache();
export async function getCachedOrFetch(key, fetchFn, ttl) {
    const cached = cache.get(key);
    if (cached !== null) {
        return cached;
    }
    const data = await fetchFn();
    cache.set(key, data, ttl);
    return data;
}
