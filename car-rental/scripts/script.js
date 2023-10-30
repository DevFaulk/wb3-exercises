let pickupDate = document.getElementById("pickupDateInput");
let rentalDays = document.getElementById("rentalDaysAmountInput").value;
let carRentalPrice = document.getElementById("carRentalPrice");
let optionsPrice = document.getElementById("optionsPrice");
let ageSurcharge = document.getElementById("ageSurcharge");
let totalAmountDue = document.getElementById("totalAmountDue");
let optionOne = document.getElementById("optionOne");
let optionTwo = document.getElementById("optionTwo");
let optionThree = document.getElementById("optionThree");

let rentalDaysNumber = Number(rentalDays);

let tollTagPrice = 3.95 * rentalDaysNumber;
let gpsPrice = 2.95 * rentalDaysNumber;
let rsaPrice = 2.95 * rentalDaysNumber;

let rentalPricePerDay = rentalDaysNumber * 29.99;

function carOptionsCheckbox() {
  if (optionOne.checked) {
    let optionsSelected = tollTagPrice;
  } else if (optionTwo.checked) {
    let optionsSelected = gpsPrice;
  } else if (optionThree.checked) {
    let optionsSelected = rsaPrice;
  } else if ((optionOne.checked, optionTwo.checked)) {
    let optionsSelected = tollTagPrice + gpsPrice;
  } else if ((optionTwo.checked, optionThree.checked)) {
    let optionsSelected = gpsPrice + rsaPrice;
  } else if ((optionOne.checked, optionTwo.checked, optionThree.checked)) {
    let optionsSelected = tollTagPrice + gpsPrice + rsaPrice;
  }
}

function underTwentyFiveToggle() {
  if (AgeNoSelectionRadio.checked == true) {
    let underTwentyFiveRentalPricePerDay = 0;
    ageYesSelectionRadio.checked = false;
  } else if (ageYesSelectionRadio.checked == false) {
    let underTwentyFiveRentalPricePerDay =
      rentalPricePerDay + rentalPricePerDay * 0.3;
    AgeNoSelectionRadio.checked = false;
  }
}

function estimateCostButton() {
  carRentalPrice.innerText = rentalPricePerDay;
  optionsPrice.innerText = optionsSelected;
  ageSurcharge.innerText = underTwentyFiveRentalPricePerDay - rentalPricePerDay;
  totalAmountDue.innerText = carRentalPrice + optionsPrice + ageSurcharge;
}
