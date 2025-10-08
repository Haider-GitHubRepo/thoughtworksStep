function printMessage(message) {
  console.log(message, "\n");
}

function composeMessageToPrint(year, expected, actual) {
  const emoji = expected === actual ? "✅" : "❌";
  let message = emoji + " Is this  " + year + " Leap year? ";
  message += actual + ", and should be " + expected;
  printMessage(message);
}

function isDivisible(year, divisor) {
  return year % divisor === 0;
}

function isLeapYear(year) {
  const isDivisibleBy4Not100 = isDivisible(year, 4) && !isDivisible(year, 100);
  return isDivisibleBy4Not100 || isDivisible(year, 400);
}

function testIsLeapYear(year, expectedValue) {
  const actualValue = isLeapYear(year);
  composeMessageToPrint(year, expectedValue, actualValue);
}

function main() {
  testIsLeapYear(2024, true);
  testIsLeapYear(1900, false);
  testIsLeapYear(2100, false);
  testIsLeapYear(0, true);
  testIsLeapYear(1, false);
  testIsLeapYear(4, true);
}

main();
