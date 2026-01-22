export function calculateMissedRewards(stakeAmount, epochsMissed, averageROS = 0.045) {
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
export function estimateAnnualRewards(stakeAmount, ros = 0.045) {
    return stakeAmount * ros;
}
export function calculateROI(stakeAmount, rewardsEarned, periodInDays) {
    const annualizedReturn = (rewardsEarned / stakeAmount) * (365 / periodInDays);
    return annualizedReturn * 100;
}
export function getHealthStatus(epochsSinceLastReward) {
    if (epochsSinceLastReward === 0)
        return 'healthy';
    if (epochsSinceLastReward < 5)
        return 'warning';
    return 'critical';
}
