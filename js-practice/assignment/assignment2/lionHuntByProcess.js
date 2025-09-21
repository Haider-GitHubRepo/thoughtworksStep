const testCase1 = "";
const testCase2 = "      ";

const testCaseToUse = testCase2;
const testCaseLength = testCaseToUse.length;
let minimumDistance;

let isTestCaseEmpty = true;
let containsOnlySpaces = true;

for (let currentCharacter = 0; currentCharacter < testCaseLength; currentCharacter++) {
    isTestCaseEmpty = false;
    if (testCaseToUse[currentCharacter] !== " ") {
        containsOnlySpaces = false;
    }
}

if (isTestCaseEmpty || containsOnlySpaces) {
    minimumDistance = -1;
}
console.log("Input: ", testCaseToUse, "Output: ", minimumDistance);
