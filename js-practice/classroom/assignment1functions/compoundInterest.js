function printMessage(message) {
  console.log(message, "\n");
}

function approx(expected, actual) {
  const diff = expected < actual ? actual - expected : expected - actual;
  return diff <= 0.05;
}

function composeMessage(prinpal, time, rate, expected, actual) {
  const result = approx(expected, actual) ? "✅" : "❌";
  let message = result + " Compound Interest of Principal = " + prinpal;
  message += ", Time = " + time + ", Rate = " + rate;
  message += " is " + actual + ", and should be " + expected;
  printMessage(message);
}

function calculateAmount(principal, time, rate) {

  for (let year = 1; year <= time; year++) {
    const SIForCurrYear = (principal * rate) / 100;
    principal = principal + SIForCurrYear;
  }
  const totalAmount = principal;

  return totalAmount;
}

function calculateCI(principal, time, rate) {
  const totalAmount = calculateAmount(principal, time, rate);
  const compoundInterest = totalAmount - principal;

  return compoundInterest;
}

function testCompoundInterest(principal, time, rate, expectedValue) {
  const actualValue = calculateCI(principal, time, rate);
  composeMessage(principal, time, rate, expectedValue, actualValue);
}

function main() {
  console.log("");
  testCompoundInterest(1000, 5, 10, 610.51);
  testCompoundInterest(12000, 2, 9, 2257.20);
  testCompoundInterest(498, 2, 5, 51.04);
  testCompoundInterest(100, 2, 10, 21);
  testCompoundInterest(100, 12, 10, 213.84);
  testCompoundInterest(100, 2, 3 / 2, 3.02);
}

main();
