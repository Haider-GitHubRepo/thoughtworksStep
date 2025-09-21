let stringToCheck = "dad";
const stringLength = stringToCheck.length;
let reverseOfString = "";

for (let currentCharacter = stringLength - 1; currentCharacter >= 0; currentCharacter--) {
    reverseOfString = reverseOfString + stringToCheck[currentCharacter];
}

const output = (reverseOfString === stringToCheck) ? "is a palindrome" : "is not a palindrome";

console.log(stringToCheck, output);
