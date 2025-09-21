### Test Cases to Try

| Input         | Expected Output |
| ------------- | --------------- |
| `""`          | -1              |
| `"       "`   | -1              |
| `"L     L"`   | -1              |
| `"Z   Z   Z"` | -1              |
| `"Z   L   Z"` |  3              |
| `"L     Z"`   |  5              |
| `"LZ"`        |  0              |
| `"Z L"`       |  1              |
| `"L  ZL Z"`   |  0              |

<br>

### 1st Case:- If testCase string is empty 
```
const testCase = "";

const testCaseToUse = testCase;

const testCaseLength = testCase.length;
let minimumDistance;

if (testCaseLength === 0) {
    minimumDistance = -1;
}

console.log("Input: ", testCaseToUse, "Output: ", minimumDistance);


```

<br>

### 2nd Case:- If testCase string only contains spaces and previous case

``` 
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

 ```

<br>


 ### 3rd Case:- If testCase contains only "L" or only "Z" and previous cases
 <br>

 ```

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


 ```

 <br>

 ### 4th Case:- Minimum Distance between lion and zebra and previous test cases

 ```
 

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

 ```



