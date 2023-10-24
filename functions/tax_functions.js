function getSocSecTax(preTaxAmount) {
  let socSecTaxAmnt = (6.2 / 100) * preTaxAmount;
  return socSecTaxAmnt;
}

function getMedicareTax(preTaxAmount) {
  let medTaxAmnt = (1.45 / 100) * preTaxAmount;
  return medTaxAmnt;
}

function getFederalTax(preTaxAmount, withHoldCode) {
  let fedTaxAmnt = 0;
  if (withHoldCode === 0) {
    fedTaxAmnt = (23 / 100) * preTaxAmount;
  } else if (withHoldCode === 1) {
    fedTaxAmnt = (21 / 100) * preTaxAmount;
  } else if (withHoldCode === 2) {
    fedTaxAmnt = (19.5 / 100) * preTaxAmount;
  } else if (withHoldCode === 3) {
    fedTaxAmnt = (18.5 / 100) * preTaxAmount;
  } else if (withHoldCode === 4) {
    fedTaxAmnt = (18 / 100) * preTaxAmount;
  } else if (withHoldCode === 5) {
    fedTaxAmnt = (18 / 100 - 1 * 0.005) * preTaxAmount;
  } else if (withHoldCode === 6) {
    fedTaxAmnt = (18 / 100 - 2 * 0.005) * preTaxAmount;
  } else if (withHoldCode === 7) {
    fedTaxAmnt = (18 / 100 - 3 * 0.005) * preTaxAmount;
  }

  return fedTaxAmnt;
}

let totalDeductions =
  getFederalTax(750, 2) + getSocSecTax(750) + getMedicareTax(750);

let leftoverAmount = 750 - totalDeductions;

console.log(
  "Total deductions are: " +
    String(totalDeductions) +
    ", and your leftover amount is: " +
    String(leftoverAmount)
);
