function calculateOptionTotal(rentalDays) {
  let optionTotal = 0;

  let optionOne = document.getElementById("optionOne");
  let optionTwo = document.getElementById("optionTwo");
  let optionThree = document.getElementById("optionThree");

  let tollTagPrice = 3.95 * rentalDays;
  let gpsPrice = 2.95 * rentalDays;
  let rsaPrice = 2.95 * rentalDays;

  if (optionOne.checked) {
    optionTotal += tollTagPrice;
  }
  if (optionTwo.checked) {
    optionTotal += gpsPrice;
  }
  if (optionThree.checked) {
    optionTotal += rsaPrice;
  }

  return optionTotal * rentalDays;
}

function calculateAgeSurchargePrice(rentalDays) {
  let ageSurcharge = 0;
  let rentalPricePerDay = rentalDays * 29.99;

  if (ageYesSelectionRadio.checked) {
    ageSurcharge = rentalPricePerDay * 0.3;
    return ageSurcharge;
  } else {
    return (ageSurcharge = 0);
  }
}

function estimateCostButton() {
  let rentalDays = parseInt(
    document.getElementById("rentalDaysAmountInput").value
  );
  let carRentalPrice = document.getElementById("carRentalPrice");
  let ageSurcharge = document.getElementById("ageSurcharge");
  let totalAmountDue = document.getElementById("totalAmountDue");

  let rentalPricePerDay = rentalDays * 29.99;
  let optionTotal = calculateOptionTotal(rentalDays);
  let ageSurchargeTotal = calculateAgeSurchargePrice(rentalDays);
  let totalAmount = rentalPricePerDay + optionTotal + ageSurchargeTotal;

  carRentalPrice.innerText = rentalPricePerDay;
  optionsPrice.innerText = optionTotal.toFixed(2);
  ageSurcharge.innerText = ageSurchargeTotal.toFixed(2);

  totalAmountDue.innerText = totalAmount.toFixed(2);
}
