function printMessage(message) {
  console.log(message, "\n");
}

function composeMessage(numberToCheck, actualValue, expectedValue) {
  const result = expectedValue === actualValue ? "✅" : "❌";
  let message = result + " Is this " + numberToCheck + " a Prime number ? ";
  message += actualValue + ", and should be " + expectedValue;
  printMessage(message);
}

function isPrime(numberToCheck) {
  if (numberToCheck <= 1) {
    return false;
  }

  for (let divisorNo = 2; divisorNo < numberToCheck; divisorNo++) {
    if (numberToCheck % divisorNo === 0) {
      return false;
    }
  }

  return true;
}

function testIsPrime(numberToCheck, expectedValue) {
  let actualValue = isPrime(numberToCheck);
  composeMessage(numberToCheck, actualValue, expectedValue);
}


function main() {
  testIsPrime(1, false);
  testIsPrime(2, true);
  testIsPrime(3, true);
  testIsPrime(4, false);
}

main();
