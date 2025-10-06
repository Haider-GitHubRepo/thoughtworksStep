function printMessage(message) {
  console.log(message, "\n");
}

function composeMessage(startOfRange, endOfRange, actual, expected) {
  const result = (expected === actual) ? "✅" : "❌";
  let message = result + " Prime numbers between ";
  message += startOfRange + "-" + endOfRange;
  message += " are " + actual + ", and should be " + expected;
  printMessage(message);
}

function isPrime(primeCandidate) {
  let numberOfDivisors = 0;

  for (let divisorNo = 2; divisorNo < primeCandidate; divisorNo++) {
    if (primeCandidate % divisorNo === 0) {
      numberOfDivisors++;
    }
  }

  return numberOfDivisors === 0 && primeCandidate > 1;
}

function primeBetween(startOfRange, endOfRange) {
  let primeString = "";

  for (let candidate = startOfRange; candidate <= endOfRange; candidate++) {
    if (isPrime(candidate)) {
      primeString = primeString + candidate + " ";
    }
  }

  return primeString;
}

function testPrimeBetween(startOfRange, endOfRange, expectedValue) {
  const actualValue = primeBetween(startOfRange, endOfRange);
  composeMessage(startOfRange, endOfRange, actualValue, expectedValue);
}

function main() {
  console.log();
  testPrimeBetween(0, 10, "2 3 5 7 ");
  testPrimeBetween(10, 20, "11 13 17 19 ");
  testPrimeBetween(53, 100, "53 59 61 67 71 73 79 83 89 97 ");
}

main();
