/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const baseCost = days * 40;
  const discountFor3To6Days = 20;
  const additionalDiscountFor7OrMoreDays = 50;
  const totalCostFor3To6Days = baseCost - discountFor3To6Days;
  const totalCostFor7OrMoreDays = baseCost - additionalDiscountFor7OrMoreDays;
  const totalCostForLessThan3Days = baseCost;
  const totalCostFor3Days = totalCostFor3To6Days;

  if (days >= 3 && days <= 6) {
    return totalCostFor3To6Days;
  } else if (days >= 7) {
    return totalCostFor7OrMoreDays;
  } else if (days < 3) {
    return totalCostForLessThan3Days;
  } else {
    return totalCostFor3Days;
  }
}
module.exports = calculateRentalCost;
