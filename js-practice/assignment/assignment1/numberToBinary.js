let number = 3;
let multiplier = 1;
let binaryOfString = 0;

while (number > 0) {
    let remainder = number % 2;
    binaryOfString = remainder * multiplier + binaryOfString;
    multiplier = multiplier * 10
    number = number % 2 == 0 ? number : --number;
    number = number / 2
}
console.log(binaryOfString);


