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

console.log(getFederalTax(750, 0).toFixed(2));
console.log(getFederalTax(1550, 2).toFixed(2));
console.log(getFederalTax(1100, 6).toFixed(2));
