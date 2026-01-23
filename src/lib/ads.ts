export interface Advertisement {
  id: string;
  poolTicker: string;
  poolName: string;
  tagline: string;
  features: string[];
  websiteUrl?: string;
  status: 'active' | 'pending' | 'expired';
  startDate: Date;
  endDate: Date;
  duration: 2 | 7 | 30;
  amountPaid: number;
  txHash?: string;
  paymentAddress: string;
  createdAt: Date;
  isPermanent?: boolean;
}

export interface AdPurchaseRequest {
  poolTicker: string;
  poolName: string;
  tagline: string;
  features: string[];
  websiteUrl?: string;
  duration: 2 | 7 | 30;
  paymentAddress: string;
}

export const AD_PRICING = {
  2: 100,
  7: 300,
  30: 1000,
} as const;

export const PAYMENT_ADDRESS = 'addr1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wbi0uzwygk896r5w9s7mxvw0jc9kqz2p3c3j5d7v2qnrm8zdj83p3q8qsrfqgv';

const DEMO_ADS: Advertisement[] = [
  {
    id: 'dutchpool-permanent',
    poolTicker: 'NLD',
    poolName: 'Dutchpool',
    tagline: 'Professional Cardano Stake Pool - 0% Margin',
    features: ['0% margin', 'High uptime', 'Professional support', 'Community driven'],
    websiteUrl: 'https://dutchpool.io',
    status: 'active',
    startDate: new Date('2024-01-01'),
    endDate: new Date('2099-12-31'),
    duration: 30,
    amountPaid: 0,
    paymentAddress: PAYMENT_ADDRESS,
    createdAt: new Date('2024-01-01'),
    isPermanent: true,
  },
];

export async function getActiveAds(): Promise<Advertisement[]> {
  await new Promise(resolve => setTimeout(resolve, 300));
  const now = new Date();
  return DEMO_ADS.filter(ad => 
    ad.status === 'active' && 
    ad.startDate <= now && 
    ad.endDate >= now
  );
}

export async function createAdPurchase(request: AdPurchaseRequest): Promise<{
  success: boolean;
  adId?: string;
  paymentAddress?: string;
  amountDue?: number;
  error?: string;
}> {
  try {
    const amountDue = AD_PRICING[request.duration];
    const response = await fetch('/api/ads/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...request, amountDue }),
    });
    if (!response.ok) throw new Error('Failed to create ad');
    return await response.json();
  } catch (error) {
    console.error('Error creating ad:', error);
    return { success: false, error: 'Failed to create advertisement request' };
  }
}

export async function verifyPayment(adId: string, txHash: string): Promise<{
  success: boolean;
  verified?: boolean;
  error?: string;
}> {
  try {
    const response = await fetch('/api/ads/verify-payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ adId, txHash }),
    });
    if (!response.ok) throw new Error('Failed to verify payment');
    return await response.json();
  } catch (error) {
    console.error('Error verifying payment:', error);
    return { success: false, error: 'Failed to verify payment' };
  }
}