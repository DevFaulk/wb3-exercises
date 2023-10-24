function convertFtoC(currentTemp) {
  let celsiusTemp = (currentTemp - 32) / 1.8;

  return celsiusTemp;
}

console.log(convertFtoC(212).toFixed(2));
console.log(convertFtoC(90).toFixed(2));
console.log(convertFtoC(72).toFixed(2));
console.log(convertFtoC(32).toFixed(2));
console.log(convertFtoC(0).toFixed(2));
console.log(convertFtoC(-40).toFixed(2));
