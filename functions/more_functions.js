// MAILING EXAMPLE
let myName = "Teddy";
let myAddress = "123 Sesame Street";
let myCity = "Pittsburgh";
let myState = "Pennsylvania";
let myZipcode = "12345";
displayMailingLabel(myName, myAddress, myCity, myState, myZipcode);

function displayMailingLabel(name, address, city, state, zipcode) {
  console.log("Name: " + myName);
  console.log("Name: " + myZipcode);
  console.log("Name: " + myCity);
  console.log("Name: " + myState);
  console.log("Name: " + myZipcode);
}

// ADDITION EXAMPLE
let num1 = 10;
let num2 = 5;

function addNumbers(x, y) {
  console.log(x + y);
}

addNumbers(num2, num2);

// RECEIPT EXAMPLE
let totalDue = 100;
let amountPaid = 60;
let changeDue = totalDue - amountPaid;

function displayReceipt(input1, input2) {
  console.log(
    "Total Due: $" +
      totalDue +
      " Amount Paid: $" +
      amountPaid +
      " Change Due: $" +
      changeDue
  );
}
displayReceipt(totalDue, amountPaid);
