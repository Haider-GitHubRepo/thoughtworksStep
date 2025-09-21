
const testCase1 = "";
const testCase2 = "      ";
const testCase3 = " LL L L";
const testCase4 = " ZZ Z Z";

const testCaseToUse = testCase4;
const testCaseLength = testCaseToUse.length;
const lion = "L";
const zebra = "Z";

let minimumDistance;

let isTestCaseEmpty = true;
let containsOnlySpaces = true;
let onlyLionInSavannah = true;
let onlyZebraInSavannah = true;

for (let currentAnimal = 0; currentAnimal < testCaseLength; currentAnimal++) {

    isTestCaseEmpty = false;

    if (testCaseToUse[currentAnimal] === zebra) {
        onlyLionInSavannah = false;
    }
    if (testCaseToUse[currentAnimal] === lion) {
        onlyZebraInSavannah = false;
    }
    if (testCaseToUse[currentAnimal] !== " ") {
        containsOnlySpaces = false;
    }
}



if (isTestCaseEmpty || containsOnlySpaces || onlyLionInSavannah || onlyZebraInSavannah) {
    minimumDistance = -1;
}
console.log("Input: ", testCaseToUse, "Output: ", minimumDistance);

