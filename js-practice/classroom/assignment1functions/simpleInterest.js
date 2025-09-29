function printMessage(message) {
  console.log(message, "\n");
}

function approx(expected, actual) {
  const isActualLess = expected < actual;
  const difference = (isActualLess) ? actual - expected : expected - actual;
  return difference < 1;
}

function composeMessageToPrint(prinpal, time, rate, expected, actual) {
  const result = approx(expected, actual) ? "✅" : "❌";
  let message = result + " Simple Interest of Principal = " + prinpal;
  message += ", Time = " + time + ", Rate = " + rate;
  message += " is " + actual + ", and should be " + expected;
  printMessage(message);
}

function simpleInterest(prinpal, time, rate) {
  return (prinpal * time * rate) / 100;
}

function testSimpleInterest(prinpal, time, rate, expected) {
  const actualValue = simpleInterest(prinpal, time, rate,);
  composeMessageToPrint(prinpal, time, rate, expected, actualValue);
}

function main() {
  testSimpleInterest(100, 2, 5, 10);
  testSimpleInterest(987, 7, 9.2, 635);
  testSimpleInterest(45, 4, -2, -3.6);
}

main();
