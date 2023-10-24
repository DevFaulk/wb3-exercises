function convertCtoF(currentTemp) {
  let fahrenheitTemp = (9 / 5) * currentTemp + 32;
  return fahrenheitTemp;
}

console.log(convertCtoF(0).toFixed(2));
console.log(convertCtoF(100).toFixed(2));
console.log(convertCtoF(45).toFixed(2));
console.log(convertCtoF(19).toFixed(2));
console.log(convertCtoF(-7).toFixed(2));
console.log(convertCtoF(-40).toFixed(2));
