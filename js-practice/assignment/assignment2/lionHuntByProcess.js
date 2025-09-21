

const testCase1 = "";
const testCase2 = "      ";
const testCase3 = " LL L L";
const testCase4 = " ZZ Z Z";
const testCase5 = "L  ZL Z";
const testCase6 = "LZ";
const testCase7 = "Z   L   Z";
const testCase8 = "L     Z";
const testCase9 = "Z L";
const testCase10 = "   L  ZL Z";
const testCase11 = "   ZL L  Z   Z   L LZ L Z  ZL ZL Z Z ZL LZ"

const testCaseToUse = testCase1;
const testCaseLength = testCaseToUse.length;
const lion = "L";
const zebra = "Z";

let minimumDistance = testCaseLength;

let isTestCaseEmpty = true;
let containsOnlySpaces = true;
let onlyLionInSavannah = true;
let onlyZebraInSavannah = true;

let lionFoundAt;
let zebraFoundAt;

for (let currentAnimal = 0; currentAnimal < testCaseLength; currentAnimal++) {

    isTestCaseEmpty = false;

    if (testCaseToUse[currentAnimal] === lion) {
        lionFoundAt = currentAnimal;
        onlyZebraInSavannah = false;
        containsOnlySpaces = false;
    }

    if (testCaseToUse[currentAnimal] === zebra) {
        zebraFoundAt = currentAnimal;
        onlyLionInSavannah = false;
        containsOnlySpaces = false;
    }

    let currentDistance = (lionFoundAt > zebraFoundAt) ? lionFoundAt - zebraFoundAt - 1 : zebraFoundAt - lionFoundAt - 1;

    if (currentDistance < minimumDistance) {
        minimumDistance = currentDistance;
    }
}

if (isTestCaseEmpty || containsOnlySpaces || onlyLionInSavannah || onlyZebraInSavannah) {
    minimumDistance = -1;
}
console.log("Input: ", testCaseToUse, "Output: ", minimumDistance);

