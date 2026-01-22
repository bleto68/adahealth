const mockAds = [
    {
        id: 'ad-1',
        title: 'Boost Your Cardano Staking with XYZ Pool',
        description: 'Join 10,000+ delegators earning consistent rewards',
        url: 'https://example-pool.com',
        image_url: 'https://placehold.co/100x100/667eea/ffffff?text=XYZ',
        start_date: '2024-01-01',
        end_date: '2024-12-31',
        budget: 1000,
        impressions: 50000,
        clicks: 1250,
        status: 'active',
    },
];
export async function getActiveAds() {
    await new Promise((resolve) => setTimeout(resolve, 100));
    const now = new Date();
    return mockAds.filter((ad) => {
        if (ad.status !== 'active')
            return false;
        const endDate = new Date(ad.end_date);
        return endDate > now;
    });
}
export async function getAdById(id) {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return mockAds.find((ad) => ad.id === id) || null;
}
export async function trackImpression(adId) {
    await new Promise((resolve) => setTimeout(resolve, 50));
    console.log(`Tracked impression for ad: ${adId}`);
}
export async function trackClick(adId) {
    await new Promise((resolve) => setTimeout(resolve, 50));
    console.log(`Tracked click for ad: ${adId}`);
}
export async function createAd(ad) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const newAd = {
        ...ad,
        id: `ad-${Date.now()}`,
        impressions: 0,
        clicks: 0,
    };
    mockAds.push(newAd);
    return newAd;
}
