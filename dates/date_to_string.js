function currentDate() {
  let date = new Date();
  console.log(`${date.toString()}
${date.toDateString()}
${date.toUTCString()}
${date.toLocaleString()}
`);
}
currentDate()
