function printMessage(message) {
  console.log(message, "\n");
}

function composeMessage(startOfRange, endOfRange, expected, actual) {
  const result = expected === actual ? "✅" : "❌";
  let message = result + " Even numbers between ";
  message += startOfRange + "-" + endOfRange;
  message += " are " + actual + ", and should be " + expected;
  printMessage(message);
}

function even(startOfRange, endOfRange) {
  let evenNoString = "";
  let startRange = startOfRange;
  const firstEvenNo = startRange % 2 === 0 ? startRange : ++startRange;

  for (let evenNo = firstEvenNo; evenNo <= endOfRange; evenNo = evenNo + 2) {
    evenNoString += evenNo + " ";
  }

  return evenNoString;
}

function testEven(startOfRange, endOfRange, expectedValue) {
  let actualValue = even(startOfRange, endOfRange);
  composeMessage(startOfRange, endOfRange, actualValue, expectedValue);
}

function main() {
  console.log();
  testEven(0, 10, "0 2 4 6 8 10 ");
  testEven(10, 20, "10 12 14 16 18 20 ");
  testEven(25, 31, "26 28 30 ");
}

main();
