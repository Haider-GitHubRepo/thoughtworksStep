function printMessage(message) {
  console.log(message, "\n");
}

function composeMessage(factorialNo, actual, expected) {
  const result = expected === actual ? "✅" : "❌";
  let message = result + " Factorial of " + factorialNo;
  message += " is " + actual + ", and should be " + expected;
  printMessage(message);
}

function factorial(factorialNo) {
  let factorial = 1;

  for (let currNo = 2; currNo <= factorialNo; currNo++) {
    factorial = factorial * currNo;
  }

  return factorial;
}

function testFactorial(nFactorial, expectedValue) {
  let actualValue = factorial(nFactorial);
  composeMessage(nFactorial, actualValue, expectedValue);
}

function main() {
  console.log();
  testFactorial(5, 120);
  testFactorial(6, 720);
  testFactorial(0, 1);
}

main();
