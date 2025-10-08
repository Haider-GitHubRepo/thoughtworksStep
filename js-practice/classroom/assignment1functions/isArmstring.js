function printMessage(message) {
  console.log(message, "\n");
}

function composeMessageToPrint(numberToCheck, expectedValue, actualValue) {
  const emoji = expectedValue === actualValue ? "✅" : "❌";
  let message = emoji + " Is this  " + numberToCheck + " Armstrong number? ";
  message +=actualValue + ", and should be " + expectedValue;
  printMessage(message);
}

function sumAndCubeDigits(numberToCheck, power) {
  let sumOfDigitsCube = 0;
  
  while (numberToCheck > 0) {
    const lastDigit = numberToCheck % 10;
    sumOfDigitsCube = sumOfDigitsCube + (lastDigit ** power);
    numberToCheck = (numberToCheck - lastDigit) / 10;
  }

  return sumOfDigitsCube;
}

function power(numberToCheck) {
  numberToCheck = numberToCheck + "";

  return numberToCheck.length;
}

function isArmstrong(numberToCheck) {
  const originalNumber = numberToCheck;
  const power = power(numberToCheck);
  const sumOfDigitsCube = sumAndCubeDigits(numberToCheck, power);

  return sumOfDigitsCube === originalNumber;
}

function testIsArmstrong(numberToCheck, expectedValue) {
  const actualValue = isArmstrong(numberToCheck);
  composeMessageToPrint(numberToCheck, expectedValue, actualValue);
}

function main() {
  testIsArmstrong(153, true);
  testIsArmstrong(370, true);
  testIsArmstrong(0, true);
  testIsArmstrong(1634, true);
  testIsArmstrong(77, false);
}

main();
