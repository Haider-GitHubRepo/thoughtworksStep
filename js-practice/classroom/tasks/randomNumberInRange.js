function printNumberInRange(start, end) {
  return start + Math.round(Math.random() * (end - start));
}

function main() {
  let startOfRange = 20;
  let endOfRange = 25;
  const isRangeInclusive = false;
  startOfRange = isRangeInclusive ? startOfRange : startOfRange + 1;
  endOfRange = isRangeInclusive ? endOfRange : endOfRange - 1;

  for (let index = 0; index < 20; index++) { // for-loop is not required
    const number = printNumberInRange(startOfRange, endOfRange);
    console.log(number);
  }
}

main();
