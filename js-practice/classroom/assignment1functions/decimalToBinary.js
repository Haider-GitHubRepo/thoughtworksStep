function printMessage(message) {
  console.log(message, "\n");
}

function composeMessage(decimalValue, actualValue, expectedValue) {
  const result = (expectedValue === actualValue) ? "✅" : "❌";
  let message = result + " Binary of " + decimalValue;
  message += " is " + actualValue + ", and should be " + expectedValue;
  printMessage(message);
}

function binaryOf(decimalValue) {
  let currentDigitPlace = 1;
  let binaryValue = 0;

  while (decimalValue != 0) {
    let lastDigit = (decimalValue % 2);
    binaryValue += currentDigitPlace * lastDigit;
    currentDigitPlace *= 10;
    decimalValue = (decimalValue % 2 === 0) ? decimalValue : --decimalValue;
    decimalValue = decimalValue / 2;
  }
  
  return binaryValue;
}

function testBinary(decimalValue, expectedValue) {
  let actualValue = binaryOf(decimalValue);
  composeMessage(decimalValue, actualValue, expectedValue);
}

function main() {
  console.log("");
  testBinary(4, 100);
  testBinary(12, 1100);
  testBinary(0, 0);
}

main();
