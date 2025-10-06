function printMessage(message) {
  console.log(message, "\n");
}

function composeMessage(limit, actual, expected) {
  const result = expected === actual ? "✅" : "❌";
  let message = result + " Fibonacci Series upto " + limit;
  message += " is " + actual + ", and should be " + expected;
  printMessage(message);
}

function fibonacciSeries(limit) {
  let currentTerm = 0;
  let prevterm = 1;
  let fibonacciSeriesString = "";

  for (let range = 1; range <= limit; range++) {
    fibonacciSeriesString = fibonacciSeriesString + currentTerm + " ";
    prevterm = currentTerm + prevterm;
    currentTerm = prevterm - currentTerm;
  }

  return fibonacciSeriesString;
}

function testFibonacciSeries(limit, expectedValue) {
  const actualValue = fibonacciSeries(limit);
  composeMessage(limit, actualValue, expectedValue);
}

function main() {
  console.log();
  testFibonacciSeries(1, "0 ");
  testFibonacciSeries(2, "0 1 ");
  testFibonacciSeries(8, "0 1 1 2 3 5 8 13 ");
}

main();
