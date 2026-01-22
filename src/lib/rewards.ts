export interface RewardCalculation {
  expectedRewards: number;
  actualRewards: number;
  missedRewards: number;
  lostPercentage: number;
}

export function calculateMissedRewards(
  stakeAmount: number,
  epochsMissed: number,
  averageROS = 0.045
): RewardCalculation {
  const epochsPerYear = 73;
  const expectedAnnualRewards = stakeAmount * averageROS;
  const expectedPerEpoch = expectedAnnualRewards / epochsPerYear;
  const missedRewards = expectedPerEpoch * epochsMissed;
  
  return {
    expectedRewards: expectedPerEpoch * epochsMissed,
    actualRewards: 0,
    missedRewards,
    lostPercentage: 100,
  };
}

export function estimateAnnualRewards(stakeAmount: number, ros = 0.045): number {
  return stakeAmount * ros;
}

export function calculateROI(
  stakeAmount: number,
  rewardsEarned: number,
  periodInDays: number
): number {
  const annualizedReturn = (rewardsEarned / stakeAmount) * (365 / periodInDays);
  return annualizedReturn * 100;
}

export function getHealthStatus(
  epochsSinceLastReward: number
): 'healthy' | 'warning' | 'critical' {
  if (epochsSinceLastReward === 0) return 'healthy';
  if (epochsSinceLastReward < 5) return 'warning';
  return 'critical';
}