function printMessage(message) {
  console.log(message, "\n");
}

function composeMessage(firstTerm, secondTerm, expectedValue, actualValue) {
  const result = expectedValue === actualValue ? "✅" : "❌";
  let message = result + " HCF of " + firstTerm + " and " + secondTerm + " ";
  message += actualValue + ", and should be " + expectedValue;
  printMessage(message);
}

function findHCF(firstTerm, secondTerm) {
  const greatestValue = firstTerm > secondTerm ? firstTerm : secondTerm;
  let hcf = 1;

  for (let divisor = 1; divisor <= greatestValue; divisor++) {
    if (firstTerm % divisor === 0 && secondTerm % divisor === 0) {
      hcf = divisor;
    }
  }

  return hcf;
}

function testFindHCF(firstTerm, secondTerm, expectedValue) {
  const actualValue = findHCF(firstTerm, secondTerm);
  composeMessage(firstTerm, secondTerm, expectedValue, actualValue);
}

function main() {
  console.log();
  testFindHCF(60, 48, 12);
  testFindHCF(7, 13, 1);
  testFindHCF(-24, 36, 12);
  testFindHCF(0, 9, 9);
  testFindHCF(9, 0, 9);
}

main();
