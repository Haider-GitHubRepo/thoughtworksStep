const testCase1 = "LZ";
const testCase2 = "L Z";
const testCase3 = "L ZL";
const testCase4 = "Z  L  L";
const testCase5 = "L ZL";
const testCase6 = "Z L";
const testCase7 = "Z   Z   Z";
const testCase8 = "L     L";
const testCase9 = "L     Z";
const testCase10 = "L  ZL Z";
const testCase11 = "";
const testCase12 = " L L Z";

const testCaseToUse = testCase11;
const testCaseLength = testCaseToUse.length


let minimumDistance = testCaseToUse.length;
let currentDistance;

let onlyZebraInSavannah = 0;
let onlyLionInSavannah = 0;
let noAnimalInSavannah = 0;

for (let currentAnimal = 0; currentAnimal < testCaseLength; currentAnimal++) {

    if (testCaseToUse[currentAnimal] === "Z" || testCaseToUse[currentAnimal] === " ") {
        onlyZebraInSavannah++;
    }

    if (testCaseToUse[currentAnimal] === " ") {
        noAnimalInSavannah++;
    }

    if (testCaseToUse[currentAnimal] === "L" || testCaseToUse[currentAnimal] === " ") {
        onlyLionInSavannah++;
    }

    for (let nextCurrentAnimal = currentAnimal + 1; nextCurrentAnimal < testCaseToUse.length; nextCurrentAnimal++) {
        if (testCaseToUse[currentAnimal] === "L") {
            if (testCaseToUse[nextCurrentAnimal] === "Z") {
                currentDistance = nextCurrentAnimal - currentAnimal - 1;
                if (currentDistance < minimumDistance) {
                    minimumDistance = currentDistance;
                }
            }
        }

        if (testCaseToUse[currentAnimal] === "Z") {
            if (testCaseToUse[nextCurrentAnimal] === "L") {
                currentDistance = nextCurrentAnimal - currentAnimal - 1;
                if (currentDistance < minimumDistance) {
                    minimumDistance = currentDistance;
                }
            }
        }
    }
}

if (onlyLionInSavannah === testCaseLength || onlyZebraInSavannah === testCaseLength || noAnimalInSavannah === testCaseLength || testCaseLength === 0) {
    minimumDistance = -1;
}

console.log("Input: ", testCaseToUse, "Output: ", minimumDistance);
