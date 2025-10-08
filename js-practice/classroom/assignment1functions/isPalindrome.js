function printMessage(message) {
  console.log(message, "\n");
}

function composeMessageToPrint(numberToCheck, expected, actual) {
  const emoji = (expected === actual) ? "✅" : "❌";
  let message = emoji + " Is this  " + numberToCheck + " Palindrome number? ";
  message += actual + ", and should be " + expected;
  printMessage(message);
}

function reverseNumber(numberToCheck) {
  let reverseOfNumber = 0;

  while (numberToCheck > 0) {
    const lastDigit = numberToCheck % 10;
    reverseOfNumber = (reverseOfNumber * 10) + lastDigit;
    numberToCheck = (numberToCheck - lastDigit) / 10;
  }

  return reverseOfNumber;
}

function isPalindrome(numberToCheck) {
  return numberToCheck === reverseNumber(numberToCheck);
}

function testIsPalindrome(numberToCheck, expectedValue) {
  const actualValue = isPalindrome(numberToCheck);
  composeMessageToPrint(numberToCheck, expectedValue, actualValue);
}

function main() {
  testIsPalindrome(121, true);
  testIsPalindrome(0, true);
  testIsPalindrome(11, true);
  testIsPalindrome(1634, false);
  testIsPalindrome(12340504321, true);
}

main();
