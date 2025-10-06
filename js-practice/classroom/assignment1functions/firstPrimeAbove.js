function printMessage(message) {
  console.log(message, "\n");
}

function composeMessage(startingNo, actual, expected) {
  const result = expected === actual ? "✅" : "❌";
  let message = result + " First Prime above " + startingNo;
  message += " is " + actual;
  message += ", and should be " + expected;
  printMessage(message);
}

function isPrime(primeCandidate) {
  let numberOfDivisors = 0;

  for (let divisorNo = 2; divisorNo < primeCandidate; divisorNo++) {
    if (primeCandidate % divisorNo === 0) {
      numberOfDivisors++;
    }
  }

  if (numberOfDivisors === 0 && primeCandidate !== 1) {
    const primeFound = true;
    return primeFound;
  }
}

function primeAbove(startingNumber) {
  let primeCandidate = startingNumber + 1;
  let primeFound = false;

  while (!primeFound) {
    primeFound = isPrime(primeCandidate);
    if (primeFound) {
      return primeCandidate;
    }
    primeCandidate++;
  }
}

function testPrimeAbove(startingNumber, expectedValue) {
  const actualValue = primeAbove(startingNumber);
  composeMessage(startingNumber, actualValue, expectedValue);
}

function main() {
  testPrimeAbove(1, 2);
  testPrimeAbove(2, 3);
  testPrimeAbove(4, 5);
  testPrimeAbove(91, 97);
  testPrimeAbove(14, 17);
}

main();
